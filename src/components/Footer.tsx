import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services/managed-it' },
    { name: 'AI Solutions', path: '/services/ai' },
    { name: 'AI Training', path: '/services/ai-training' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Managed IT Services', path: '/services/managed-it' },
    { name: 'Cloud Services', path: '/services/cloud' },
    { name: 'Database Services', path: '/services/database' },
    { name: 'DevOps', path: '/services/devops' },
    { name: 'Middleware', path: '/services/middleware' },
    { name: 'Power Platform', path: '/services/power-platform' },
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Service Plans', path: '/service-plans' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Sitemap', path: '/sitemap' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  return (
    <footer className="bg-black/50 border-t border-white/5">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="SARMAK" className="h-14 w-auto" />
              <div>
                <span className="text-2xl font-bold text-white tracking-wider block">SARMAK</span>
                <span className="text-xs text-gold font-mono tracking-widest">INNOVATE. TRANSFORM. EXCEL.</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              SARMAK is a group of technology enthusiasts driven by passion and commitment 
              to revolutionize customer businesses through innovative IT solutions and 
              AI-powered services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:info@sarmak.in" 
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-gold" />
                info@sarmak.in
              </a>
              <a 
                href="tel:+91 97640 00745" 
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-gold" />
                +91 97640 00745 
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Joyville, Meridian-1302, Hinjewadi, Pune MH 411057,India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-1 group"
                  >
                    {service.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link 
                    to={resource.path}
                    className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-1 group"
                  >
                    {resource.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white/40 text-sm text-center md:text-left">
              © {currentYear} SARMAK. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {legal.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
