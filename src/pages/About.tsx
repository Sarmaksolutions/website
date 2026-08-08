import { Target, Users, Award, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { generateOrganizationSchema } from '@/components/SEO';

const About = () => {
  const leadership = [
    {
      name: 'Jithesh A. Balan',
      role: 'CEO & Founder',
      image: '/jithesh.png',
      description: 'A senior technology executive with over 23 years of experience leading enterprise IT strategy, infrastructure modernization, and digital transformation across Telecom, Banking, E-Publishing, and Construction sectors.',
      expertise: ['Enterprise IT', 'Infrastructure Modernization', 'Digital Transformation']
    },
   // {
   //   name: 'Rajkumar Gera',
   //   role: 'CTO',
   //   image: '/raj.png',
   //   description: 'Brings over three decades of transformative IT infrastructure, cloud strategy, and data center operations. As Chief Technology Officer, he oversees the organizations technology strategy, modernization, and digital transformation roadmap.',
   //   expertise: ['IT Infrastructure', 'Cloud Strategy', 'Digital Transformation']
    //},
    {
    name: 'Priyaranjan Mohapatra',
     role: 'Head of Business (Operations & AI Strategy)',
     image: '/priyam.png',
     description: 'Brings over 18 years of transformative program leadership across enterprise technology delivery, P&L governance, and large-scale operations for global Tier-1 clients across the US and APAC. As Head of Business (Operations & AI Strategy), he oversees end-to-end operational governance, Agile at scale, and the strategic adoption of AI to drive delivery modernization and business performance across the organization.',
     expertise: ['Operational Excellence', 'Leadership', 'Program Management', 'AI Strategy']
    },
        {
    name: 'Indranil Sur',
     role: 'Consultant – Technology Execution & Digital Strategy',
     image: '/indranil.jpeg',
     description: 'As an IT Program and Business Consultant with 20+ years of experience, he works to turn complex strategic goals into seamless technical solutions. From program governance, vendor alignment, and cross-functional leadership to modern tech stack optimization and go-to-market execution, he delivers lean, high-impact strategies that drive measurable business outcomes. Indranil offers a rare dual perspective: corporate precision matched with an entrepreneurial growth mindset.',
     expertise: ['Technology Excellence', 'Leadership', 'Marketing', 'Digital Strategy']
    },
   // {
    //  name: 'Sandesh Naik',
     // role: 'Advisory Board',
     // image: '/sandesh.png',
     // description: 'A veteran IT strategist with over 30 years of global experience in Oracle technologies, cloud transformation, and enterprise delivery. As Founder of SnehuSan Software Services and former Director at Oracle.',
     // expertise: ['Oracle Technologies', 'Cloud Transformation', 'Enterprise Delivery']
    // },
    {
      name: 'Suneel Wattal',
      role: 'Advisory Board',
      image: '/suneel_wattal.png',
      description: 'An engineering graduate from BITS Pilani with an MBA in Finance and MCA, has led major eGovernance initiatives for the Government of Haryana and Madhya Pradesh. With 30+ years of experience in project management.',
      expertise: ['eGovernance', 'Project Management', 'Strategic Planning']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Business Centric Expertise',
      description: 'Our strategic direction and services are designed to proactively align with your business goals.'
    },
    {
      icon: Lightbulb,
      title: 'Growth Oriented',
      description: 'Implementation and management of services in line with business growth and scalability.'
    },
    {
      icon: Users,
      title: 'Deep Collaboration',
      description: 'Our effective communication and prompt reporting foster a robust mutually beneficial partnership.'
    },
    {
      icon: Award,
      title: 'Value Delivery',
      description: 'Our management services are designed with a focus on delivering exceptional value and optimal returns.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understand client needs and assess current IT landscape.'
    },
    {
      step: '02',
      title: 'Service Design',
      description: 'Tailor managed services to align with business objectives and requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy IT solutions and support structures with minimal disruption.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Provide continuous monitoring, management, and optimization of IT services.'
    },
    {
      step: '05',
      title: 'Regular Reviews',
      description: 'Conduct performance assessments and adjust strategies for maximum efficiency.'
    }
  ];

  return (
    <>
      <SEO 
        title="About Us - IT Solutions & Services Company"
        description="Learn about SARMAK - a team of technology enthusiasts providing innovative IT solutions, managed services, and AI-powered infrastructure management across India."
        keywords="about SARMAK, IT company India, technology solutions, IT leadership team"
        schema={generateOrganizationSchema()}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">About Us</span>
            <h1 className="heading-xl text-white mb-6">
              We Are <span className="text-gradient">Technology Enthusiasts</span>
            </h1>
            <p className="body-lg text-white/70">
              SARMAK is a group of technology enthusiasts driven by a passion and commitment 
              to revolutionize customer businesses. We are reliable and assured in providing 
              technological solutions to clients across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 bg-black/30">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="/team-meeting.jpg" 
                  alt="SARMAK Team" 
                  className="rounded-lg shadow-2xl shadow-gold/10"
                />
              </div>
              
              <div>
                <h2 className="heading-lg text-white mb-6">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  At SARMAK, our objective is to assist businesses in their growth by offering 
                  cutting-edge IT solutions. We are committed to delivering top-notch support 
                  and services, consistently surpassing our clients expectations.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Transform enterprises with expert managed services',
                    'Support mission-critical applications with utmost care',
                    'Deliver end-to-end solutions from planning to execution',
                    'Ensure cost-effective and reliable IT operations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Our Expertise</span>
              <h2 className="heading-lg text-white mb-6">
                What We <span className="text-gradient">Do Best</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <h3 className="heading-sm text-white mb-4">IT Managed Services</h3>
                <p className="body-md mb-6">
                  We assist in transforming enterprises by supporting mission-critical applications 
                  and offering our expertise in managed services. SARMAK delivers end-to-end solutions 
                  and support, encompassing planning, execution, and ongoing assistance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['24/7 Support', 'Proactive Monitoring', 'IT Operations', 'Automation'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="heading-sm text-white mb-4">Infrastructure Support</h3>
                <p className="body-md mb-6">
                  Our teams ensure that customer operations are managed with utmost care, trust, 
                  and integrity, while also being cost-effective. We possess a capable and experienced 
                  team equipped to manage even the largest and most complex projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Cloud', 'Database', 'DevOps', 'Middleware'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Our Values</span>
              <h2 className="heading-lg text-white mb-6">
                Principles That <span className="text-gradient">Guide Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="glass-card p-6 hover-lift group">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="body-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Leadership</span>
              <h2 className="heading-lg text-white mb-6">
                Meet Our <span className="text-gradient">Leadership Team</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="glass-card p-8 hover-lift">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {leader.image ? (
                        <img src={leader.image} alt={`${leader.name} photo`} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-gold">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">{leader.name}</h3>
                      <span className="text-gold text-sm">{leader.role}</span>
                      <p className="body-sm mt-3">{leader.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {leader.expertise.map((exp, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">How We Work</span>
              <h2 className="heading-lg text-white mb-6">
                Our <span className="text-gradient">Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="glass-card p-6 text-center h-full">
                    <span className="text-4xl font-bold text-gold/30 block mb-4">{step.step}</span>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="body-sm">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gold/30" />
                  )}
                </div>
              ))}
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
              Ready to Work <span className="text-gradient">Together</span>?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let our experienced team help you transform your IT infrastructure and achieve your business goals.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
