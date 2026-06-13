import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const items = [
    {
      id: 1,
      category: 'facilities',
      title: 'Free Weight Zone',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
      desc: 'Our expansive strength arena equipped with Olympic lifting platforms.',
    },
    {
      id: 2,
      category: 'equipments',
      title: 'Dumbbell Rack',
      image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=600&auto=format&fit=crop',
      desc: 'Sleek custom dumbbell arrays scaling from 2kg to 60kg.',
    },
    {
      id: 3,
      category: 'transformations',
      title: 'Athletic Conditioning',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
      desc: 'Real progress: 12-week body composition and endurance result.',
    },
    {
      id: 4,
      category: 'facilities',
      title: 'Cardio Deck',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop',
      desc: 'Top-tier woodway treadmills, stairmasters, and assault bikes facing scenic views.',
    },
    {
      id: 5,
      category: 'equipments',
      title: 'Power Cage Rigs',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      desc: 'Heavy-duty steel cages for squatting, bench pressing, and pull-up protocols.',
    },
    {
      id: 6,
      category: 'transformations',
      title: 'Strength gains',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop',
      desc: 'Personal trainers helping members break squats and deadlifts records.',
    },
    {
      id: 7,
      category: 'facilities',
      title: 'Yoga & Pilates Studio',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop',
      desc: 'Quiet, temperature-regulated environment for mindfulness and stretching.',
    },
    {
      id: 8,
      category: 'equipments',
      title: 'Rowing Machines',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
      desc: 'Concept2 rowers providing total-body low-impact cardio conditioning.',
    },
    {
      id: 9,
      category: 'transformations',
      title: 'Boxing Sparring Ring',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      desc: 'Speed bag drills and agility endurance training.',
    },
  ];

  const filteredItems = filter === 'all' ? items : items.filter((item) => item.category === filter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-bg-light relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">
            Visual Showcase
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-black text-text-white mt-2 font-heading">
            Be Strong <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-14 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { value: 'all', label: 'Show All' },
            { value: 'facilities', label: 'Gym Facilities' },
            { value: 'equipments', label: 'Equipments' },
            { value: 'transformations', label: 'Transformations' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                filter === btn.value
                  ? 'bg-primary border-primary text-text-dark shadow-md shadow-primary/10'
                  : 'bg-white/2 border-border text-text-light hover:border-primary/50 hover:text-primary'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="relative rounded-lg overflow-hidden h-64 cursor-pointer border border-border shadow-md group"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/85 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 text-center">
                <div className="text-primary mb-3">
                  <Maximize2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-text-white uppercase mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center z-[3000] p-6 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close lightbox */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 bg-transparent border-none text-text-white hover:text-primary cursor-pointer transition-colors z-[3100]"
          >
            <X size={32} />
          </button>

          {/* Navigation controls */}
          <button
            onClick={handlePrev}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-white hover:bg-primary hover:text-text-dark hover:border-primary transition-all duration-200 cursor-pointer z-[3100]"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-white hover:bg-primary hover:text-text-dark hover:border-primary transition-all duration-200 cursor-pointer z-[3100]"
          >
            <ChevronRight size={24} />
          </button>

          {/* Display Photo */}
          <div
            className="max-w-[900px] max-h-[70vh] w-full h-full flex justify-center items-center mb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5"
            />
          </div>

          {/* Description Block */}
          <div
            className="text-center max-w-[600px] z-[3100]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-primary font-bold text-xs uppercase tracking-wider font-heading">
              {filteredItems[lightboxIndex].category}
            </span>
            <h3 className="text-2xl font-black text-text-white uppercase mt-1 mb-2 font-heading">
              {filteredItems[lightboxIndex].title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {filteredItems[lightboxIndex].desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
