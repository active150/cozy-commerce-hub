import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wallet, CreditCard, Truck, RefreshCw } from 'lucide-react';

export const PromoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Payment Methods Banner */}
        <div className="bg-foreground text-background rounded-2xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-center">
              <span className="text-primary text-sm font-medium mb-4">Payment Innovation</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Pay Your Way,
                <br />
                Including Crypto
              </h2>
              <p className="text-background/70 mb-6">
                We accept all major credit cards, PayPal, and cryptocurrency payments 
                including Ethereum, Bitcoin, and USDC. Connect your Metamask wallet 
                for seamless crypto checkout.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="terracotta" asChild>
                  <Link to="/wallet">
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Link>
                </Button>
                <Button variant="ghost" className="text-background hover:text-background hover:bg-background/10" asChild>
                  <Link to="/crypto-payments">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-background/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">Ξ</span>
                  </div>
                  <span className="text-sm font-medium">Ethereum</span>
                </div>
                <div className="bg-background/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">₿</span>
                  </div>
                  <span className="text-sm font-medium">Bitcoin</span>
                </div>
                <div className="bg-background/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">Cards</span>
                </div>
                <div className="bg-background/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">PP</span>
                  </div>
                  <span className="text-sm font-medium">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Free Delivery</h3>
            <p className="text-sm text-muted-foreground">
              On orders over £150
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Easy Returns</h3>
            <p className="text-sm text-muted-foreground">
              30-day return policy
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Crypto Accepted</h3>
            <p className="text-sm text-muted-foreground">
              ETH, BTC, USDC
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Secure Payment</h3>
            <p className="text-sm text-muted-foreground">
              SSL encrypted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
