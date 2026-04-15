import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-manatech-blue/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Manatech Home">
          <div className={`w-11 h-11 rounded-xl overflow-hidden border-2 transition-all duration-300 bg-white flex items-center justify-center ${scrolled ? 'border-manatech-blue/10 shadow-md' : 'border-white/20 shadow-xl'}`}>
            <Logo size={30} />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-bold tracking-tight leading-none transition-colors duration-300 ${scrolled ? 'text-manatech-blue' : 'text-white'}`}>
              MANATECH
            </span>
            <span className={`text-[9px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${scrolled ? 'text-manatech-teal' : 'text-blue-200'}`}>
              Analyze • Design • Create
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
                location.pathname === link.path
                  ? scrolled 
                    ? 'text-manatech-blue bg-manatech-blue/5' 
                    : 'text-white bg-white/10'
                  : scrolled
                    ? 'text-slate-600 hover:text-manatech-blue hover:bg-manatech-blue/5'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${scrolled ? 'bg-manatech-orange' : 'bg-white'}`}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-all ${
            scrolled 
              ? 'text-manatech-blue hover:bg-manatech-blue/5' 
              : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          id="mobile-menu-toggle"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-border shadow-2xl"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    location.pathname === link.path
                      ? 'text-manatech-blue bg-manatech-blue/5'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-manatech-blue hover:bg-manatech-blue/90 text-white w-full mt-3 rounded-xl h-12"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
