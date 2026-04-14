import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import { CONTACT_INFO } from '@/constants';
import Logo from '@/components/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-manatech-dark text-white pt-20 pb-8 overflow-hidden relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-bg" />
      
      {/* Decorative background elements */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-manatech-teal/5 rounded-full blur-3xl" />
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-manatech-orange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
              {[
                'IT Support',
                'Data Analysis',
                'Online Tutoring',
                'Graphic Design',
                'Project Assist',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-blue-200/70 hover:text-white flex items-center gap-2 transition-all duration-200 group text-sm"
                  >
                    <ChevronRight
                      size={12}
                      className="text-manatech-teal group-hover:translate-x-1 transition-transform"
                    />
                    {item}
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
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-200/50">
          <p>© {currentYear} MANATECH. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed for a <span className="text-manatech-teal font-semibold">SMARTER</span> future.
          </p>
        </div>
      </div>
    </footer>
  );
}
