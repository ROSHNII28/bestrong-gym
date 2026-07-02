import React from 'react';
import { TrendingUp, ShieldCheck, Trophy } from 'lucide-react';

export default function Hero({ onBookSessionClick }) {
  const stats = [
    { value: '7 Years', label: 'Gym Experience', icon: <Trophy size={20} className="text-primary" /> },
    { value: '165', label: 'Active Members', icon: <TrendingUp size={20} className="text-primary" /> },
    { value: '4', label: 'Certified Trainers', icon: <ShieldCheck size={20} className="text-primary" /> },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 md:px-12 py-32 md:py-40 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(12, 12, 14, 0.98) 0%, rgba(12, 12, 14, 0.90) 40%, rgba(12, 12, 14, 0.75) 100%), url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop')`,
      }}
    >
      {/* Background radial glow light backing the text block */}
      <div className="absolute top-[35%] left-[25%] w-72 md:w-96 h-72 md:h-96 rounded-full bg-radial from-primary/10 to-transparent z-10 pointer-events-none animate-fade-in" />

      <div className="max-w-[1200px] w-full z-20 flex flex-col items-start justify-center">
        <div className="max-w-4xl w-full text-left">
          {/* Welcome row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 animate-fade-in-up">
            {/* Welcome Label + Line */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-primary text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase">
                WELCOME TO BE STRONG FITNESS CLUB
              </span>
              <div className="h-[2px] w-12 sm:w-16 bg-primary opacity-80" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] text-text-white mb-8 animate-fade-in-up delay-100 font-heading">
            Transform Your <br />
            Body. <br />
            Build Your <br />
            <span className="text-primary">Strength.</span>
          </h1>

          <p className="text-base md:text-lg text-text-muted mb-8 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Step into the ultimate fitness arena. Experience state-of-the-art facilities, certified coaching, and a driven community supporting your transformation.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up delay-300">
            <button
              onClick={onBookSessionClick}
              className="inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-8 py-3.5 rounded-sm bg-primary text-text-dark border-2 border-primary shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-hover hover:border-primary-hover hover:text-text-white hover:-translate-y-0.5 hover:shadow-primary/40 cursor-pointer animate-pulse-glow"
            >
              Book Free Session
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-8 py-3.5 rounded-sm bg-transparent text-text-white border-2 border-text-white transition-all duration-300 hover:bg-text-white hover:text-bg hover:-translate-y-0.5"
            >
              Explore Programs
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-border max-w-2xl animate-fade-in-up delay-400">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  {stat.icon}
                  <span className="text-2xl md:text-3xl lg:text-4xl font-black text-text-white font-heading">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-text-muted font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
