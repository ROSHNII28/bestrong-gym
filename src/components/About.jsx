import React, { useState } from 'react';
import { Dumbbell, ShieldCheck, HeartPulse, Award } from 'lucide-react';

const InstagramIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function About() {
  const [activeTab, setActiveTab] = useState('philosophy');

  const tabsContent = {
    philosophy: {
      title: 'Our Fitness Philosophy',
      desc: 'At Be Strong, we believe fitness is not a destination, but a lifelong journey. We provide a sustainable, science-based approach to training that empowers you to reach your peak performance while staying injury-free.',
      bullets: [
        'Progressive Overload Training',
        'Functional Strength Foundations',
        'Sustainable Recovery & Wellness',
      ],
    },
    facilities: {
      title: 'World-Class Gym Facilities',
      desc: 'Spread over 15,000 square feet, our gym offers top-tier equipment and dedicated zones to ensure you get the absolute best out of every single training session.',
      bullets: [
        'Hammer Strength & Life Fitness rigs',
        'Dedicated Olympic Weightlifting platforms',
        'Spacious turf area for functional training',
      ],
    },
    community: {
      title: 'Driven Athletic Community',
      desc: "You don't have to grind alone. Join a supportive, highly motivated community of fitness enthusiasts and professionals who push each other to do one more rep.",
      bullets: [
        'Monthly gym challenges and events',
        'Shared workout achievements tracking',
        'Supportive group fitness culture',
      ],
    },
  };

  const features = [
    { title: 'Certified Trainers', icon: <Award size={24} />, desc: 'Guidance from national-level athletes and certified coaches.' },
    { title: 'Premium Equipment', icon: <Dumbbell size={24} />, desc: 'Elite cardio, strength, and Olympic weightlifting configurations.' },
    { title: 'Personalized Coaching', icon: <ShieldCheck size={24} />, desc: 'Custom tailored workout programs matching your unique goals.' },
    { title: 'Healthy Lifestyle', icon: <HeartPulse size={24} />, desc: 'Holistic approach integrating nutrition coaching and habit building.' },
  ];

  const trainers = [
    { name: 'Sarah Connor', role: 'Head CrossFit Coach', imgInitials: 'SC', specialty: 'Functional Fitness & Conditioning' },
    { name: 'Marcus Aurelius', role: 'Strength Conditioning Lead', imgInitials: 'MA', specialty: 'Hypertrophy & Powerlifting' },
    { name: 'Elena Rostova', role: 'Yoga & Mobility Expert', imgInitials: 'ER', specialty: 'Flexibility, Vinyasa & Recovery' },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-bg-light relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-black text-text-white mt-2 font-heading">
            Why Choose <span className="text-primary">Be Strong</span>?
          </h2>
          <div className="w-14 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border rounded-lg p-10 flex flex-col items-start text-left transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-primary hover:shadow-lg hover:shadow-primary/15 group"
            >
              <div className="card-icon-container mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold uppercase mb-2 text-text-white font-heading">
                {feature.title}
              </h3>
              <p className="text-text-muted text-[0.95rem] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Two-Column Detail & Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Interactive Tabs */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-text-white mb-6 font-heading leading-tight">
              We Are Committed To Your Transformation
            </h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              From initial assessment to hitting new personal records, our facilities and community are engineered to provide maximum support.
            </p>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 border-b border-border pb-2 mb-6">
              {Object.keys(tabsContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`bg-transparent border-none font-heading font-bold text-sm md:text-base cursor-pointer px-4 py-2 relative transition-colors duration-200 outline-none ${
                    activeTab === tab ? 'text-primary' : 'text-text-muted hover:text-primary'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <div className="absolute bottom-[-10px] left-0 right-0 h-[2.5px] bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Pane */}
            <div className="min-h-[200px] flex flex-col justify-start">
              <h4 className="text-xl font-bold mb-3 text-text-white font-heading">
                {tabsContent[activeTab].title}
              </h4>
              <p className="text-text-muted mb-6 text-[0.95rem] leading-relaxed">
                {tabsContent[activeTab].desc}
              </p>
              <ul className="list-none p-0 flex flex-col gap-2">
                {tabsContent[activeTab].bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-text-light text-sm font-semibold"
                  >
                    <span className="text-primary font-bold">✔</span> {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Trainers Preview */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-text-white mb-8 font-heading">
              Meet Our Certified Coaches
            </h3>

            <div className="flex flex-col gap-6">
              {trainers.map((trainer, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 p-5 bg-bg-card border border-border rounded-lg transition-all duration-400 hover:border-primary hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md"
                >
                  {/* Trainer Avatar Box */}
                  <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center font-heading font-extrabold text-lg border-2 border-primary flex-shrink-0">
                    {trainer.imgInitials}
                  </div>

                  {/* Trainer Details */}
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-text-white mb-0.5 font-heading">{trainer.name}</h4>
                    <p className="text-primary text-xs md:text-sm font-semibold mb-0.5 uppercase tracking-wide">
                      {trainer.role}
                    </p>
                    <p className="text-text-muted text-xs md:text-sm">
                      Specialty: {trainer.specialty}
                    </p>
                  </div>

                  {/* Social Handles */}
                  <div className="flex flex-col gap-2">
                    <a href="#" className="text-text-muted hover:text-primary transition-colors duration-200">
                      <InstagramIcon size={16} />
                    </a>
                    <a href="#" className="text-text-muted hover:text-primary transition-colors duration-200">
                      <TwitterIcon size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
