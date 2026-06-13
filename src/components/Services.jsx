import React, { useState } from 'react';
import { Dumbbell, ShieldCheck, Flame, Heart, Compass, Apple, X } from 'lucide-react';

export default function Services({ onBookSessionClick }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'strength',
      title: 'Strength Training',
      icon: <Dumbbell size={32} />,
      shortDesc: 'Build raw power, increase muscle mass, and perfect your form with compound lifts.',
      longDesc: 'Our Strength Training program centers on progressive resistance exercises. Whether you are beginner or competitive powerlifter, we teach standard techniques for squats, deadlifts, bench presses, and accessory training to maximize muscle hypertrophy and bone density.',
      intensity: 'High',
      duration: '60 Mins',
      benefits: ['Hypertrophy & raw power', 'Increased metabolic rate', 'Stronger joints and bones'],
    },
    {
      id: 'cardio',
      title: 'Cardio & HIIT',
      icon: <Flame size={32} />,
      shortDesc: 'High-intensity interval training designed to burn fat and supercharge cardiovascular endurance.',
      longDesc: 'HIIT pushes your heart rate to maximum capacity in short bursts. Incorporating assault bikes, rowers, kettlebells, and bodyweight movements, this class is structured to keep your metabolism elevated for up to 24 hours post-workout.',
      intensity: 'Very High',
      duration: '45 Mins',
      benefits: ['Rapid caloric expenditure', 'Enhanced oxygen output', 'Improved cardiac recovery'],
    },
    {
      id: 'yoga',
      title: 'Yoga & Flexibility',
      icon: <Heart size={32} />,
      shortDesc: 'Improve range of motion, relieve muscle tension, and enhance core stability.',
      longDesc: 'This program bridges athletic recovery with mobility. Combining Vinyasa flow, static stretching, and deep breathing protocols, we help athletes reset their nervous systems and restore muscle length after heavy lifting days.',
      intensity: 'Low to Medium',
      duration: '50 Mins',
      benefits: ['Enhanced flexibility', 'Lower cortisol & stress relief', 'Improved posture & core control'],
    },
    {
      id: 'crossfit',
      title: 'CrossFit & Functional',
      icon: <Compass size={32} />,
      shortDesc: 'Vibrant group workouts incorporating Olympic lifts, gymnastics, and endurance exercises.',
      longDesc: 'Functional Fitness prepares your body for real-world movements. Under coach supervision, workouts of the day (WODs) scale to your capability, pushing endurance, flexibility, speed, agility, and raw power.',
      intensity: 'High to Extreme',
      duration: '60 Mins',
      benefits: ['All-round athletic prowess', 'Supportive group setting', 'Enhanced functional mobility'],
    },
    {
      id: 'personal',
      title: '1-on-1 Personal Coaching',
      icon: <ShieldCheck size={32} />,
      shortDesc: 'Exclusive direct attention from elite trainers tailored for quick, sustainable results.',
      longDesc: 'Work directly with our certified performance trainers. We create a hyper-customized training regime, conduct regular body composition analyses, adjust form in real-time, and ensure your progress is continuous.',
      intensity: 'Variable',
      duration: '60 Mins',
      benefits: ['Tailored workout programming', 'Strict accountability', 'Accelerated goal achievement'],
    },
    {
      id: 'nutrition',
      title: 'Nutrition & Macro Planning',
      icon: <Apple size={32} />,
      shortDesc: 'Custom diet blueprints and supplement protocols aligned to support your gym routines.',
      longDesc: 'Training is only half the battle. Our certified sports nutritionists analyze your current habits, formulate calorie and macronutrient requirements, and design practical meal guides that fuel workouts and speed recovery.',
      intensity: 'Low',
      duration: 'N/A (Consultation)',
      benefits: ['Optimized energy levels', 'Sustainable dietary habits', 'Faster fat loss & muscle gains'],
    },
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-bg relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">
            Services & Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-black text-text-white mt-2 font-heading">
            Elite <span className="text-primary">Training Programs</span>
          </h2>
          <div className="w-14 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-bg-card border border-border rounded-lg p-8 md:p-10 flex flex-col items-start text-left cursor-pointer transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-primary hover:shadow-lg hover:shadow-primary/15 group"
              onClick={() => setSelectedService(service)}
            >
              <div className="mb-6 text-primary bg-primary/10 p-3 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold uppercase mb-3 text-text-white font-heading">
                {service.title}
              </h3>
              <p className="text-text-muted text-[0.95rem] leading-relaxed mb-6 flex-grow">
                {service.shortDesc}
              </p>
              <span className="text-primary font-bold text-sm uppercase tracking-wide inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                Learn More &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-[1100] p-6 animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-bg-card border border-border rounded-xl p-8 md:p-10 relative text-left shadow-2xl shadow-primary/5 max-w-[650px] w-full max-h-[90vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 bg-transparent border-none text-text-muted hover:text-text-white cursor-pointer transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="text-primary bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                {selectedService.icon}
              </div>
              <h3 className="text-2xl font-black uppercase text-text-white font-heading">
                {selectedService.title}
              </h3>
            </div>

            {/* Program specifications */}
            <div className="flex gap-8 mb-6 pb-4 border-b border-border">
              <div>
                <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">Intensity</span>
                <p className="font-bold text-primary font-heading text-lg">{selectedService.intensity}</p>
              </div>
              <div>
                <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">Duration</span>
                <p className="font-bold text-text-white font-heading text-lg">{selectedService.duration}</p>
              </div>
            </div>

            {/* Long description */}
            <p className="text-text-muted leading-relaxed mb-6">
              {selectedService.longDesc}
            </p>

            {/* Key benefits */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-text-white uppercase mb-3 font-heading">Key Benefits</h4>
              <ul className="list-none p-0 flex flex-col gap-2">
                {selectedService.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-text-light text-sm font-semibold">
                    <span className="text-primary font-bold">✔</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onBookSessionClick(selectedService.title);
                }}
                className="flex-grow inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-6 py-3 rounded-sm bg-primary text-text-dark border-2 border-primary shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-hover hover:border-primary-hover hover:text-text-white hover:-translate-y-0.5 cursor-pointer"
              >
                Book Class Session
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="sm:w-[35%] inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-6 py-3 rounded-sm bg-transparent text-text-white border-2 border-text-white transition-all duration-300 hover:bg-text-white hover:text-bg hover:-translate-y-0.5 cursor-pointer"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
