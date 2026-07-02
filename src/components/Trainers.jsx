import React from 'react';
import { Award, Briefcase, Calendar } from 'lucide-react';

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

export default function Trainers({ onBookTrainerClick }) {
  const trainers = [
    {
      id: 'walmik',
      name: 'Walmik Jagtap',

      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop',
      certifications: ['Certified Personal Trainer (CPT)', 'Expert Strength & Conditioning Coach'],
      experience: '7 Years',
      bio: 'Experienced fitness trainer with 7+ years of expertise in strength training, muscle building, fat loss, and body transformation. Dedicated to helping members achieve sustainable results through structured training and proper guidance.',
      instagram: '@jagtapwalmik02',
      instagramLink: 'https://www.instagram.com/jagtapwalmik02?igsh=MXI1Mjd3cHhhOHZvdg==',
    },
    {
      id: 'manoj',
      name: 'Manoj Rathod',

      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      certifications: ['K11 Certified Fitness Professional', 'Advanced Strength Training Certified'],
      experience: '6 Years',
      bio: 'K11 Certified Fitness Trainer specializing in strength development, muscle gain, and personalized workout programs. Focused on helping members build strength, confidence, and long-term fitness habits.',
      instagram: '@manojrathod.7',
      instagramLink: 'https://www.instagram.com/manojrathod.7?igsh=OXhnYXJkenFzMmh4',
    },
    {
      id: 'swami',
      name: 'Swami Ahire',

      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
      certifications: ['Hypertrophy Training Specialist', 'Powerlifting Technique Certified'],
      experience: '2.5 Years',
      bio: 'Strength and conditioning coach focused on improving performance, increasing muscle mass, and mastering lifting techniques. Passionate about helping members train safely and reach their full potential.',
      instagram: '@sammy.fitcoach',
      instagramLink: 'https://www.instagram.com/sammy.fitcoach?igsh=bmt4cmRlbWpsams=',
    },
    {
      id: 'hemant',
      name: 'Hemant Patil',

      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=400&auto=format&fit=crop',
      certifications: ['Functional Training Specialist', 'Cardiorespiratory Conditioning Certified'],
      experience: '2.5 Years',
      bio: 'Functional fitness trainer specializing in agility, endurance, mobility, and full-body conditioning. Helps members improve athletic performance, movement quality, and overall fitness levels.',
      instagram: '@mr_hemant__05',
      instagramLink: 'https://www.instagram.com/mr_hemant__05?igsh=dWlrM2F6bmkwcG92',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
                  {trainer.role}
                </p>
                <a
                  href={trainer.instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-muted hover:text-primary text-xs font-semibold mb-4 inline-flex items-center gap-1.5 transition-colors duration-200"
                >
                  <InstagramIcon size={14} className="text-primary" /> {trainer.instagram}
                </a>

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
