import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-24 md:pb-32 overflow-hidden text-white flex-grow flex items-center">
        <div className="absolute inset-0 z-0 bg-manatech-blue" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Icon */}
            <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto">
              <ShieldAlert size={48} className="text-manatech-orange" />
            </div>

            {/* Error Code */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
                Error Code
              </span>
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white leading-none">
                404
              </h1>
            </div>

            {/* Message */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Page Not Found
              </h2>
              <p className="text-blue-100/70 text-base sm:text-lg leading-relaxed max-w-md mx-auto font-medium">
                The resource you requested could not be located. It may have been moved, deleted, or never existed.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-manatech-orange hover:bg-manatech-orange/90 text-white rounded-lg px-8 h-14 text-sm font-bold shadow-2xl transition-all hover:-translate-y-0.5"
              >
                <Link to="/">
                  <Home size={18} className="mr-2" />
                  Return Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-lg px-8 h-14 text-sm font-bold border-2 border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all"
              >
                <Link to="/contact">
                  <ArrowLeft size={18} className="mr-2" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
