import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/context/WalletContext';
import { Wallet, Copy, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const WalletPage = () => {
  const {
    address,
    isConnected,
    isConnecting,
    connect,
    disconnect,
    ethBalance,
    usdcBalance,
    chainName,
  } = useWallet();

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast.success('Address copied to clipboard');
    }
  };

  const openEtherscan = () => {
    if (address) {
      window.open(`https://etherscan.io/address/${address}`, '_blank');
    }
  };

  // Simulated BTC balance for demo (Metamask doesn't support BTC)
  const btcBalance = '0.0000';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl font-semibold mb-3">
              Crypto Wallet
            </h1>
            <p className="text-muted-foreground">
              Connect your wallet to pay with crypto and view your balances
            </p>
          </div>

          {!isConnected ? (
            /* Not Connected State */
            <div className="bg-card rounded-2xl p-8 text-center shadow-elegant">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="font-display text-2xl mb-3">No Wallet Connected</h2>
              <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                Connect your Metamask wallet to view your crypto balances and pay with cryptocurrency.
              </p>
              <Button
                size="xl"
                onClick={connect}
                disabled={isConnecting}
                className="min-w-[200px]"
              >
                {isConnecting ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <Wallet className="w-5 h-5 mr-2" />
                    Connect Metamask
                  </>
                )}
              </Button>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Don't have Metamask?{' '}
                  <a
                    href="https://metamask.io/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Download here
                  </a>
                </p>
              </div>
            </div>
          ) : (
            /* Connected State */
            <div className="space-y-6">
              {/* Wallet Info Card */}
              <div className="bg-card rounded-2xl p-6 shadow-elegant">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-lg">🦊</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Connected Wallet</p>
                      <p className="font-medium">{chainName}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={disconnect}>
                    Disconnect
                  </Button>
                </div>

                {/* Address */}
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-2">Wallet Address</p>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 font-mono text-sm break-all">
                      {address}
                    </code>
                    <Button variant="ghost" size="icon" onClick={copyAddress}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={openEtherscan}>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Balances */}
              <div className="grid gap-4">
                <h2 className="font-display text-xl font-semibold">Your Balances</h2>
                
                {/* ETH Balance */}
                <div className="bg-card rounded-xl p-5 shadow-elegant hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      Ξ
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Ethereum</p>
                      <p className="font-display text-2xl font-semibold">{ethBalance} ETH</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">≈ $---.--</p>
                    </div>
                  </div>
                </div>

                {/* USDC Balance */}
                <div className="bg-card rounded-xl p-5 shadow-elegant hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      USDC
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">USD Coin</p>
                      <p className="font-display text-2xl font-semibold">{usdcBalance} USDC</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">≈ ${usdcBalance}</p>
                    </div>
                  </div>
                </div>

                {/* BTC Notice */}
                <div className={cn(
                  "bg-muted/50 rounded-xl p-5 border border-dashed border-border",
                )}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      ₿
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Bitcoin</p>
                      <p className="font-display text-2xl font-semibold text-muted-foreground">{btcBalance} BTC</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-xs">Not supported by Metamask</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="font-display text-lg font-semibold mb-2">
                  Pay with Crypto
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your connected wallet can be used to pay for orders with ETH or USDC at checkout. 
                  Simply select "Pay with Crypto" during checkout.
                </p>
                <Button variant="terracotta" asChild>
                  <a href="/category/all">Start Shopping</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WalletPage;
