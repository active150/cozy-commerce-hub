import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { BrowserProvider, formatEther, Contract } from 'ethers';
import { toast } from 'sonner';

interface WalletState {
  address: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  ethBalance: string;
  usdcBalance: string;
  chainId: number | null;
  chainName: string;
}

interface WalletContextType extends WalletState {
  connect: () => Promise<void>;
  disconnect: () => void;
  showConnectPrompt: boolean;
  setShowConnectPrompt: (show: boolean) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

// USDC contract address on Ethereum mainnet
const USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
];

const getChainName = (chainId: number): string => {
  const chains: Record<number, string> = {
    1: 'Ethereum Mainnet',
    5: 'Goerli Testnet',
    11155111: 'Sepolia Testnet',
    137: 'Polygon',
    80001: 'Mumbai Testnet',
    42161: 'Arbitrum One',
  };
  return chains[chainId] || `Chain ${chainId}`;
};

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [walletState, setWalletState] = useState<WalletState>({
    address: null,
    isConnected: false,
    isConnecting: false,
    ethBalance: '0',
    usdcBalance: '0',
    chainId: null,
    chainName: '',
  });
  const [showConnectPrompt, setShowConnectPrompt] = useState(false);
  const [promptInterval, setPromptInterval] = useState<NodeJS.Timeout | null>(null);

  const fetchBalances = useCallback(async (address: string, provider: BrowserProvider) => {
    try {
      // Fetch ETH balance
      const ethBalance = await provider.getBalance(address);
      const formattedEth = parseFloat(formatEther(ethBalance)).toFixed(4);

      // Try to fetch USDC balance (only works on mainnet)
      let formattedUsdc = '0';
      try {
        const network = await provider.getNetwork();
        if (network.chainId === BigInt(1)) {
          const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, provider);
          const usdcBalance = await usdcContract.balanceOf(address);
          const decimals = await usdcContract.decimals();
          formattedUsdc = (Number(usdcBalance) / Math.pow(10, Number(decimals))).toFixed(2);
        }
      } catch (e) {
        console.log('Could not fetch USDC balance:', e);
      }

      setWalletState(prev => ({
        ...prev,
        ethBalance: formattedEth,
        usdcBalance: formattedUsdc,
      }));
    } catch (error) {
      console.error('Error fetching balances:', error);
    }
  }, []);

  const connect = useCallback(async () => {
    if (typeof window.ethereum === 'undefined') {
      toast.error('Metamask not detected', {
        description: 'Please install Metamask to connect your wallet',
        action: {
          label: 'Install',
          onClick: () => window.open('https://metamask.io/download/', '_blank'),
        },
      });
      return;
    }

    setWalletState(prev => ({ ...prev, isConnecting: true }));

    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const address = accounts[0];
      const network = await provider.getNetwork();
      const chainId = Number(network.chainId);

      setWalletState(prev => ({
        ...prev,
        address,
        isConnected: true,
        isConnecting: false,
        chainId,
        chainName: getChainName(chainId),
      }));

      // Clear the prompt interval once connected
      if (promptInterval) {
        clearInterval(promptInterval);
        setPromptInterval(null);
      }
      setShowConnectPrompt(false);

      await fetchBalances(address, provider);

      toast.success('Wallet connected!', {
        description: `Connected to ${address.slice(0, 6)}...${address.slice(-4)}`,
      });
    } catch (error: any) {
      console.error('Error connecting wallet:', error);
      setWalletState(prev => ({ ...prev, isConnecting: false }));
      toast.error('Connection failed', {
        description: error.message || 'Could not connect to wallet',
      });
    }
  }, [fetchBalances, promptInterval]);

  const disconnect = useCallback(() => {
    setWalletState({
      address: null,
      isConnected: false,
      isConnecting: false,
      ethBalance: '0',
      usdcBalance: '0',
      chainId: null,
      chainName: '',
    });
    toast.info('Wallet disconnected');
  }, []);

  // Listen for account and chain changes
  useEffect(() => {
    if (typeof window.ethereum === 'undefined') return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect();
      } else if (accounts[0] !== walletState.address) {
        setWalletState(prev => ({ ...prev, address: accounts[0] }));
        const provider = new BrowserProvider(window.ethereum);
        fetchBalances(accounts[0], provider);
      }
    };

    const handleChainChanged = (chainIdHex: string) => {
      const chainId = parseInt(chainIdHex, 16);
      setWalletState(prev => ({
        ...prev,
        chainId,
        chainName: getChainName(chainId),
      }));
      // Refresh balances on chain change
      if (walletState.address) {
        const provider = new BrowserProvider(window.ethereum);
        fetchBalances(walletState.address, provider);
      }
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    };
  }, [walletState.address, disconnect, fetchBalances]);

  // Auto-prompt to connect every 3 seconds if not connected
  useEffect(() => {
    if (!walletState.isConnected && typeof window.ethereum !== 'undefined') {
      const interval = setInterval(() => {
        if (!walletState.isConnected) {
          setShowConnectPrompt(true);
        }
      }, 3000);
      setPromptInterval(interval);

      return () => clearInterval(interval);
    }
  }, [walletState.isConnected]);

  // Check if already connected on mount
  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new BrowserProvider(window.ethereum);
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            const address = accounts[0].address;
            const network = await provider.getNetwork();
            const chainId = Number(network.chainId);

            setWalletState(prev => ({
              ...prev,
              address,
              isConnected: true,
              chainId,
              chainName: getChainName(chainId),
            }));

            await fetchBalances(address, provider);
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
        }
      }
    };

    checkConnection();
  }, [fetchBalances]);

  return (
    <WalletContext.Provider
      value={{
        ...walletState,
        connect,
        disconnect,
        showConnectPrompt,
        setShowConnectPrompt,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

// Type declaration for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}
