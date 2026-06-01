import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '@/constants';
import Logo from '@/components/Logo';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterState, setNewsletterState] = useState('idle'); // 'idle'|'loading'|'success'

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) return;
    setNewsletterState('loading');
    try {
      const res = await fetch('https://formspree.io/f/mjgpqgda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: newsletterEmail, _subject: 'Newsletter Signup' }),
      });
      setNewsletterState(res.ok ? 'success' : 'idle');
      if (res.ok) setNewsletterEmail('');
    } catch {
      setNewsletterState('idle');
    }
  };

  return (
    <footer id="site-footer" className="bg-manatech-dark text-white pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 overflow-hidden relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-bg" />
      
      {/* Decorative background elements */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-manatech-teal/5 rounded-full blur-3xl" />
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-manatech-orange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Newsletter Row */}
        <div className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-white/5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white uppercase tracking-widest">Stay in the Loop</h4>
              <p className="text-sm text-blue-200/50">Get updates on our latest services, tips and promotions.</p>
            </div>
            {newsletterState === 'success' ? (
              <div className="flex items-center gap-2 text-sm font-bold text-manatech-teal">
                <CheckCircle2 size={18} />
                <span>You're subscribed! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 lg:w-72 h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-manatech-orange/50 focus:ring-2 focus:ring-manatech-orange/10 transition-all"
                />
                <button
                  type="submit"
                  disabled={newsletterState === 'loading'}
                  className="h-11 px-5 rounded-xl bg-manatech-orange text-white text-xs font-bold uppercase tracking-widest hover:bg-manatech-orange/90 transition-all shadow-lg shadow-manatech-orange/20 flex items-center gap-2 shrink-0 disabled:opacity-60 cursor-pointer"
                >
                  <Send size={14} />
                  {newsletterState === 'loading' ? 'Sending...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl overflow-hidden border-2 border-white/10 shadow-lg group-hover:scale-105 transition-transform bg-white flex items-center justify-center">
                <Logo size={30} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  MANATECH
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-manatech-teal font-semibold">
                  Analyze • Design • Create
                </span>
              </div>
            </Link>
            <p className="text-blue-200/70 text-sm leading-relaxed max-w-xs">
              Transforming your vision through innovative design, data-driven
              insights, and expert tech support for a smarter future.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: MessageCircle, href: CONTACT_INFO.socials.whatsapp, label: 'WhatsApp' },
                { icon: Linkedin, href: CONTACT_INFO.socials.linkedin, label: 'LinkedIn' },
                { icon: Facebook, href: CONTACT_INFO.socials.facebook, label: 'Facebook' },
                { icon: Instagram, href: CONTACT_INFO.socials.instagram, label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-manatech-orange hover:scale-110 transition-all duration-300 text-blue-200/70 hover:text-white"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-manatech-orange uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Testimonials', path: '/#testimonials' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-blue-200/70 hover:text-white flex items-center gap-2 transition-all duration-200 group text-sm"
                  >
                    <ChevronRight
                      size={12}
                      className="text-manatech-teal group-hover:translate-x-1 transition-transform"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-manatech-orange uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-blue-200/70 hover:text-white flex items-center gap-2 transition-all duration-200 group text-sm"
                  >
                    <ChevronRight
                      size={12}
                      className="text-manatech-teal group-hover:translate-x-1 transition-transform"
                    />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-manatech-orange uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={14} className="text-manatech-teal" />
                </div>
                <div className="flex flex-col gap-1">
                  {CONTACT_INFO.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-sm text-blue-200/70 hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-manatech-teal" />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-blue-200/70 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-blue-200/50">
          <p>© {currentYear} MANATECH. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed for a <span className="text-manatech-teal font-semibold">SMARTER</span> future.
          </p>
        </div>
      </div>
    </footer>
  );
}
