import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Linkedin, X, Facebook, Instagram } from 'lucide-react';
import SEO from '@/components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subject = params.get('subject');
    const description = params.get('description');
    if (subject || description) {
      setFormData(() => ({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: subject ?? 'Book a Demo',
        message: description
          ? `Hi Sarmak Team,\n\nWe are very much interested in the product ${description}. Can you please schedule a DEMO for us on it.`
          : ''
      }));
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    try {
      const form = e.currentTarget;
      const formDataObj = new FormData(form);
      
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    }
  };


  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@sarmak.in',
      href: 'mailto:info@sarmak.in'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 97640 00745',
      href: 'tel:+919764000745'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'India',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      href: '#'
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch with SARMAK"
        description="Contact SARMAK for IT solutions, managed services, AI consulting, and more. Reach out via email, phone, or fill out our contact form."
        keywords="contact SARMAK, IT consulting India, IT services contact, AI solutions contact"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Contact</span>
            <h1 className="heading-xl text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Have questions or need a consultation? We are here to help. Reach out to us 
              and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href}
                  className="glass-card p-6 text-center hover-lift group"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <info.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                  <p className="text-white/60 text-sm">{info.content}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Send Message</span>
                <h2 className="heading-lg text-white mb-8">
                  Send Us a <span className="text-gradient">Message</span>
                </h2>
                
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  
                  {submitted && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                      Thank you for your message! We will get back to you soon.
                    </div>
                  )}
                  
                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                      {error}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold focus:outline-none transition-colors"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-[#1c1d1b]">Select a subject</option>
                      <option value="general" className="bg-[#1c1d1b]">General Inquiry</option>
                      <option value="Book a Demo" className="bg-[#1c1d1b]">Book a Demo</option>
                      <option value="services" className="bg-[#1c1d1b]">IT Services</option>
                      <option value="ai" className="bg-[#1c1d1b]">AI Solutions</option>
                      <option value="training" className="bg-[#1c1d1b]">AI Training</option>
                      <option value="partnership" className="bg-[#1c1d1b]">Partnership</option>
                      <option value="careers" className="bg-[#1c1d1b]">Careers</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
              
              {/* WhatsApp & Social */}
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Connect</span>
                <h2 className="heading-lg text-white mb-8">
                  Other Ways to <span className="text-gradient">Connect</span>
                </h2>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/918800306555" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-card p-6 flex items-center gap-4 hover-lift group"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                      <MessageCircle className="w-7 h-7 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                      <p className="text-white/60 text-sm">Message us on WhatsApp for quick responses</p>
                    </div>
                  </a>
                  
                  {/* Social Links */}
                  <div className="glass-card p-6">
                    <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://www.linkedin.com/company/sarmak-solutions" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://x.com/SarmakSolutions" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all"
                      >
                        <X className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://www.instagram.com/sarmaksolutions/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Quick Response */}
                  <div className="glass-card p-6">
                    <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                    <p className="text-white/60 text-sm">
                      We typically respond to inquiries within 24 hours during business days. 
                      For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
