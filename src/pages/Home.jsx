import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Monitor,
  Database,
  Zap,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SERVICES, WHY_CHOOSE_US, TESTIMONIALS } from '@/constants';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import brandImg from '@/brand.jpg';

/* Reusable section heading - Modern Centered */
function SectionHeading({ label, title, description, light = false }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 relative z-10">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-manatech-orange">
        {label}
      </span>
      <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight ${light ? 'text-white' : 'text-manatech-blue'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${light ? 'text-blue-50/80' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Modern Premium with Background Image */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-20 md:pb-0 overflow-hidden">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
           <img 
             src="/images/backgrounds/hero-tech.jpg" 
             alt="Technology Background"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-manatech-blue/95 mix-blend-multiply" />
           <div className="absolute inset-0 bg-gradient-to-t from-manatech-blue via-manatech-blue/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest shadow-xl">
              <Zap size={14} className="text-manatech-orange" />
              <span>Innovating Digital Excellence</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Transforming Vision <br /> 
              <span className="text-manatech-orange">Into Intelligence.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-xl">
              From infrastructure to insights, we deliver professional IT support, data analysis, and creative expertise to scale your impact.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-5 pt-2">
              <Button asChild size="lg" className="bg-manatech-orange hover:bg-manatech-orange/90 text-white rounded-lg px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base font-bold shadow-2xl transition-all hover:-translate-y-0.5">
                <Link to="/contact">Get Started Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-lg px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base font-bold border-2 border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all">
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 sm:gap-10 pt-8 sm:pt-10 border-t border-white/10">
               <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-blue-200/60">Precision</div>
               </div>
               <div className="w-px h-8 sm:h-10 bg-white/10" />
               <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-blue-200/60">Availability</div>
               </div>
               <div className="w-px h-8 sm:h-10 bg-white/10" />
               <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-white">Secure</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-blue-200/60">Infrastructure</div>
               </div>
            </div>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg mx-auto">
               <div className="relative w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden hover:bg-white/10 transition-colors duration-500">
                  <img 
                    src={brandImg} 
                    alt="Manatech Brand" 
                    className="w-full h-auto block"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Card Grid with Service Images */}
      <section id="services" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeading
            label="What We Provide"
            title="Comprehensive Solutions"
            description="Professional expertise designed to meet the demands of a high-performance digital economy."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service) => (
              <Card key={service.id} className="glass-card group border-none flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-manatech-blue/40 group-hover:bg-manatech-blue/20 transition-colors" />
                   <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-${service.color} shadow-lg`}>
                      <service.icon size={20} />
                   </div>
                </div>
                <CardContent className="p-8 space-y-6 flex-grow">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-manatech-blue">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-2.5 pt-6 border-t border-border/60">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                        <CheckCircle2 size={14} className={`text-${service.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-manatech-blue hover-underline pt-2">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Now with Background Image Overlay */}
      <section id="why-us" className="py-16 sm:py-20 md:py-24 bg-manatech-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0">
           <img 
             src="/images/backgrounds/office.jpg" 
             alt="Office Background"
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-manatech-blue/80" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-manatech-orange uppercase tracking-[0.3em]">
                   The Manatech Edge
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                   Reliability, Scaled.
                </h2>
                <p className="text-blue-100/70 text-lg leading-relaxed max-w-lg">
                  We don't just solve technical problems; we build the technical foundations for your long-term success.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_CHOOSE_US.map((item) => (
                  <div key={item.title} className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-manatech-orange">
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-widest">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { value: '25+', label: 'Projects Completed' },
                    { value: '20+', label: 'Happy Clients' },
                    { value: '300+', label: 'Service Hours' },
                    { value: '24/7', label: 'Global Support' },
                  ].map((stat, i) => (
                    <div key={stat.label} className={`p-5 sm:p-8 rounded-xl sm:rounded-2xl ${i % 2 === 0 ? 'bg-white text-manatech-blue' : 'bg-white/10 backdrop-blur-md border border-white/10 text-white'} shadow-2xl transition-transform hover:-translate-y-1`}>
                      <div className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tighter">{stat.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-60">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeading
            label="Client Feedback"
            title="Measured Results"
            description="Hear from the businesses we've helped grow through technical excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="glass-card border-none">
                <CardContent className="p-8 space-y-6">
                  <p className="text-base text-slate-700 leading-relaxed font-medium italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-border/60">
                    <div className="w-12 h-12 bg-manatech-blue text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-manatech-blue/20">
                      {testimonial.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-manatech-blue uppercase tracking-wider">
                        {testimonial.author}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist with Darkened Image Background */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-24 text-center group shadow-2xl">
            {/* CTA Background Image */}
            <div className="absolute inset-0 z-0">
               <img 
                 src="/images/backgrounds/team.jpg" 
                 alt="Contact Background"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-manatech-blue/90" />
            </div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Scale Your Infrastructure <br /> 
                <span className="text-manatech-orange">Reach Your Peak.</span>
              </h2>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                Contact our deployment team today for a technical briefing or strategic consultation.
              </p>
              <div className="flex justify-center gap-5 pt-4">
                 <Button asChild size="lg" className="bg-white text-manatech-blue hover:bg-slate-50 rounded-lg px-8 sm:px-12 h-12 sm:h-14 md:h-16 text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest shadow-2xl transition-all hover:-translate-y-1">
                    <Link to="/contact">Get in Touch</Link>
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
