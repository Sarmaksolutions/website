import { ArrowRight, Building2, Award, Globe, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import mantechLogo from '@/assets/mantech_logo.png';

const Partners = () => {
  const partnerTypes = [
    {
      icon: Building2,
      title: 'Technology Partners',
      description: 'Partner with us to deliver comprehensive IT solutions to your clients.',
      benefits: [
        'Access to our expert team',
        'Revenue sharing opportunities',
        'Joint solution development',
        'Co-marketing support'
      ]
    },
    {
      icon: Award,
      title: 'Channel Partners',
      description: 'Resell SARMAK services and expand your portfolio.',
      benefits: [
        'Competitive margins',
        'Sales enablement',
        'Technical training',
        'Dedicated support'
      ]
    },
    {
      icon: Globe,
      title: 'Strategic Alliances',
      description: 'Long-term partnerships for mutual growth and market expansion.',
      benefits: [
        'Market expansion',
        'Shared resources',
        'Innovation collaboration',
        'Strategic planning'
      ]
    }
  ];

  const technologies = [
    'Oracle', 'Microsoft', 'AWS', 'Google Cloud', 'IBM', 'Red Hat',
    'VMware', 'Cisco', 'Dell', 'HP', 'SAP', 'Salesforce'
  ];

  const partners = [
    {
      title: 'Syncwell Infotech',
      description: 'A leading HR consulting firm driving workforce transformation. This collaboration brings together our expertise in technology solutions with Syncwell deep capabilities in human capital consulting — creating a unique synergy that helps organizations not only build the right systems but also build the right teams to run them.',
      link: 'https://syncwell.co.in',
      logo: '/syncwell_logo.png',
      alt: 'Syncwell Infotech Logo'
    },
    {
      title: 'Mantech Intellisys Pvt Ltd',
      description: 'A strategic technology partner focused on delivering reliable and scalable digital transformation solutions. This partnership represents a shared vision of delivering innovative, reliable, and scalable technology solutions that help organizations accelerate their digital transformation journey.',
      link: 'https://mantechintellisys.com',
      logo: mantechLogo,
      alt: 'Mantech Intellisys Logo'
    },
  //  {
    //  title: 'Technology Solutions',
    //  description: 'Joining forces with technology providers to deliver cloud, data and enterprise application innovation.'
   // },
   // {
    //  title: 'Strategic Alliances',
     // description: 'Building long-term strategic partnerships that drive growth, co-delivery and market expansion.'
   // }
  ];

  return (
    <>
      <SEO 
        title="Partners - Technology & Channel Partnerships"
        description="Partner with SARMAK for technology solutions, channel sales, and strategic alliances. Join our partner ecosystem and grow together."
        keywords="SARMAK partners, technology partnerships, channel partners, IT partnership India"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Partners</span>
            <h1 className="heading-xl text-white mb-6">
              Partner With <span className="text-gradient">SARMAK</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Join our partner ecosystem and grow together. We believe in building strong 
              relationships that create value for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Programs</span>
              <h2 className="heading-lg text-white mb-6">
                Partnership <span className="text-gradient">Opportunities</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="glass-card p-8 hover-lift">
                  <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                    <type.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="body-md mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Technologies</span>
              <h2 className="heading-lg text-white mb-6">
                Our <span className="text-gradient">Technology</span> Ecosystem
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="px-6 py-3 glass-card hover:bg-gold/10 transition-colors">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="relative py-24 bg-black/20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Our Partners</span>
              <h2 className="heading-lg text-white mb-6">
                Sharing Success With <span className="text-gradient">Trusted Partners</span>
              </h2>
              
              <p className="body-lg text-white/70 max-w-3xl mx-auto">
                We work closely with HR consulting firms, technology solution providers, and strategic alliance partners to deliver impactful outcomes for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="glass-card p-8 hover-lift">
                  {partner.logo ? (
                    <div className="flex items-center justify-center gap-6 mb-6">
                      <img 
                        src="/logo.png" 
                        alt="SARMAK Logo" 
                        className="h-12 w-auto rounded-lg bg-white/10 p-2"
                      />
                      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gold/20">
                        <Handshake className="w-10 h-10 text-gold" />
                      </div>
                      <a 
                        href={partner.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <img 
                          src={partner.logo} 
                          alt={partner.alt} 
                          className="h-12 w-auto rounded-lg bg-white/10 p-2 cursor-pointer"
                        />
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 mb-6">
                      <Handshake className="w-7 h-7 text-gold" />
                    </div>
                  )}
                  <a 
                    href={partner.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-white mb-3 hover:text-gold transition-colors inline-block"
                  >
                    <h3>{partner.title}</h3>
                  </a>
                  <p className="text-white/70 leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Why Partner</span>
                <h2 className="heading-lg text-white mb-6">
                  Grow <span className="text-gradient">Together</span>
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  Partnering with SARMAK means access to a team of experienced professionals, 
                  proven methodologies, and a commitment to mutual success.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Expand your service portfolio',
                    'Access to specialized expertise',
                    'Shared revenue opportunities',
                    'Joint marketing and sales support',
                    'Technical training and enablement',
                    'Dedicated partner management'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img src="/team-meeting.jpg" alt="Partnership" className="rounded-lg shadow-2xl shadow-gold/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/about-bg.jpg" alt="CTA Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/80 to-[#1c1d1b]" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Ready to <span className="text-gradient">Partner</span>?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Contact us to discuss partnership opportunities and how we can work together.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Become a Partner
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
