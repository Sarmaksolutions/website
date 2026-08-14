import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
//import { Menu, X, ChevronDown, Brain, Cloud, Database, Server, Code, Settings, Layers, Monitor } from 'lucide-react';
import { Menu, X, ChevronDown, Brain, Cloud, Database, Server, Code, Layers, Monitor, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesDropdown = [
    { name: 'AI Solutions', path: '/services/ai', icon: Brain, description: 'AI-Powered IT Management' },
   // { name: 'AI Training', path: '/services/ai-training', icon: GraduationCap, description: 'University & College Programs' },
   // { name: 'Learning with SARMAK', path: '/services/learning-with-sarmak', icon: BookOpen, description: 'Free 4-week graduate training' },
    { name: 'Managed IT', path: '/services/managed-it', icon: Server, description: '24/7 IT Support' },
    { name: 'Cloud Services', path: '/services/cloud', icon: Cloud, description: 'AWS, Azure, GCP' },
    { name: 'Database', path: '/services/database', icon: Database, description: 'Oracle, SQL, NoSQL' },
    { name: 'DevOps', path: '/services/devops', icon: Code, description: 'CI/CD, Kubernetes' },
    { name: 'Operating Systems', path: '/services/operating-systems', icon: Monitor, description: 'Linux, Windows, Unix' },
    { name: 'Middleware', path: '/services/middleware', icon: Layers, description: 'WebLogic, WebSphere' },
    //{ name: 'Power Platform', path: '/services/power-platform', icon: Settings, description: 'Microsoft Solutions' }, 
  ];

  const companyDropdown = [
    { name: 'About Us', path: '/about' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
   // { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
   // { name: 'Testimonials', path: '/testimonials' },
    { name: 'Partners', path: '/partners' },
    { name: 'News', path: '/news' },
    { name: 'Careers', path: '/careers' },
  ];

  const productsDropdown = [
    { name: 'Cloud Cost Optimizer', path: '/in-house-tools#cloud-cost-optimizer', description: 'Real-time cloud spend intelligence' },
    { name: 'Oracle Performance Review', path: '/in-house-tools#oracle-performance-review', description: 'Deep database performance diagnostics' },
    { name: 'Infrastructure Efficiency', path: '/in-house-tools#infrastructure-efficiency', description: 'Capacity planning and utilization optimization' },
  ];

  const resourcesDropdown = [
    { name: 'Blog', path: '/blog' },
    { name: 'Resources', path: '/resources' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Service Plans', path: '/service-plans' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');
  const isProductsActive = location.pathname === '/in-house-tools';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg shadow-black/20">
      <div className="section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="SARMAK" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white tracking-wider">SARMAK</span>
              <span className="block text-xs text-gold font-mono tracking-widest">INNOVATE. TRANSFORM. EXCEL.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                isActive('/') ? 'text-gold bg-gold/10' : 'text-white/80 hover:text-gold hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                  isServicesActive ? 'text-gold bg-gold/10' : 'text-white/80 hover:text-gold hover:bg-white/5'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-[#1c1d1b]/98 backdrop-blur-xl border border-gold/20 rounded-lg shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-start gap-3 p-3 rounded-md transition-all duration-300 hover:bg-gold/10 group"
                      >
                        <service.icon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block text-sm font-medium text-white group-hover:text-gold transition-colors">
                            {service.name}
                          </span>
                          <span className="text-xs text-white/50">{service.description}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                  isProductsActive ? 'text-gold bg-gold/10' : 'text-white/80 hover:text-gold hover:bg-white/5'
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-[#1c1d1b]/98 backdrop-blur-xl border border-gold/20 rounded-lg shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    {productsDropdown.map((product) => (
                      <Link
                        key={product.path + product.name}
                        to={product.path}
                        className="flex items-start gap-3 p-3 rounded-md transition-all duration-300 hover:bg-gold/10 group"
                      >
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold text-xs font-semibold">
                          P
                        </span>
                        <div>
                          <span className="block text-sm font-medium text-white group-hover:text-gold transition-colors">
                            {product.name}
                          </span>
                          <span className="text-xs text-white/50">{product.description}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                  activeDropdown === 'company' || ['/about', '/why-choose-us', '/industries', '/case-studies', '/testimonials', '/partners', '/news', '/careers'].some(p => location.pathname === p)
                    ? 'text-gold bg-gold/10' : 'text-white/80 hover:text-gold hover:bg-white/5'
                }`}
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1c1d1b]/98 backdrop-blur-xl border border-gold/20 rounded-lg shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    {companyDropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-white/80 rounded-md transition-all duration-300 hover:bg-gold/10 hover:text-gold"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                  activeDropdown === 'resources' || ['/blog', '/resources', '/faq', '/service-plans'].some(p => location.pathname === p)
                    ? 'text-gold bg-gold/10' : 'text-white/80 hover:text-gold hover:bg-white/5'
                }`}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1c1d1b]/98 backdrop-blur-xl border border-gold/20 rounded-lg shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    {resourcesDropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-white/80 rounded-md transition-all duration-300 hover:bg-gold/10 hover:text-gold"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                isActive('/contact') ? 'text-gold bg-gold/10' : 'text-white/80 hover:text-gold hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Social Media & CTA Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-3 border-r border-white/10 pr-4">
              <a 
                href="https://www.linkedin.com/company/sarmak-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/SarmakSolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61588886422576" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/sarmaksolutions?igsh=NjV6c3pzNTVpeW84" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors duration-300">
                Book a Demo
              </Link>
             {/*} <Link to="/contact" className="btn-primary text-sm">
                Get Started
              </Link> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1c1d1b]/98 backdrop-blur-xl border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="section-padding py-6 space-y-4">
            <Link to="/" className="block py-2 text-white hover:text-gold transition-colors">Home</Link>
            
            <div className="space-y-2">
              <span className="block text-gold text-sm font-medium">Services</span>
              {servicesDropdown.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block pl-4 py-1 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <div className="space-y-2">
              <span className="block text-gold text-sm font-medium">Company</span>
              {companyDropdown.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block pl-4 py-1 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="space-y-2">
              <span className="block text-gold text-sm font-medium">Products</span>
              {productsDropdown.map((product) => (
                <Link
                  key={product.path + product.name}
                  to={product.path}
                  className="block pl-4 py-1 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  {product.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <span className="block text-gold text-sm font-medium">Resources</span>
              {resourcesDropdown.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block pl-4 py-1 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <Link to="/contact" className="block py-2 text-white hover:text-gold transition-colors">Contact</Link>
            
            <div className="flex items-center gap-3 py-4 border-t border-white/10 mt-4">
              <a 
                href="https://www.linkedin.com/company/sarmak-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/SarmakSolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61588886422576" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/sarmaksolutions?igsh=NjV6c3pzNTVpeW84" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            
            <Link to="/contact" className="block w-full py-3 px-4 text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors duration-300 mt-2">
              Book a Demo
            </Link>
            <Link to="/contact" className="btn-primary w-full text-center">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
