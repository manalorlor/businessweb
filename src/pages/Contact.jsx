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

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'IT Support',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim()) {
       newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
       newErrors.email = 'Invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mjgpqgda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Inquiry from ${formData.firstName} ${formData.lastName}`
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
      <section className="relative pt-48 pb-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1600" 
             alt="Contact Background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-manatech-blue/90" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-manatech-orange text-xs font-bold uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
              <Zap size={14} />
              <span>Deployment Channels</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
               Connect with <br />
               <span className="text-blue-200">Us Now.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-2xl font-medium">
               Have a project briefing or technical requirement? Secure your consultation and start scaling today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid - Modern Split Page */}
      <section className="container mx-auto px-6 py-24 mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Information Block - Modern Floating Card */}
          <div className="lg:col-span-4 bg-manatech-blue p-12 rounded-[2.5rem] text-white space-y-16 shadow-2xl relative overflow-hidden group h-fit">
            <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80&w=800" 
                 alt="Contact Sidebar Background"
                 className="w-full h-full object-cover opacity-20"
               />
               <div className="absolute inset-0 bg-manatech-blue/40" />
            </div>
            
            <div className="space-y-4 relative z-10">
              <h3 className="text-3xl font-bold tracking-tight uppercase">Direct Channels</h3>
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
          <div className="lg:col-span-8 bg-slate-50 p-12 md:p-16 rounded-[2.5rem] border border-border/60 shadow-xl shadow-slate-200/50">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <Label htmlFor="first-name" className="text-xs font-bold uppercase tracking-widest text-slate-400">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} className={`rounded-xl h-14 border-0 border-b-2 bg-white px-6 transition-all focus:ring-4 focus:ring-manatech-blue/5 ${errors.firstName ? 'border-destructive' : 'border-border/40 focus:border-manatech-blue'}`} />
                    </div>
                    <div className="space-y-3">
                       <Label htmlFor="last-name" className="text-xs font-bold uppercase tracking-widest text-slate-400">Last Name</Label>
                       <Input id="last-name" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} className={`rounded-xl h-14 border-0 border-b-2 bg-white px-6 transition-all focus:ring-4 focus:ring-manatech-blue/5 ${errors.lastName ? 'border-destructive' : 'border-border/40 focus:border-manatech-blue'}`} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400">Professional Email</Label>
                       <Input id="email" type="email" placeholder="email@example.com" value={formData.email} onChange={handleChange} className={`rounded-xl h-14 border-0 border-b-2 bg-white px-6 transition-all focus:ring-4 focus:ring-manatech-blue/5 ${errors.email ? 'border-destructive' : 'border-border/40 focus:border-manatech-blue'}`} />
                    </div>
                    <div className="space-y-3">
                       <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-slate-400">Telephony Line</Label>
                       <Input id="phone" placeholder="+233..." value={formData.phone} onChange={handleChange} className="rounded-xl h-14 border-0 border-b-2 bg-white px-6 transition-all focus:ring-4 focus:ring-manatech-blue/5 border-border/40 focus:border-manatech-blue" />
                    </div>
                  </div>

                  <div className="space-y-4 text-center">
                     <Label className="text-xs font-bold uppercase tracking-widest text-slate-400 block">Service Infrastructure</Label>
                     <div className="flex flex-wrap justify-center gap-3">
                        {['IT Support', 'Data Analysis', 'Online Tutoring', 'Graphic Design', 'Other'].map((s) => (
                          <button key={s} type="button" onClick={() => setFormData(p => ({...p, service: s}))} className={`px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-xl border-2 transition-all duration-300 ${formData.service === s ? 'bg-manatech-blue border-manatech-blue text-white shadow-xl shadow-manatech-blue/20' : 'bg-white border-border/40 text-slate-400 hover:border-manatech-blue/30 hover:text-manatech-blue'}`}>
                            {s}
                          </button>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-3">
                     <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400">Engagement Requirements</Label>
                     <Textarea id="message" placeholder="Describe your project requirement or inquiry in detail..." value={formData.message} onChange={handleChange} className={`min-h-[160px] rounded-2xl border-0 border-b-2 bg-white px-6 py-5 transition-all focus:ring-4 focus:ring-manatech-blue/5 ${errors.message ? 'border-destructive' : 'border-border/40 focus:border-manatech-blue'}`} />
                  </div>

                  <Button disabled={isSubmitting} className="w-full h-16 bg-manatech-blue text-white rounded-2xl text-sm font-bold uppercase tracking-[0.4em] shadow-2xl shadow-manatech-blue/20 transition-all hover:-translate-y-1 hover:bg-slate-900 disabled:opacity-50">
                    {isSubmitting ? 'Transmitting Data...' : 'Submit Engagement Brief'}
                  </Button>
                </form>

              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modern Operational Info */}
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 py-24 border-t border-border/40 relative z-10">
         <div className="flex items-center gap-6 p-10 rounded-[2.5rem] bg-slate-50 border border-border/40 group hover:bg-white transition-colors duration-500 hover:shadow-xl hover:shadow-slate-200/50">
            <div className="w-16 h-16 rounded-2xl bg-manatech-blue/10 flex items-center justify-center text-manatech-blue shrink-0 group-hover:bg-manatech-blue group-hover:text-white transition-all">
               <Clock size={28} />
            </div>
            <div className="space-y-1">
               <h4 className="font-bold text-xl tracking-tight text-manatech-blue uppercase">Service Availability</h4>
               <p className="text-sm text-slate-500 font-medium">Monday – Friday: 08:00 – 18:00 <br /> Saturday: 09:00 – 16:00</p>
            </div>
         </div>
         <div className="flex items-center gap-6 p-10 rounded-[2.5rem] bg-slate-50 border border-border/40 group hover:bg-white transition-colors duration-500 hover:shadow-xl hover:shadow-slate-200/50">
            <div className="w-16 h-16 rounded-2xl bg-manatech-orange/10 flex items-center justify-center text-manatech-orange shrink-0 group-hover:bg-manatech-orange group-hover:text-white transition-all">
               <MapPin size={28} />
            </div>
            <div className="space-y-1">
               <h4 className="font-bold text-xl tracking-tight text-manatech-blue uppercase">Headquarters</h4>
               <p className="text-sm text-slate-500 font-medium">{CONTACT_INFO.location}</p>
            </div>
         </div>
      </section>
    </div>
  );
}
