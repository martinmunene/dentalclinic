import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Smile, ArrowLeftRight, Calendar } from 'lucide-react';

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

interface CaseStudy {
  id: 'whitening' | 'alignment';
  title: string;
  beforeImg: string;
  afterImg: string;
  badgeBefore: string;
  badgeAfter: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  desc: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBooking }) => {
  const [activeCase, setActiveCase] = useState<'whitening' | 'alignment'>('whitening');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cases: Record<'whitening' | 'alignment', CaseStudy> = {
    whitening: {
      id: 'whitening',
      title: 'Philips Zoom Laser Whitening',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
      afterImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80',
      badgeBefore: 'Before: Stains & Discoloration',
      badgeAfter: 'After: 8 Shades Brighter',
      stat1: { value: '8 Shades', label: 'Whiter in 1 Visit' },
      stat2: { value: '0%', label: 'Enamel Sensitivity' },
      desc: 'Watch real results from our 60-minute laser whitening protocol. Coffee, tea, and aging stains are lifted gently under professional dental supervision.',
    },
    alignment: {
      id: 'alignment',
      title: 'Orthodontic Alignment & Braces',
      beforeImg: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
      afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
      badgeBefore: 'Before: Crowded & Gapped',
      badgeAfter: 'After: Straight & Symmetrical',
      stat1: { value: '100%', label: 'Natural Bite Function' },
      stat2: { value: 'KSh 7,500', label: 'Monthly Installments' },
      desc: 'Correct crowded incisors, gap teeth, and deep overbites with our precision aesthetic ceramic brackets and modern clear aligners.',
    },
  };

  const currentStudy = cases[activeCase];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  return (
    <section className="py-20 bg-white border-b border-slate-200" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 to-primary-50/40 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                Smile Transformations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                See The Real Clinical Difference
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentStudy.desc}
              </p>

              {/* Case Switches */}
              <div className="flex items-center space-x-3 bg-white p-1.5 rounded-2xl border border-slate-200 w-fit">
                <button
                  type="button"
                  onClick={() => setActiveCase('whitening')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeCase === 'whitening'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Teeth Whitening</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCase('alignment')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeCase === 'alignment'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  <Smile className="w-4 h-4" />
                  <span>Braces Alignment</span>
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                  <span className="block text-2xl font-extrabold text-primary">
                    {currentStudy.stat1.value}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {currentStudy.stat1.label}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                  <span className="block text-2xl font-extrabold text-emerald-600">
                    {currentStudy.stat2.value}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {currentStudy.stat2.label}
                  </span>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark shadow-md shadow-primary/20 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Smile Makeover</span>
                </button>
              </div>
            </div>

            {/* Right Slider Column */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border-4 border-white bg-slate-900"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER IMAGE (Background) */}
                <div className="absolute inset-0">
                  <img
                    src={currentStudy.afterImg}
                    alt="After smile makeover"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <span className="absolute top-4 right-4 bg-emerald-600/90 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                    AFTER
                  </span>
                </div>

                {/* BEFORE IMAGE (Clipped foreground) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentStudy.beforeImg}
                    alt="Before dental treatment"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                    draggable={false}
                  />
                  <span className="absolute top-4 left-4 bg-navy-900/90 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                    BEFORE
                  </span>
                </div>

                {/* DIVIDER HANDLE */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white border-2 border-white shadow-xl flex items-center justify-center">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Interaction Hint */}
              <p className="text-center text-xs text-slate-500 mt-3 flex items-center justify-center space-x-1">
                <span>◀ Drag slider sideways to compare before & after results ▶</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
