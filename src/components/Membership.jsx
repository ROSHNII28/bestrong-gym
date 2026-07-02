import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Membership({ onBookSessionClick }) {
  const [cycle, setCycle] = useState('monthly'); // 'monthly', 'quarterly', 'half-yearly'

  const plans = [
    {
      name: 'General Access',
      desc: 'Full access to the gym floor, premium cardio equipment, and free weights for independent training.',
      prices: {
        monthly: 1500,
        quarterly: 4000,
        'half-yearly': 6000
      },
      durationLabel: {
        monthly: 'month',
        quarterly: '3 months',
        'half-yearly': '6 months'
      },
      features: [
        'Full gym floor & cardio floor access',
        'Standard locker and steam shower facilities',
        'Free high-speed Wi-Fi & secure parking',
        'One-time trainer orientation assessment',
      ],
      ctaText: 'Get General Access',
      isPopular: false,
    },
    {
      name: 'Personal Trainer Guided',
      desc: 'All-inclusive gym access paired with premium 1-on-1 personal coaching for accelerated results.',
      prices: {
        monthly: 5000,
        quarterly: 12000,
        'half-yearly': 20000
      },
      durationLabel: {
        monthly: 'month',
        quarterly: '3 months',
        'half-yearly': '6 months'
      },
      features: [
        'All General Access membership benefits',
        'Dedicated 1-on-1 certified trainer sessions',
        'Customized hypertrophy & strength blueprints',
        'Regular body composition & BMI analyses',
        'Nutritional guidance and sports diet planning',
      ],
      ctaText: 'Start Personal Training',
      isPopular: true,
    }
  ];

  const cycleLabels = {
    monthly: '1 Month',
    quarterly: '3 Months',
    'half-yearly': '6 Months'
  };

  return (
    <section id="membership" className="py-32 px-6 md:px-12 bg-bg-light relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">
            Membership Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-black text-text-white mt-2 font-heading">
            Choose Your <span className="text-primary">Membership</span>
          </h2>
          <div className="w-14 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Toggle Billing Period - 3 Way Selector */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex bg-bg p-1.5 rounded-full border border-border/80 shadow-inner relative max-w-[500px] w-full">
            {[
              { id: 'monthly', label: 'Monthly (1 Mo)' },
              { id: 'quarterly', label: 'Quarterly (3 Mo)' },
              { id: 'half-yearly', label: 'Half Year (6 Mo)' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setCycle(opt.id)}
                className={`flex-grow py-2.5 px-3 md:px-5 rounded-full font-heading text-[0.7rem] md:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 relative z-10 cursor-pointer border-none outline-none ${
                  cycle === opt.id
                    ? 'text-text-dark bg-primary shadow-md'
                    : 'text-text-muted hover:text-text-white bg-transparent'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-[900px] mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-bg-card rounded-lg p-8 md:p-12 flex flex-col relative transition-all duration-400 text-left ${
                plan.isPopular
                  ? 'border-2 border-primary hover:-translate-y-2 hover:scale-[1.01] shadow-2xl shadow-primary/20 hover:shadow-primary/30 z-10'
                  : 'border border-border hover:-translate-y-2 hover:scale-[1.01] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5'
              }`}
            >
              {/* Popular Tag */}
              {plan.isPopular && (
                <span className="absolute top-5 right-5 bg-primary text-text-dark text-[0.7rem] font-black uppercase tracking-wider px-3 py-1 rounded animate-pulse-glow">
                  Highly Recommended
                </span>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold uppercase mb-4 font-heading text-text-white">
                {plan.name}
              </h3>

              {/* Pricing Display */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl md:text-5xl font-black text-text-white font-heading">
                  ₹{plan.prices[cycle].toLocaleString('en-IN')}
                </span>
                <span className="text-text-muted text-sm font-medium">/ {plan.durationLabel[cycle]}</span>
              </div>

              {/* Description */}
              <p className="text-text-muted text-sm mb-8 leading-relaxed min-h-[48px]">
                {plan.desc}
              </p>

              {/* Features List */}
              <ul className="list-none p-0 m-0 mb-10 flex flex-col gap-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <span className="text-primary flex-shrink-0 mt-0.5">
                      <Check size={16} strokeWidth={3} />
                    </span>
                    <span className="text-text-light">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => onBookSessionClick(`Membership Consultation - ${plan.name} (${cycleLabels[cycle]})`)}
                className={`w-full inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all duration-300 cursor-pointer ${
                  plan.isPopular
                    ? 'bg-primary text-text-dark border-2 border-primary hover:bg-primary-hover hover:border-primary-hover hover:text-text-white shadow-lg shadow-primary/20'
                    : 'bg-transparent text-text-white border-2 border-primary hover:bg-primary hover:text-text-dark'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
