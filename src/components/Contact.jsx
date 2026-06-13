import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true);

      // Construct structured WhatsApp enquiry message
      const textMessage = `Hello Be Strong Gym! I have an enquiry:
- Name: ${formData.name}
- Email: ${formData.email}
- Subject: ${formData.subject}
- Message: ${formData.message}`;

      const encodedText = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/918263919311?text=${encodedText}`;

      setTimeout(() => {
        setIsSending(false);
        setSendSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Open WhatsApp chat in a new tab
        window.open(whatsappUrl, '_blank');
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-bg relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-black text-text-white mt-2 font-heading">
            Get In Touch With <span className="text-primary">Our Team</span>
          </h2>
          <div className="w-14 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Info & Map Card */}
          <div className="lg:col-span-5 flex flex-col gap-10 text-left">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4 font-heading text-text-white">
                We're Here To Help
              </h3>
              <p className="text-text-muted text-[0.95rem] leading-relaxed">
                Have questions regarding memberships, training schedules, or nutritional programs? Reach out directly, and one of our fitness managers will get back to you within 24 hours.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="text-primary bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-white font-heading">Location</h4>
                  <p className="text-text-muted text-sm mt-0.5">2nd floor, Sai complex, Station Rd, in front of Ravi college, Hanuman Wadi, Chalisgaon, Maharashtra 424101</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-primary bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-white font-heading">Phone Number</h4>
                  <p className="text-text-muted text-sm mt-0.5">+1 (800) 555-GYM-STRONG</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-primary bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-white font-heading">Email Address</h4>
                  <p className="text-text-muted text-sm mt-0.5">support@bestrongfitness.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-primary bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-white font-heading">Club Hours</h4>
                  <p className="text-text-muted text-sm mt-0.5">Mon - Fri: 5 AM - 11 PM | Sat - Sun: 7 AM - 9 PM</p>
                </div>
              </div>
            </div>

            {/* Mock Google Map */}
            <div className="relative w-full h-64 bg-bg-card border border-border rounded-lg flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(rgba(12,12,14,0.85), rgba(12,12,14,0.85)), repeating-linear-gradient(0deg, #18181F, #18181F 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #18181F, #18181F 2px, transparent 2px, transparent 40px)',
                }}
              />
              <div className="z-10 text-center">
                <div className="text-primary mb-2 inline-block animate-bounce">
                  <MapPin size={36} />
                </div>
                <h4 className="text-base font-bold text-text-white uppercase tracking-wide font-heading">
                  BE STRONG FITNESS CLUB
                </h4>
                <p className="text-text-muted text-xs mt-1">452 Iron Strength Avenue</p>
                <a
                  href="https://maps.app.goo.gl/fzj7TsjMwZztzeGeA"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary text-xs font-bold mt-3 inline-block border-b border-dashed border-primary hover:text-primary-hover hover:border-primary-hover transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7 bg-bg-card border border-border rounded-lg p-8 md:p-12 text-left transition-all duration-400 ease-out hover:border-primary/30">
            {sendSuccess ? (
              <div className="text-center py-8">
                <div className="text-primary mb-6 flex justify-center">
                  <CheckCircle2 size={64} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2 font-heading text-text-white">Message Sent!</h3>
                <p className="text-text-muted text-sm mb-8">
                  Thank you for reaching out. A membership expert will reply to you shortly.
                </p>
                <button
                  onClick={() => setSendSuccess(false)}
                  className="inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-6 py-3 rounded-sm bg-transparent text-text-white border-2 border-primary hover:bg-primary hover:text-text-dark transition-all duration-300 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-bold uppercase mb-2 font-heading text-text-white">
                  Send A Message
                </h3>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-light">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full py-3 px-4 bg-white/3 text-text-white text-sm rounded-sm outline-none transition-all ${errors.name ? 'border-2 border-red-500' : 'border border-border focus:border-primary'
                      }`}
                  />
                  {errors.name && <span className="text-red-500 text-xs font-medium mt-0.5">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-light">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full py-3 px-4 bg-white/3 text-text-white text-sm rounded-sm outline-none transition-all ${errors.email ? 'border-2 border-red-500' : 'border border-border focus:border-primary'
                      }`}
                  />
                  {errors.email && <span className="text-red-500 text-xs font-medium mt-0.5">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-light">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full py-3 px-4 bg-white/3 text-text-white text-sm rounded-sm outline-none transition-all ${errors.subject ? 'border-2 border-red-500' : 'border border-border focus:border-primary'
                      }`}
                  />
                  {errors.subject && <span className="text-red-500 text-xs font-medium mt-0.5">{errors.subject}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-light">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full py-3 px-4 bg-white/3 text-text-white text-sm rounded-sm outline-none transition-all resize-y ${errors.message ? 'border-2 border-red-500' : 'border border-border focus:border-primary'
                      }`}
                  />
                  {errors.message && <span className="text-red-500 text-xs font-medium mt-0.5">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm bg-primary text-text-dark border-2 border-primary hover:bg-primary-hover hover:border-primary-hover hover:text-text-white shadow-lg shadow-primary/20 transition-all duration-300 cursor-pointer text-sm gap-2"
                >
                  {isSending ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
