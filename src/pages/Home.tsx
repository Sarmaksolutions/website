import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Brain, Cloud, Database, Code, GraduationCap, CheckCircle, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import SEO, { generateOrganizationSchema } from '@/components/SEO';
import mantechLogo from '@/assets/mantech_logo.png';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroImage = heroRef.current.querySelector('.hero-image') as HTMLElement;
        if (heroImage) {
          heroImage.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      icon: Brain, 
      title: 'AI Solutions', 
      description: 'AI-powered IT management and automation for intelligent infrastructure.',
      path: '/services/ai'
    },
    { 
      icon: Cloud, 
      title: 'Cloud Services', 
      description: 'AWS, Azure, GCP - seamless cloud migration and management.',
      path: '/services/cloud'
    },
    { 
      icon: Database, 
      title: 'Database', 
      description: 'Oracle, SQL, NoSQL - expert database administration.',
      path: '/services/database'
    },
    { 
      icon: Code, 
      title: 'DevOps', 
      description: 'CI/CD pipelines, Kubernetes, and modern deployment.',
      path: '/services/devops'
    },
  ];

  const stats = [
    { value: '3+', label: 'Years Experience' },
  //  { value: '500+', label: 'Projects Delivered' },
    { value: '50+', label: 'Expert Engineers' },
    { value: '99.9%', label: 'Uptime Guaranteed' },
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Increased Efficiency', description: 'Streamline operations with up to 20% improvement' },
    { icon: Users, title: 'Expert Team', description: 'Certified professionals across all technologies' },
    { icon: Shield, title: 'Enhanced Security', description: 'Enterprise-grade security and compliance' },
    { icon: Zap, title: 'Cost Savings', description: 'Reduce operational costs by 10-20%' },
  ];

  return (
    <>
      <SEO 
        title="Innovative IT Solutions & AI-Powered Services"
        description="SARMAK provides cutting-edge IT solutions including managed services, AI-powered IT management, cloud services, database management, DevOps, and IT training for universities."
        keywords="IT services India, managed IT services, AI IT solutions, cloud migration, database administration, DevOps services"
        schema={generateOrganizationSchema()}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="SARMAK Hero" 
            className="hero-image w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1d1b] via-transparent to-[#1c1d1b]/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 section-padding w-full pt-32 pb-20">
          <div className="max-w-4xl">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
              <img 
                src="/logo.png" 
                alt="SARMAK" 
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">SARMAK</span>
                <span className="block text-sm text-gold font-mono tracking-widest">INNOVATE. TRANSFORM. EXCEL.</span>
              </div>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">Scaling intelligence. Powering Global Growth</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              <span className="block">Innovative IT</span>
              <span className="block text-gradient">Solutions for Your</span>
              <span className="block">Business</span>
            </h1>
            
            <p className="body-lg text-white/70 mb-8 max-w-2xl">
              Empowering growth through technology and expert support. SARMAK delivers 
              end-to-end IT solutions with AI-powered management, helping businesses 
              transform, transition, and excel in the digital era.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link to="/services/managed-it" className="btn-outline flex items-center gap-2">
                Our Services
                <ChevronRight className="w-4 h-4" />
              </Link>
                            <div className="flex flex-col gap-3">
                <a href="https://learn.sarmak.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-white font-semibold shadow-2xl shadow-emerald-500/20 transition hover:bg-emerald-600">
                  Join Free Training
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://learn.sarmak.in" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-300 hover:text-emerald-100 transition-colors">
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Latest News */}
      <section className="relative py-24 overflow-hidden bg-[#090b12]">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Latest News</span>
              <h2 className="heading-lg text-white mb-4">
                SARMAK is launching an industry-ready training program for college graduates
              </h2>
              <p className="body-lg text-white/70 max-w-3xl mx-auto">
                Learn in-demand technology skills with a free 4-week program covering Databases, Linux, DevOps, and AI. Visit <a href="https://learn.sarmak.in" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">learn.sarmak.in</a> to reserve your seat and learn more.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95">
              <article className="min-w-full px-8 py-10 animate-blink">
                <div className="max-w-3xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-gold text-xs uppercase tracking-[0.35em] mb-2">Training Launch</p>
                        <h3 className="text-3xl font-semibold text-white whitespace-nowrap">
                          SARMAK launches industry-ready learning at <a href="https://learn.sarmak.in" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">learn.sarmak.in</a>
                        </h3>
                      </div>
                    </div>
                    <span className="text-white/60 text-sm uppercase tracking-[0.3em]">May 25, 2026</span>
                  </div>
                  <div className="mb-6">
                    <img 
                      src="/ai-training.jpg" 
                      alt="SARMAK Learning Launch" 
                      className="w-full max-w-md rounded-lg shadow-lg border border-white/10"
                    />
                  </div>
                  <p className="body-lg text-white/70 mb-6">
                    SARMAK is launching a free industry-ready training program for fresh graduates and early-career professionals. The program includes real-world projects, expert mentoring, resume support, and hands-on learning in databases, Linux, DevOps, and AI.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-3 text-white/70">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gold" />
                       Free 4-week practical training for graduates and early-career professionals
                    </li>
                    <li className="flex gap-3 text-white/70">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gold" />
                      Hands-on projects in Databases, Linux, DevOps, and AI
                    </li>
                    <li className="flex gap-3 text-white/70">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gold" />
                      Resume review, interview prep, and industry mentor support
                    </li>
                    <li className="flex gap-3 text-white/70">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gold" />
                      Register now at <a href="https://learn.sarmak.in" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">learn.sarmak.in</a>
                    </li>
                  </ul>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                    <span> #BusinessGrowth #StrategicAlliance</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Announcement */}
      <section className="relative py-24 overflow-hidden bg-[#080a10]">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Partnership News</span>
              <h2 className="heading-lg text-white mb-4">
                SARMAK enters a strategic collaboration with <span className="text-gradient">Mantech Intellisys Pvt Ltd</span>
              </h2>
              <p className="body-lg text-white/70 max-w-3xl mx-auto">
                We are proud to partner with <a href="https://mantechintellisys.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mantech Intellisys Pvt Ltd</a> to deliver innovative, reliable, and scalable technology solutions that accelerate digital transformation for businesses across industries.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95">
              <article className="min-w-full px-8 py-10">
                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                      <p className="text-gold text-xs uppercase tracking-[0.35em] mb-2">Strategic Collaboration</p>
                      <h3 className="text-3xl font-semibold text-white">
                        SARMAK partners with Mantech Intellisys Pvt Ltd
                      </h3>
                    </div>
                    <span className="text-white/60 text-sm uppercase tracking-[0.3em]">July 2026</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <img
                      src={mantechLogo}
                      alt="Mantech Intellisys Logo"
                      className="h-16 w-auto rounded-lg bg-white/5 p-2"
                    />
                    <p className="text-white/70 text-sm max-w-2xl">
                      Our collaboration with Mantech Intellisys Pvt Ltd unites our strengths for reliable, scalable digital transformation that delivers greater value to businesses across industries.
                    </p>
                  </div>

                  <p className="body-lg text-white/70 mb-6">
                    This partnership represents a shared vision of delivering innovative, reliable, and scalable technology solutions that help organizations accelerate their digital transformation journey.
                  </p>
                  <p className="body-lg text-white/70 mb-6">
                    By combining our strengths, expertise, and customer-centric approach, we are well-positioned to create greater value for businesses across industries.
                  </p>
                  <p className="body-lg text-white/70">
                    Learn more at <a href="https://mantechintellisys.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">mantechintellisys.com</a>.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-30" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Our Mission</span>
              <h2 className="heading-lg text-white mb-6">
                Helping Businesses Grow Through <span className="text-gradient">Technology</span>
              </h2>
              <p className="body-lg text-white/60 max-w-3xl mx-auto">
                At SARMAK, our mission is to assist businesses in their growth by offering 
                cutting-edge IT solutions. We are committed to delivering top-notch support 
                and services, consistently surpassing our clients expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: TrendingUp, 
                  title: 'Transform', 
                  description: 'Transform your enterprise with our expertise in managed services and infrastructure support.' 
                },
                { 
                  icon: Zap, 
                  title: 'Transition', 
                  description: 'Seamless migration and transition services with minimal disruption to operations.' 
                },
                { 
                  icon: CheckCircle, 
                  title: 'Excel', 
                  description: 'Achieve operational excellence with our 24/7 support and proactive monitoring.' 
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 hover-lift group"
                >
                  <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="heading-sm text-white mb-4">{item.title}</h3>
                  <p className="body-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Our Services</span>
                <h2 className="heading-lg text-white">
                  Comprehensive <span className="text-gradient">IT Solutions</span>
                </h2>
              </div>
              <Link to="/services/managed-it" className="mt-4 md:mt-0 text-gold hover:text-white transition-colors flex items-center gap-2 group">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.path}
                  className="glass-card p-6 hover-lift group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-gold group-hover:text-[#1c1d1b] transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="body-sm mb-4">{service.description}</p>
                  <span className="text-gold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Highlight */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/ai-services.jpg" alt="AI Services" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/90 to-[#1c1d1b]/70" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Featured Service</span>
                <h2 className="heading-lg text-white mb-6">
                  AI-Powered <span className="text-gradient">IT Management</span>
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  Leverage the power of artificial intelligence to transform your IT infrastructure. 
                  Our AI solutions provide predictive analytics, automated incident response, 
                  and intelligent resource optimization.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Predictive maintenance and issue prevention',
                    'Automated incident detection and response',
                    'Intelligent resource optimization',
                    'AI-driven security threat detection',
                    'Smart capacity planning and forecasting'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/services/ai" className="btn-primary inline-flex items-center gap-2 group">
                  Explore AI Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '45%', label: 'Faster Resolution' },
                  { value: '60%', label: 'Cost Reduction' },
                  { value: '99.9%', label: 'Accuracy' },
                  { value: '24/7', label: 'Monitoring' },
                ].map((stat, index) => (
                  <div key={index} className="glass-card p-6 text-center">
                    <div className="text-3xl font-bold text-gold mb-2">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Training Section */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="/ai-training.jpg" 
                  alt="AI Training" 
                  className="rounded-lg shadow-2xl shadow-gold/10"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Education</span>
                <h2 className="heading-lg text-white mb-6">
                  AI Training for <span className="text-gradient">Universities & Colleges</span>
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  SARMAK is committed to enhancing AI skills among the young generation. 
                  We partner with universities and colleges to provide comprehensive AI 
                  training programs that prepare students for the future of technology.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: GraduationCap, title: 'Curriculum Design', desc: 'Custom AI courses' },
                    { icon: Users, title: 'Expert Trainers', desc: 'Industry professionals' },
                    { icon: Brain, title: 'Hands-on Labs', desc: 'Practical experience' },
                    { icon: CheckCircle, title: 'Certification', desc: 'Industry recognized' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
               <a href="https://learn.sarmak.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-white font-semibold transition hover:bg-emerald-600">
                  Launch Offer
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Why Choose Us</span>
              <h2 className="heading-lg text-white mb-6">
                Benefits of <span className="text-gradient">Partnering with SARMAK</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="body-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/about-bg.jpg" alt="CTA Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/80 to-[#1c1d1b]" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Ready to <span className="text-gradient">Transform</span> Your IT Infrastructure?
            </h2>
            <p className="body-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let us help you focus on your core business while we keep your operations 
              up and running with our comprehensive IT solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/service-plans" className="btn-outline">
                View Service Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
