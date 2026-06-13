import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Membership({ onBookSessionClick }) {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic Access',
      priceMonthly: 29,
      priceAnnual: 23,
      desc: 'Perfect for independent trainers seeking top-tier machinery and standard routines.',
      features: [
        'Full gym floor access',
        'Standard lockers & showers',
        '1 Free fitness evaluation',
        'Free Wi-Fi & parking',
      ],
      ctaText: 'Get Basic Access',
      isPopular: false,
    },
    {
      name: 'Premium Club',
      priceMonthly: 59,
      priceAnnual: 47,
      desc: 'Our most popular choice, built for absolute progress with class access & expert coaches.',
      features: [
        'Unlimited group training classes',
        'Sauna & Steam room access',
        '3 Personal coaching sessions / mo',
        'Customized sports diet blueprint',
        '10% Gym shop merchandise discount',
      ],
      ctaText: 'Join Premium Club',
      isPopular: true,
    },
    {
      name: 'Elite Athlete',
      priceMonthly: 99,
      priceAnnual: 79,
      desc: 'Maximum accountability and access for dedicated athletes chasing peak performance.',
      features: [
        '24/7 VIP keycard access',
        'Daily 1-on-1 trainer check-ins',
        'Complimentary fresh towels & laundry',
        'Custom body composition reports',
        '20% Gym shop merchandise discount',
      ],
      ctaText: 'Unlock Elite Tier',
      isPopular: false,
    },
  ];

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

        {/* Toggle Billing Period */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`font-bold transition-colors duration-200 ${!isAnnual ? 'text-text-white' : 'text-text-muted'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 rounded-full bg-white/10 border-2 border-border relative cursor-pointer outline-none p-0 transition-colors"
          >
            <div
              className={`w-5 h-5 rounded-full bg-primary absolute top-0.5 transition-all duration-300 ${
                isAnnual ? 'left-[30px]' : 'left-0.5'
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`font-bold transition-colors duration-200 ${isAnnual ? 'text-text-white' : 'text-text-muted'}`}>
              Annual Billing
            </span>
            <span className="bg-primary text-text-dark text-[0.7rem] font-black px-2 py-0.5 rounded uppercase tracking-wider">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-bg-card rounded-lg p-8 md:p-12 flex flex-col relative transition-all duration-400 text-left ${
                plan.isPopular
                  ? 'border-2 border-primary hover:-translate-y-2 hover:scale-[1.01] lg:scale-[1.03] lg:hover:scale-[1.04] shadow-2xl shadow-primary/20 hover:shadow-primary/30 z-10'
                  : 'border border-border hover:-translate-y-2 hover:scale-[1.01] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5'
              }`}
            >
              {/* Popular Tag */}
              {plan.isPopular && (
                <span className="absolute top-5 right-5 bg-primary text-text-dark text-[0.7rem] font-black uppercase tracking-wider px-3 py-1 rounded">
                  Most Popular
                </span>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold uppercase mb-4 font-heading text-text-white">
                {plan.name}
              </h3>

              {/* Pricing Display */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl md:text-5xl font-black text-text-white font-heading">
                  ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                </span>
                <span className="text-text-muted text-sm font-medium">/ month</span>
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
                onClick={() => onBookSessionClick(`Membership Consultation - ${plan.name}`)}
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
