import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
  Zap,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { CONTACT_INFO } from '@/constants';

// Rate limiting: track last submission time
let lastSubmitTime = 0;
const RATE_LIMIT_MS = 30000; // 30 second cooldown between submissions

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'IT Support',
    message: '',
  });

  // Honeypot field — invisible to users, bots auto-fill it
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Required';
    } else if (formData.firstName.trim().length > 50) {
      newErrors.firstName = 'Too long';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Required';
    } else if (formData.lastName.trim().length > 50) {
      newErrors.lastName = 'Too long';
    }
    if (!formData.email.trim()) {
       newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
       newErrors.email = 'Invalid';
    } else if (formData.email.trim().length > 100) {
       newErrors.email = 'Too long';
    }
    if (formData.phone.trim() && !/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Invalid format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Required';
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Maximum 2000 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check — if filled, silently reject (bots fill hidden fields)
    if (honeypot) {
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      return;
    }

    // Rate limiting — prevent rapid-fire submissions
    const now = Date.now();
    if (now - lastSubmitTime < RATE_LIMIT_MS) {
      alert('Please wait a moment before submitting again.');
      return;
    }

    if (!validateForm()) return;
    setIsSubmitting(true);
    lastSubmitTime = Date.now();
    
    try {
      const response = await fetch('https://formspree.io/f/mjgpqgda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim().slice(0, 50),
          lastName: formData.lastName.trim().slice(0, 50),
          email: formData.email.trim().slice(0, 100),
          phone: formData.phone.trim().slice(0, 20),
          service: formData.service,
          message: formData.message.trim().slice(0, 2000),
          _subject: `New Inquiry from ${formData.firstName.trim()} ${formData.lastName.trim()}`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', service: 'IT Support', message: '' });
      } else {
        alert('Transmission failed. Please try again or use direct channels.');
      }
    } catch (error) {
       alert('Connection error. Please check your network and try again.');
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    if (errors[fieldName]) setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header - Modern Header with Background */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-24 md:pb-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
           <img 
             src="/images/backgrounds/contact.jpg" 
             alt="Contact Background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-manatech-blue/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-manatech-orange text-xs font-bold uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
              <Zap size={14} />
              <span>Deployment Channels</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
               Connect with <br />
               <span className="text-blue-200">Us Now.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-2xl font-medium">
               Have a project briefing or technical requirement? Secure your consultation and start scaling today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid - Modern Split Page */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 mb-16 sm:mb-24 md:mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
          
          {/* Information Block - Modern Floating Card */}
          <div className="lg:col-span-4 bg-manatech-blue p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] text-white space-y-10 sm:space-y-12 md:space-y-16 shadow-2xl relative overflow-hidden group h-fit">
            <div className="absolute inset-0 z-0">
               <img 
                 src="/images/backgrounds/contact-sidebar.jpg" 
                 alt="Contact Sidebar Background"
                 className="w-full h-full object-cover opacity-20"
               />
               <div className="absolute inset-0 bg-manatech-blue/40" />
            </div>
            
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Direct Channels</h3>
              <p className="text-blue-100/60 text-xs font-bold uppercase tracking-widest">
                Operational team typically responds within <span className="text-white">4 business hours</span>.
              </p>
            </div>

            <div className="space-y-10 relative z-10">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] block">Support Lines</span>
                <div className="space-y-2">
                   {CONTACT_INFO.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-lg font-bold hover:text-manatech-orange transition-colors duration-300">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] block">Digital Transmission</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold hover:text-manatech-orange transition-colors duration-300 block">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] block">Central Hub</span>
                <span className="text-lg font-bold leading-tight block">{CONTACT_INFO.location}</span>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10 flex gap-4 relative z-10">
               {[
                 { icon: MessageCircle, href: CONTACT_INFO.socials.whatsapp, color: 'hover:bg-green-500' },
                 { icon: Linkedin, href: CONTACT_INFO.socials.linkedin, color: 'hover:bg-blue-700' },
                 { icon: Facebook, href: CONTACT_INFO.socials.facebook, color: 'hover:bg-blue-600' },
                 { icon: Instagram, href: CONTACT_INFO.socials.instagram, color: 'hover:bg-pink-600' },
               ].map((social, i) => (
                 <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}>
                   <social.icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          {/* Form Block */}
          <div className="lg:col-span-8 bg-slate-50 p-8 sm:p-10 md:p-12 lg:p-16 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] border border-border/60 shadow-xl shadow-slate-200/50">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-24 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-manatech-teal/10 flex items-center justify-center text-manatech-teal shadow-inner">
                     <CheckCircle2 size={40} />
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-3xl font-bold text-manatech-blue tracking-tight">Transmission Secured</h3>
                     <p className="text-slate-500 text-lg font-medium">Your technical request has been queued for review. <br /> Expect a briefing shortly.</p>
                  </div>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-xl border-manatech-blue text-manatech-blue h-12 px-10 text-xs font-bold uppercase tracking-widest hover:bg-manatech-blue hover:text-white transition-all">
                    Initiate New Briefing
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                   {/* Honeypot field — hidden from users, traps bots */}
                   <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
                     <label htmlFor="website">Website</label>
                     <input
                       type="text"
                       id="website"
                       name="website"
                       tabIndex={-1}
                       autoComplete="off"
                       value={honeypot}
                       onChange={(e) => setHoneypot(e.target.value)}
                     />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-3">
                       <Label htmlFor="first-name" className="text-xs font-bold uppercase tracking-widest text-slate-400">First Name</Label>
                       <Input id="first-name" placeholder="Enter your first name" maxLength={50} value={formData.firstName} onChange={handleChange} className={`rounded-xl h-14 border-0 border-b-2 bg-white px-6 transition-all focus:ring-4 focus:ring-manatech-blue/5 ${errors.firstName ? 'border-destructive' : 'border-border/40 focus:border-manatech-blue'}`} />
                     </div>
                     <div className="space-y-3">
                        <Label htmlFor="last-name" className="text-xs font-bold uppercase tracking-widest text-slate-400">Last Name</Label>
                        <Input id="last-name" placeholder="Enter your last name" maxLength={50} value={formData.lastName} onChange={handleChange} className={`rounded-xl h-14 border-0 border-b-2 bg-white px-6 transition-all focus:ring-4 focus:ring-manatech-blue/5 ${errors.lastName ? 'border-destructive' : 'border-border/40 focus:border-manatech-blue'}`} />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-3">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400">Professional Email</Label>
                        <Input id="email" type="email" placeholder="email@example.com" maxLength={100} value={formData.email} onChange={handleChange} className={`rounded-xl h-14 border-0 border-b-2 bg-white px-6 transition-all focus:ring-4 focus:ring-manatech-blue/5 ${errors.email ? 'border-destructive' : 'border-border/40 focus:border-manatech-blue'}`} />
                     </div>
                     <div className="space-y-3">
                        <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-slate-400">Telephony Line</Label>
                        <Input id="phone" placeholder="+233..." maxLength={20} value={formData.phone} onChange={handleChange} className={`rounded-xl h-14 border-0 border-b-2 bg-white px-6 transition-all focus:ring-4 focus:ring-manatech-blue/5 ${errors.phone ? 'border-destructive' : 'border-border/40 focus:border-manatech-blue'}`} />
                     </div>
                   </div>

                   <div className="space-y-4 text-center">
                      <Label className="text-xs font-bold uppercase tracking-widest text-slate-400 block">Service Infrastructure</Label>
                      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                         {['IT Support', 'Data Analysis', 'Online Tutoring', 'Graphic Design', 'Other'].map((s) => (
                           <button key={s} type="button" onClick={() => setFormData(p => ({...p, service: s}))} className={`px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-lg sm:rounded-xl border-2 transition-all duration-300 ${formData.service === s ? 'bg-manatech-blue border-manatech-blue text-white shadow-xl shadow-manatech-blue/20' : 'bg-white border-border/40 text-slate-400 hover:border-manatech-blue/30 hover:text-manatech-blue'}`}>
                             {s}
                           </button>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-3">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400">Engagement Requirements</Label>
                      <Textarea id="message" placeholder="Describe your project requirement or inquiry in detail..." maxLength={2000} value={formData.message} onChange={handleChange} className={`min-h-[160px] rounded-2xl border-0 border-b-2 bg-white px-6 py-5 transition-all focus:ring-4 focus:ring-manatech-blue/5 ${errors.message ? 'border-destructive' : 'border-border/40 focus:border-manatech-blue'}`} />
                   </div>

                   <Button disabled={isSubmitting} className="w-full h-12 sm:h-14 md:h-16 bg-manatech-blue text-white rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.4em] shadow-2xl shadow-manatech-blue/20 transition-all hover:-translate-y-1 hover:bg-slate-900 disabled:opacity-50">
                     {isSubmitting ? 'Transmitting Data...' : 'Submit Engagement Brief'}
                   </Button>
                 </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modern Operational Info */}
      <section className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 py-16 sm:py-20 md:py-24 border-t border-border/40 relative z-10">
         <div className="flex items-center gap-4 sm:gap-6 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 border border-border/40 group hover:bg-white transition-colors duration-500 hover:shadow-xl hover:shadow-slate-200/50">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-manatech-blue/10 flex items-center justify-center text-manatech-blue shrink-0 group-hover:bg-manatech-blue group-hover:text-white transition-all">
               <Clock size={24} />
            </div>
            <div className="space-y-1">
               <h4 className="font-bold text-base sm:text-lg md:text-xl tracking-tight text-manatech-blue uppercase">Service Availability</h4>
               <p className="text-sm text-slate-500 font-medium">Monday – Friday: 08:00 – 18:00 <br /> Saturday: 09:00 – 16:00</p>
            </div>
         </div>
         <div className="flex items-center gap-4 sm:gap-6 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 border border-border/40 group hover:bg-white transition-colors duration-500 hover:shadow-xl hover:shadow-slate-200/50">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-manatech-orange/10 flex items-center justify-center text-manatech-orange shrink-0 group-hover:bg-manatech-orange group-hover:text-white transition-all">
               <MapPin size={24} />
            </div>
            <div className="space-y-1">
               <h4 className="font-bold text-base sm:text-lg md:text-xl tracking-tight text-manatech-blue uppercase">Headquarters</h4>
               <p className="text-sm text-slate-500 font-medium">{CONTACT_INFO.location}</p>
            </div>
         </div>
      </section>
    </div>
  );
}
