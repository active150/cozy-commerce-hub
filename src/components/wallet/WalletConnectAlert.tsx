import { useWallet } from '@/context/WalletContext';
import { Button } from '@/components/ui/button';
import { X, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

export const WalletConnectAlert = () => {
  const { showConnectPrompt, setShowConnectPrompt, connect, isConnecting, isConnected } = useWallet();

  if (isConnected || !showConnectPrompt) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up",
        "bg-foreground text-background rounded-xl shadow-elegant-xl",
        "p-4 md:p-6 max-w-md w-[calc(100%-2rem)] md:w-auto"
      )}
    >
      <button
        onClick={() => setShowConnectPrompt(false)}
        className="absolute top-3 right-3 p-1 hover:bg-background/10 rounded-full transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Wallet className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-semibold mb-1">
            Connect Your Wallet
          </h3>
          <p className="text-sm text-background/70 mb-4">
            Connect Metamask to unlock crypto payments and track your wallet balance.
          </p>
          <div className="flex gap-3">
            <Button
              variant="terracotta"
              size="sm"
              onClick={connect}
              disabled={isConnecting}
            >
              {isConnecting ? 'Connecting...' : 'Connect Metamask'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-background/70 hover:text-background hover:bg-background/10"
              onClick={() => setShowConnectPrompt(false)}
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
