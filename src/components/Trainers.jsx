import React from 'react';
import { Award, Briefcase, Calendar } from 'lucide-react';

export default function Trainers({ onBookTrainerClick }) {
  const trainers = [
    {
      id: 'sarah',
      name: 'Sarah Connor',
      role: 'Head CrossFit Coach',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop',
      certifications: ['CrossFit Level 3 Coach', 'NASM Certified Personal Trainer'],
      experience: '8 Years',
      bio: 'Specializes in high-intensity functional training and explosive power scaling.',
    },
    {
      id: 'marcus',
      name: 'Marcus Aurelius',
      role: 'Strength & Conditioning Lead',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop',
      certifications: ['Certified Strength & Conditioning Specialist (CSCS)', 'USAW Olympic Lifting L2'],
      experience: '12 Years',
      bio: 'Focused on structural hypertrophy, powerbuilding, and athletic injury mitigation.',
    },
    {
      id: 'elena',
      name: 'Elena Rostova',
      role: 'Yoga & Mobility Specialist',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop',
      certifications: ['RYT-500 Yoga Alliance', 'FST (Fascial Stretch Therapy) Practitioner'],
      experience: '6 Years',
      bio: 'Committed to dynamic muscle recovery, posture realignment, and breathing flow.',
    },
    {
      id: 'john',
      name: 'John Carver',
      role: 'Boxing & MMA Coach',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      certifications: ['WBC Certified Boxing Instructor', 'ISSA Sports Conditioning'],
      experience: '9 Years',
      bio: 'Former professional cruiserweight boxer specializing in cardio conditioning and footwork.',
    },
    {
      id: 'diana',
      name: 'Diana Prince',
      role: 'Athletic Performance Coach',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop',
      certifications: ['NASM Performance Enhancement Specialist (PES)', 'Precision Nutrition L1'],
      experience: '7 Years',
      bio: 'Passionate about training female athletes and designing customized fat loss strategies.',
    },
    {
      id: 'leonidas',
      name: 'Leonidas Spartacus',
      role: 'Powerlifting Specialist',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
      certifications: ['USAPL National Referee & Coach', 'BS in Exercise Science'],
      experience: '15 Years',
      bio: 'Helping athletes master squat, bench press, and deadlift mechanics to break personal records.',
    },
  ];

  return (
    <section id="trainers" className="py-32 px-6 md:px-12 bg-bg relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">
            Elite Coaches
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-black text-text-white mt-2 font-heading">
            Meet Our <span className="text-primary">Certified Trainers</span>
          </h2>
          <div className="w-14 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Trainers Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-bg-card border border-border rounded-lg overflow-hidden text-left transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-primary hover:shadow-lg hover:shadow-primary/15 group flex flex-col"
            >
              {/* Photo Header */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Float Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-primary text-text-dark font-heading font-extrabold px-3 py-1 rounded text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-black/20">
                  <Briefcase size={14} /> {trainer.experience} Exp
                </div>
              </div>

              {/* Text Info Body */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <h3 className="text-xl font-bold uppercase text-text-white mb-1 font-heading">
                  {trainer.name}
                </h3>
                <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider mb-4">
                  {trainer.role}
                </p>

                <p className="text-text-muted text-[0.9rem] leading-relaxed mb-6">
                  {trainer.bio}
                </p>

                {/* Certifications Box */}
                <div className="border-t border-border pt-5 mb-8 flex-grow">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-white mb-3 flex items-center gap-1.5 font-heading">
                    <Award size={16} className="text-primary" /> Credentials
                  </h4>
                  <ul className="list-none p-0 flex flex-col gap-1.5">
                    {trainer.certifications.map((cert, i) => (
                      <li key={i} className="text-xs text-text-muted relative pl-3.5 leading-relaxed">
                        <span className="absolute left-0 text-primary">•</span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <button
                  onClick={() => onBookTrainerClick(`Personal Training with ${trainer.name}`)}
                  className="w-full inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-5 py-2.5 rounded-sm bg-transparent text-text-white border-2 border-primary hover:bg-primary hover:text-text-dark transition-all duration-300 cursor-pointer text-sm gap-2"
                >
                  <Calendar size={16} /> Book With {trainer.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
