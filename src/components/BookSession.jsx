import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, Award, CheckCircle, X } from 'lucide-react';

const trainers = [
  'Any Trainer',
  'Walmik Jagtap (Founder & Lead)',
  'Manoj Rathod (K11 Certified)',
  'Swami Ahire (Hypertrophy & Powerlifting)',
  'Hemant Patil (Functional & Conditioning)',
];

const programs = [
  'General Gym Membership',
  'Gym Membership + Personal Trainer',
  'Weight Training',
  'Cardio Training',
  'Personal Training',
  'Zumba',
  'CrossFit',
  'Nutritional Guidance',
  'Free Trial Session',
];

export default function BookSession({ isOpen, onClose, selectedProgram, inline = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    wantsTrainer: false,
    trainer: 'None',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (selectedProgram) {
      let matchedProgram = '';
      let matchedTrainer = 'Any Trainer';
      let wantsTrainer = false;

      if (selectedProgram.startsWith('Personal Training with ')) {
        const trainerName = selectedProgram.replace('Personal Training with ', '');
        matchedProgram = 'Gym Membership + Personal Trainer';
        wantsTrainer = true;
        const foundTrainer = trainers.find(t => t.toLowerCase().includes(trainerName.toLowerCase()));
        if (foundTrainer) {
          matchedTrainer = foundTrainer;
        }
      } else if (selectedProgram.startsWith('Membership Consultation - ')) {
        const planName = selectedProgram.replace('Membership Consultation - ', '');
        if (planName.includes('General')) {
          matchedProgram = 'General Gym Membership';
        } else if (planName.includes('Trainer') || planName.includes('Personal')) {
          matchedProgram = 'Gym Membership + Personal Trainer';
          wantsTrainer = true;
        } else {
          matchedProgram = 'General Gym Membership';
        }
      } else if (selectedProgram === 'Personal Training') {
        matchedProgram = 'Gym Membership + Personal Trainer';
        wantsTrainer = true;
      } else {
        const found = programs.find(p => p.toLowerCase() === selectedProgram.toLowerCase());
        matchedProgram = found || 'General Gym Membership';
      }

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData((prev) => ({
        ...prev,
        program: matchedProgram,
        wantsTrainer: wantsTrainer,
        trainer: wantsTrainer ? matchedTrainer : 'None'
      }));
    }
  }, [selectedProgram, isOpen]);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[-+()\s]/g, ''))) {
      tempErrors.phone = 'Phone number is invalid (must be 10-15 digits)';
    }

    if (!formData.program) tempErrors.program = 'Please select a program';
    if (!formData.date) tempErrors.date = 'Please select a date';
    if (!formData.time) tempErrors.time = 'Please select a time slot';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Construct structured WhatsApp booking message
      const textMessage = `Hello Be Strong Gym! I would like to join the gym / book a trial:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Program/Membership: ${formData.program}
- Personal Trainer Wanted: ${formData.wantsTrainer ? 'Yes' : 'No'}${formData.wantsTrainer ? `\n- Preferred Trainer: ${formData.trainer}` : ''}
- Date: ${formData.date}
- Time: ${formData.time}`;
      
      const encodedText = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/918888972265?text=${encodedText}`;
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Open WhatsApp chat in a new tab
        window.open(whatsappUrl, '_blank');
      }, 1200);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: selectedProgram || '',
      wantsTrainer: false,
      trainer: 'None',
      date: '',
      time: '',
    });
    setErrors({});
    setSubmitSuccess(false);
    if (onClose) onClose();
  };

  if (!isOpen && !inline) return null;

  const content = (
    <div
      className={`bg-bg-card border rounded-xl p-8 md:p-10 relative text-left shadow-2xl w-full max-w-[600px] flex flex-col ${
        inline ? 'border-border' : 'border-border/50 max-h-[90vh] overflow-y-auto animate-fade-in-up'
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal Close Button */}
      {!inline && onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-transparent border-none text-text-muted hover:text-text-white cursor-pointer transition-colors duration-200"
        >
          <X size={24} />
        </button>
      )}

      {submitSuccess ? (
        /* Success Confirmation Receipt */
        <div className="text-center py-8">
          <div className="text-primary mb-6 flex justify-center">
            <CheckCircle size={72} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl md:text-3xl font-black uppercase text-text-white mb-3 font-heading">
            Request Submitted!
          </h3>
          <p className="text-text-muted mb-8 text-[0.95rem] leading-relaxed">
            Your request has been compiled. We have redirected you to WhatsApp to finalize your gym membership with us at **+91 88889 72265** or call us at **+91 82086 90487**.
          </p>

          <div className="bg-white/2 border border-border rounded-lg p-6 text-left mb-8 flex flex-col gap-3">
            <h4 className="border-b border-border pb-2 text-sm font-bold uppercase tracking-wider text-primary font-heading">
              Membership Details
            </h4>
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Name:</span>
              <span className="font-bold text-text-white">{formData.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Program/Plan:</span>
              <span className="font-bold text-text-white">{formData.program}</span>
            </div>
            {formData.wantsTrainer && (
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Trainer:</span>
                <span className="font-bold text-text-white">{formData.trainer}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Start Date:</span>
              <span className="font-bold text-primary font-heading">
                {formData.date} @ {formData.time}
              </span>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm bg-primary text-text-dark border-2 border-primary hover:bg-primary-hover hover:border-primary-hover hover:text-text-white shadow-lg transition-all duration-300 cursor-pointer"
          >
            Done
          </button>
        </div>
      ) : (
        /* Form Content */
        <div>
          <div className="mb-8 text-center">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-text-white mb-2 font-heading">
              JOIN THE GYM TODAY
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Choose your membership plan and start your fitness journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name input */}
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-text-light">Full Name</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full py-3 pl-12 pr-4 bg-white/3 text-text-white text-sm rounded-sm outline-none transition-all ${
                    errors.name ? 'border-2 border-red-500' : 'border border-border focus:border-primary'
                  }`}
                />
              </div>
              {errors.name && <span className="text-red-500 text-xs font-medium mt-0.5">{errors.name}</span>}
            </div>

            {/* Email & Phone Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-text-light">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full py-3 pl-12 pr-4 bg-white/3 text-text-white text-sm rounded-sm outline-none transition-all ${
                      errors.email ? 'border-2 border-red-500' : 'border border-border focus:border-primary'
                    }`}
                  />
                </div>
                {errors.email && <span className="text-red-500 text-xs font-medium mt-0.5">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-text-light">Phone Number</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full py-3 pl-12 pr-4 bg-white/3 text-text-white text-sm rounded-sm outline-none transition-all ${
                      errors.phone ? 'border-2 border-red-500' : 'border border-border focus:border-primary'
                    }`}
                  />
                </div>
                {errors.phone && <span className="text-red-500 text-xs font-medium mt-0.5">{errors.phone}</span>}
              </div>
            </div>

            {/* Program selection */}
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-text-light">Select Plan</label>
              <select
                value={formData.program}
                onChange={(e) => {
                  const val = e.target.value;
                  const requiresTrainer = val === 'Gym Membership + Personal Trainer';
                  setFormData({
                    ...formData,
                    program: val,
                    wantsTrainer: requiresTrainer ? true : formData.wantsTrainer,
                    trainer: requiresTrainer ? (formData.trainer === 'None' ? 'Any Trainer' : formData.trainer) : formData.trainer
                  });
                }}
                className={`w-full p-3 bg-bg-card text-text-white text-sm rounded-sm outline-none transition-all cursor-pointer ${
                  errors.program ? 'border-2 border-red-500' : 'border border-border focus:border-primary'
                }`}
              >
                <option value="" className="bg-bg-card">Select a Membership Plan</option>
                {programs.map((prog) => (
                  <option key={prog} value={prog} className="bg-bg-card text-text-white">
                    {prog}
                  </option>
                ))}
              </select>
              {errors.program && <span className="text-red-500 text-xs font-medium mt-0.5">{errors.program}</span>}
            </div>

            {/* Checkbox: I want a Personal Trainer */}
            <div className="flex items-center gap-2 py-1 select-none">
              <input
                type="checkbox"
                id="wantsTrainer"
                checked={formData.wantsTrainer}
                onChange={(e) => setFormData({
                  ...formData,
                  wantsTrainer: e.target.checked,
                  trainer: e.target.checked ? 'Any Trainer' : 'None'
                })}
                className="w-4 h-4 rounded border-border bg-bg-light text-primary focus:ring-primary cursor-pointer accent-primary"
              />
              <label htmlFor="wantsTrainer" className="text-sm font-semibold text-text-light cursor-pointer">
                I want a Personal Trainer
              </label>
            </div>

            {/* Trainer selection */}
            {formData.wantsTrainer && (
              <div className="flex flex-col gap-1.5 text-left transition-all duration-300">
                <label className="text-xs font-bold uppercase tracking-wider text-text-light">Preferred Trainer</label>
                <div className="relative">
                  <Award size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <select
                    value={formData.trainer}
                    onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
                    className="w-full py-3 pl-12 pr-4 bg-bg-card text-text-white text-sm rounded-sm outline-none border border-border focus:border-primary cursor-pointer"
                  >
                    {trainers.map((train) => (
                      <option key={train} value={train} className="bg-bg-card text-text-white">
                        {train}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Date & Time Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-text-light">Preferred Date</label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full py-3 pl-12 pr-4 bg-white/3 text-text-white text-sm rounded-sm outline-none transition-all [color-scheme:dark] ${
                      errors.date ? 'border-2 border-red-500' : 'border border-border focus:border-primary'
                    }`}
                  />
                </div>
                {errors.date && <span className="text-red-500 text-xs font-medium mt-0.5">{errors.date}</span>}
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-text-light">Time Slot</label>
                <div className="relative">
                  <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={`w-full py-3 pl-12 pr-4 bg-bg-card text-text-white text-sm rounded-sm outline-none transition-all cursor-pointer ${
                      errors.time ? 'border-2 border-red-500' : 'border border-border focus:border-primary'
                    }`}
                  >
                    <option value="" className="bg-bg-card">Select Time</option>
                    <option value="06:00 AM - 07:00 AM" className="bg-bg-card">06:00 AM - 07:00 AM (Morning)</option>
                    <option value="07:00 AM - 08:00 AM" className="bg-bg-card">07:00 AM - 08:00 AM (Morning)</option>
                    <option value="08:00 AM - 09:00 AM" className="bg-bg-card">08:00 AM - 09:00 AM (Morning)</option>
                    <option value="09:00 AM - 10:00 AM" className="bg-bg-card">09:00 AM - 10:00 AM (Morning)</option>
                    <option value="05:00 PM - 06:00 PM" className="bg-bg-card">05:00 PM - 06:00 PM (Evening)</option>
                    <option value="06:00 PM - 07:00 PM" className="bg-bg-card">06:00 PM - 07:00 PM (Evening)</option>
                    <option value="07:00 PM - 08:00 PM" className="bg-bg-card">07:00 PM - 08:00 PM (Evening)</option>
                    <option value="08:00 PM - 09:00 PM" className="bg-bg-card">08:00 PM - 09:00 PM (Evening)</option>
                    <option value="09:00 PM - 10:00 PM" className="bg-bg-card">09:00 PM - 10:00 PM (Evening)</option>
                  </select>
                </div>
                {errors.time && <span className="text-red-500 text-xs font-medium mt-0.5">{errors.time}</span>}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm bg-primary text-text-dark border-2 border-primary hover:bg-primary-hover hover:border-primary-hover hover:text-text-white shadow-lg shadow-primary/20 transition-all duration-300 cursor-pointer disabled:opacity-50 mt-4 font-bold"
            >
              {isSubmitting ? (
                formData.program === 'Free Trial Session' ? 'Booking Free Trial...' : 'Submitting Request...'
              ) : (
                formData.program === 'Free Trial Session' ? 'Book Free Trial' : 'Join Now'
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );

  if (inline) {
    return content;
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[2000] p-4 animate-fade-in"
      onClick={onClose}
    >
      {content}
    </div>
  );
}
