import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  shop: [
    { name: 'Sofas', href: '/category/sofas' },
    { name: 'Chairs', href: '/category/chairs' },
    { name: 'Tables', href: '/category/tables' },
    { name: 'Lighting', href: '/category/lighting' },
    { name: 'Storage', href: '/category/storage' },
    { name: 'Decor', href: '/category/decor' },
  ],
  help: [
    { name: 'Delivery', href: '/delivery' },
    { name: 'Returns', href: '/returns' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Track Order', href: '/track-order' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Press', href: '/press' },
  ],
  payment: [
    { name: 'Crypto Payments', href: '/crypto-payments' },
    { name: 'Pay with Card', href: '/card-payments' },
    { name: 'PayPal', href: '/paypal' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl mb-3">
              Join Our Newsletter
            </h3>
            <p className="text-background/70 mb-6">
              Get 10% off your first order plus exclusive access to new arrivals and sales.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="terracotta">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-semibold">
                LUXE<span className="text-primary">HOME</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Curated furniture and home decor for modern living. Designed for you.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Payments</h4>
            <ul className="space-y-3">
              {footerLinks.payment.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-10 h-6 bg-background/10 rounded flex items-center justify-center text-xs">
                ETH
              </div>
              <div className="w-10 h-6 bg-background/10 rounded flex items-center justify-center text-xs">
                BTC
              </div>
              <div className="w-10 h-6 bg-background/10 rounded flex items-center justify-center text-xs">
                USDC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© 2024 LuxeHome. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-background transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
