import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Payment from '@/pages/Payment';
import NotFound from '@/pages/NotFound';
import { ChevronUp, MessageCircle, Cookie } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

/* ── Scroll restoration on route change ─────────────────────────────────── */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

/* ── Back-to-top button ──────────────────────────────────────────────────── */
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      id="back-to-top"
      className={`fixed bottom-8 right-6 z-50 p-3 rounded-full bg-manatech-blue text-white shadow-2xl shadow-manatech-blue/30 hover:bg-manatech-orange hover:shadow-manatech-orange/30 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}

/* ── WhatsApp floating button ────────────────────────────────────────────── */
function WhatsAppButton() {
  return (
    <a
      href={CONTACT_INFO.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float"
      className="fixed bottom-8 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-green-500/40 hover:bg-[#1ebe5c] hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}

/* ── Scroll progress bar ─────────────────────────────────────────────────── */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-manatech-blue via-manatech-orange to-manatech-teal transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ── Branded page loading animation ─────────────────────────────────────── */
function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1400);
    const t2 = setTimeout(() => setVisible(false), 1950);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-manatech-blue flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="space-y-6 text-center">
        <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto shadow-2xl overflow-hidden">
          <img src="/favicon.svg" alt="MANATECH" className="w-12 h-12" />
        </div>
        <div className="space-y-1.5">
          <div className="text-3xl font-bold text-white tracking-[0.2em]">MANATECH</div>
          <div className="text-[11px] text-manatech-orange font-bold uppercase tracking-[0.35em]">
            Analyze • Design • Create
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/40 animate-bounce"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Cookie consent banner ───────────────────────────────────────────────── */
function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('manatech-cookie-consent');
    if (!hasConsented) {
      const t = setTimeout(() => setIsVisible(true), 2800);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (choice) => {
    localStorage.setItem('manatech-cookie-consent', choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[55] p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto bg-slate-900/95 border border-white/10 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-start gap-4 flex-grow">
          <div className="w-12 h-12 rounded-xl bg-manatech-orange/20 flex items-center justify-center text-manatech-orange shrink-0">
            <Cookie size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Cookie Settings</h4>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed max-w-3xl">
              We employ standard cookies to optimize your browsing journey, analyze traffic flow patterns, and secure technical communication lines. Continuing authorization grants access to our standard operational telemetry metrics.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto shrink-0 pt-4 lg:pt-0 lg:ml-auto border-t lg:border-t-0 border-white/5 justify-end">
          <button
            onClick={() => dismiss('declined')}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
          >
            Preferences
          </button>
          <button
            onClick={() => dismiss('accepted')}
            className="px-6 py-2.5 rounded-xl bg-manatech-orange hover:bg-manatech-orange/90 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-manatech-orange/20 cursor-pointer hover:scale-[1.02]"
          >
            Allow Cookies
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Root App ────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <Router>
      <PageLoader />
      <ScrollProgressBar />
      <ScrollToTop />
      <BackToTop />
      <WhatsAppButton />
      <CookieConsent />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pay" element={<Payment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
