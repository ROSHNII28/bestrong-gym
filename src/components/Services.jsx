import React, { useState } from 'react';
import { Dumbbell, ShieldCheck, Flame, Heart, Compass, Apple, X } from 'lucide-react';

export default function Services({ onBookSessionClick }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'weight',
      title: 'Weight Training',
      icon: <Dumbbell size={32} />,
      shortDesc: 'Build raw power, increase muscle mass, and perfect your form with progressive lifting.',
      longDesc: 'Our Weight Training program focuses on building core strength, muscle hypertrophy, and correct lifting form. Under the guidance of our certified coaches, you will master compound lifts, barbell dynamics, and structured bodybuilding protocols designed for all experience levels.',
      intensity: 'High',
      duration: '60 Mins',
      benefits: ['Hypertrophy & muscle growth', 'Increased structural strength', 'Improved joint stability'],
    },
    {
      id: 'cardio',
      title: 'Cardio Training',
      icon: <Flame size={32} />,
      shortDesc: 'High-energy endurance conditioning to supercharge stamina and cardiovascular health.',
      longDesc: 'Elevate your cardiovascular performance with our specialized Cardio Training. Utilizing high-intensity intervals, treadmills, rowers, and dynamic bodyweight drills, this program is designed to optimize VO2 max, accelerate calorie burn, and build stamina.',
      intensity: 'High',
      duration: '45 Mins',
      benefits: ['Boosted cardiovascular health', 'Enhanced stamina & endurance', 'Accelerated calorie burning'],
    },
    {
      id: 'personal',
      title: 'Personal Training',
      icon: <ShieldCheck size={32} />,
      shortDesc: 'One-on-one tailored training with our certified personal trainers to accelerate your results.',
      longDesc: 'Get the ultimate customized fitness experience. Our Personal Training matches you with a certified expert coach who designs a bespoke exercise regime, offers hands-on form correction, tracks progress metrics, and provides dedicated accountability for your fitness goals.',
      intensity: 'Customized',
      duration: '60 Mins',
      benefits: ['Bespoke custom programming', 'Direct expert guidance', '100% focused accountability'],
    },
    {
      id: 'zumba',
      title: 'Zumba',
      icon: <Heart size={32} />,
      shortDesc: 'Dance-based aerobic workouts combining latin rhythms with high-energy fitness choreography.',
      longDesc: 'Ditch the workout and join the party! Zumba combines high-energy latin and international music with dance movements to create an exhilarating cardiorespiratory workout. Fun, social, and highly effective for coordination, endurance, and weight management.',
      intensity: 'Medium to High',
      duration: '50 Mins',
      benefits: ['Full body cardio workout', 'Fun & stress-relieving', 'Improves coordination & rhythm'],
    },
    {
      id: 'crossfit',
      title: 'CrossFit',
      icon: <Compass size={32} />,
      shortDesc: 'High-intensity functional movements blending powerlifting, gymnastics, and endurance.',
      longDesc: 'Our CrossFit program pushes your boundaries by combining elements of Olympic weightlifting, gymnastics, plyometrics, and high-intensity conditioning. Workouts of the Day (WODs) are fully scalable, ensuring safety while pushing your fitness limits.',
      intensity: 'Very High',
      duration: '60 Mins',
      benefits: ['Functional athletic power', 'Increased work capacity', 'Strong, supportive community'],
    },
    {
      id: 'nutrition',
      title: 'Nutritional Guidance',
      icon: <Apple size={32} />,
      shortDesc: 'Expert meal structuring and macro targets tailored to complement your training regime.',
      longDesc: 'Fitness is built in the gym but sustained in the kitchen. Our Nutritional Guidance program provides personalized diet planning, calorie and macro profiling, and sustainable lifestyle habit coaching to fuel your training, optimize recovery, and ensure long-term wellness.',
      intensity: 'Low',
      duration: 'N/A (Consultation)',
      benefits: ['Optimized performance & energy', 'Sustainable dietary guidelines', 'Enhanced muscle recovery'],
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
