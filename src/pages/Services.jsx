import { motion } from 'motion/react';
import { SERVICES, FAQ_ITEMS, PROCESS_STEPS } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

/* Modern Accordion */
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`rounded-xl transition-all duration-300 ${isOpen ? 'bg-white shadow-xl shadow-slate-200/50 border-manatech-blue/10' : 'bg-slate-50 border-transparent'} border`}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-sm tracking-widest text-manatech-blue/80 hover:text-manatech-blue transition-colors"
              aria-expanded={isOpen}
            >
              {item.q.toUpperCase()}
              {isOpen ? (
                <ChevronUp size={16} className="text-manatech-orange shrink-0 ml-4" />
              ) : (
                <ChevronDown size={16} className="text-muted-foreground shrink-0 ml-4" />
              )}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0'}`}>
              <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-4">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header - Modern Header with Background Image */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-24 md:pb-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
           <img 
             src="/images/backgrounds/office.jpg" 
             alt="Services Background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-manatech-blue/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-manatech-orange text-xs font-bold uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
              <Zap size={14} />
              <span>Deployment Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Technical Precision. <br />
              <span className="text-blue-200">Measureable Impact.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-2xl font-medium">
              We deliver a comprehensive matrix of services designed to bridge the gap between technical complexity and operational success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Matrix - Modern Grid with Images */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 mb-16 sm:mb-24 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <Card key={service.id} className="glass-card border-none group flex flex-col overflow-hidden">
               <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-manatech-blue/60 group-hover:bg-manatech-blue/40 transition-colors" />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-${service.color} shadow-lg`}>
                    <service.icon size={22} />
                  </div>
               </div>
               
               <CardContent className="p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 flex flex-col h-full">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-manatech-blue tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px]">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-border/60">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Key Deliverables</span>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-xs font-bold text-slate-800">
                          <CheckCircle2 size={14} className={`text-${service.color} shrink-0`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                     <Button asChild variant="link" className="p-0 h-auto text-manatech-blue font-bold text-xs uppercase tracking-widest hover-underline group">
                        <Link to="/contact" className="flex items-center gap-2">
                          Inquire Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </Button>
                  </div>
               </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Methodology & FAQ */}
      <section className="py-20 sm:py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
            {/* Methodology Block */}
            <div className="space-y-16">
              <div className="space-y-4">
                <span className="text-xs font-bold text-manatech-orange uppercase tracking-[0.3em]">
                   Project Execution
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-manatech-blue tracking-tight">Technical Lifecycle</h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                  A standardized methodology for delivering high-performance infrastructure and creative assets.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={step.title} className="flex gap-5 sm:gap-8 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-2xl sm:text-3xl font-bold text-manatech-blue transition-all duration-300 group-hover:bg-manatech-blue group-hover:text-white shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xl font-bold tracking-tight text-manatech-blue">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support/FAQ Block */}
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-xs font-bold text-manatech-orange uppercase tracking-[0.3em]">
                   Operational Support
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-manatech-blue tracking-tight">Frequently Asked</h2>
              </div>
              <Accordion items={FAQ_ITEMS} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
