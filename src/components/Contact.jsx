import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';

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
      const whatsappUrl = `https://wa.me/918888972265?text=${encodedText}`;

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
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-white font-heading">Calling Number</h4>
                  <p className="text-text-muted text-sm mt-0.5">+91 82086 90487</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-primary bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="22"
                    height="22"
                    fill="currentColor"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-white font-heading">WhatsApp Number</h4>
                  <p className="text-text-muted text-sm mt-0.5">+91 88889 72265</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-primary bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-white font-heading">Email Address</h4>
                  <p className="text-text-muted text-sm mt-0.5">bestronggymfitnessclub@gmail.com</p>
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

            {/* Google Maps Location Card (Styled in the exact form of the image) */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-white shadow-2xl transition-all duration-300 hover:border-primary/50 text-left">
              {/* Image-Style Top Header Banner */}
              <div className="p-4 md:p-5 bg-white border-b border-gray-100 flex items-start gap-3.5">
                <div className="text-[#1a73e8] mt-0.5 shrink-0">
                  <MapPin size={24} className="fill-[#1a73e8]/10 text-[#1a73e8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-gray-900 font-heading tracking-wide">
                    Our Location
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed font-body">
                    2nd floor, Sai complex, Station Rd, in front of Ravi college, Hanuman Wadi, Chalisgaon, Maharashtra – 424101
                  </p>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="relative w-full h-72 md:h-80 bg-gray-100">
                <iframe
                  title="Be Strong Fitness Club Google Maps Location"
                  src="https://maps.google.com/maps?q=2nd+floor+Sai+complex+Station+Rd+in+front+of+Ravi+college+Hanuman+Wadi+Chalisgaon+Maharashtra+424101&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Bottom Quick Action Bar */}
              <div className="p-3.5 bg-bg-card border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-left w-full sm:w-auto">
                  <div className="text-primary shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span className="text-xs text-text-muted truncate max-w-[220px] sm:max-w-[260px]">
                    Sai Complex, Station Rd, Chalisgaon
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=2nd+floor+Sai+complex+Station+Rd+Hanuman+Wadi+Chalisgaon+Maharashtra+424101"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider font-heading text-primary bg-primary/10 hover:bg-primary hover:text-text-dark rounded-md transition-all duration-200 border border-primary/30"
                  >
                    <Navigation size={13} />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/fzj7TsjMwZztzeGeA"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider font-heading text-text-light hover:text-text-white bg-white/5 hover:bg-white/10 rounded-md transition-all duration-200 border border-border"
                  >
                    <ExternalLink size={13} />
                    <span>Open in Maps</span>
                  </a>
                </div>
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
