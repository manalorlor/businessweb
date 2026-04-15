import { motion } from 'motion/react';
import {
  ShieldCheck,
  Palette,
  Monitor,
  Database,
  Target,
  Lightbulb,
  Users,
  Award,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header - Modern Header with Background */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-24 md:pb-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600" 
             alt="About Hero Background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-manatech-blue/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-manatech-orange text-xs font-bold uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
              <Zap size={14} />
              <span>Operational Philosophy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Standardizing <br />
              <span className="text-blue-200">Excellence.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-2xl font-medium">
              Manatech represents the intersection of technical precision and creative utility. We are dedicated to providing the infrastructure for modern success.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Modern Split Block */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 mb-16 sm:mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision Block - Now with Subtle Image Background */}
          <div className="bg-manatech-blue p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] text-white flex flex-col justify-between min-h-[320px] sm:min-h-[400px] md:min-h-[450px] shadow-2xl relative overflow-hidden group">
             <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-700 group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Vision Background"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute inset-0 bg-manatech-blue/40 z-0" />
             
             <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-manatech-orange shadow-inner relative z-10">
                <Target size={36} />
             </div>
             <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">OUR VISION</h3>
                <p className="text-blue-100/80 leading-relaxed text-base sm:text-lg md:text-xl max-w-md">
                  To serve as the primary engine for digital transformation, fostering resilience through absolute technical clarity and creative courage.
                </p>
             </div>
          </div>

          {/* Mission Block */}
          <div className="p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between min-h-[320px] sm:min-h-[400px] md:min-h-[450px] border border-border/60 shadow-xl shadow-slate-200/50 bg-slate-50">
             <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-manatech-blue tracking-tight">OUR MISSION</h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md font-medium">
                  We empower organizations by delivering high-precision IT support, data insights, and branding architectures that translate complexity into measurable utility.
                </p>
             </div>
             
             <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-12">
               {[
                 { title: 'Innovation', icon: Lightbulb, color: 'text-manatech-orange' },
                 { title: 'Reliability', icon: ShieldCheck, color: 'text-manatech-teal' },
                 { title: 'Creativity', icon: Palette, color: 'text-manatech-blue' },
                 { title: 'Precision', icon: Award, color: 'text-manatech-blue' },
               ].map((item) => (
                 <div key={item.title} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white shadow-md border border-border/40 transition-transform duration-300 hover:-translate-y-1">
                    <item.icon size={18} className={item.color} />
                    <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-slate-800">{item.title}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Culture - Layered with Background Image */}
      <section className="py-20 sm:py-24 md:py-32 text-white relative overflow-hidden bg-manatech-blue">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
             alt="Culture Background"
             className="w-full h-full object-cover opacity-10"
           />
           <div className="absolute inset-0 bg-manatech-blue/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6 text-center mx-auto">
            <span className="text-xs font-bold text-white/40 uppercase tracking-[0.4em]">
              Operational Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">Driven by Performance & Clarity.</h2>
            <p className="text-blue-100/70 text-lg leading-relaxed font-medium">
              We operate at the nexus of technical certification and creative methodology, ensuring every asset we build serves a strategic purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Technical Logic',
                icon: Monitor,
                desc: 'Standardized infrastructure management focused on 99.9% uptime and security.',
              },
              {
                title: 'Data Architecture',
                icon: Database,
                desc: 'Analytical frameworks designed to extract value from multi-dimensional datasets.',
              },
              {
                title: 'Brand Frameworks',
                icon: Palette,
                desc: 'Visual architectures that communicate brand authority and creative relevance.',
              },
            ].map((item) => (
              <div key={item.title} className="p-8 sm:p-10 md:p-12 space-y-4 sm:space-y-6 bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-manatech-orange/10 flex items-center justify-center text-manatech-orange group-hover:bg-manatech-orange group-hover:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-white uppercase">
                  {item.title}
                </h4>
                <p className="text-blue-100/60 text-sm leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Modern */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              { label: 'Completed Projects', value: '25+' },
              { label: 'Happy Clients', value: '20+' },
              { label: 'Service Hours', value: '300+' },
              { label: 'Visual Assets', value: '30+' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2 group text-center lg:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-manatech-blue tracking-tighter transition-all duration-500 group-hover:text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 text-center space-y-8 sm:space-y-10">
           <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-manatech-blue tracking-tight leading-tight">
              Ready to scale <br /> <span className="text-slate-900">your organizational vision?</span>
           </h3>
           <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Join a cadre of leaders who trust Manatech for their critical infrastructure and creative briefing needs.
           </p>
           <div className="flex justify-center gap-6 pt-4">
              <Button asChild size="lg" className="bg-manatech-blue text-white rounded-xl px-8 sm:px-12 h-12 sm:h-14 md:h-16 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-2xl transition-all hover:-translate-y-1">
                 <Link to="/contact">Project Inquiry</Link>
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
