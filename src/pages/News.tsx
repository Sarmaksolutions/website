import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'SARMAK Launches AI-Powered IT Management Solutions',
      date: '2024-12-15',
      excerpt: 'Revolutionary AI-driven platform enhances IT operations and reduces downtime by 40%.',
      category: 'Product Launch',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Partnership with Syncwell for Cloud Transformation Services',
      date: '2026-04-16',
      excerpt: 'Strategic alliance brings cutting-edge Azure solutions to enterprise clients.',
      category: 'Partnership',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'SARMAK announces strategic partnership with Mantech Intellisys Pvt Ltd',
      date: '2026-07-06',
      excerpt: 'SARMAK and Mantech Intellisys join forces to deliver reliable, scalable digital transformation solutions.',
      category: 'Partnership',
      readTime: '3 min read'
    },
    {
      id: 4,
      title: 'SARMAK launches EdTech Program',
      date: '2026-05-25',
      excerpt: 'Industry-leading security standards ensure maximum protection for client data.',
      category: 'Certification',
      readTime: '2 min read'
    },
  /*  {
      id: 4,
      title: 'New DevOps Center of Excellence Established',
      date: '2024-10-22',
      excerpt: 'State-of-the-art facility dedicated to continuous integration and deployment excellence.',
      category: 'Infrastructure',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'SARMAK Expands Global Presence with New Office in Singapore',
      date: '2024-09-15',
      excerpt: 'Strategic expansion strengthens our position in the Asia-Pacific region.',
      category: 'Expansion',
      readTime: '3 min read'
    },
    {
      id: 6,
      title: 'Revolutionary Database Migration Services Now Available',
      date: '2024-08-30',
      excerpt: 'Seamless migration solutions for Oracle, SQL Server, and cloud databases.',
      category: 'Services',
      readTime: '4 min read'
    } */
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Product Launch': 'bg-blue-500/20 text-blue-400',
      'Partnership': 'bg-green-500/20 text-green-400',
      'Certification': 'bg-purple-500/20 text-purple-400',
      'Infrastructure': 'bg-orange-500/20 text-orange-400',
      'Expansion': 'bg-pink-500/20 text-pink-400',
      'Services': 'bg-cyan-500/20 text-cyan-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <>
      <SEO
        title="News & Updates | SARMAK"
        description="Stay updated with the latest news, announcements, and industry insights from SARMAK. Discover our latest achievements, partnerships, and technological advancements."
        keywords="SARMAK news, IT industry updates, technology announcements, company news, SARMAK updates"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Company News</span>
            <h1 className="heading-xl text-white mb-6">
              Latest <span className="text-gradient">News & Updates</span>
            </h1>
            <p className="body-lg text-white/70">
              Stay informed about our latest achievements, industry partnerships,
              technological advancements, and company milestones.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="relative py-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(item.date)}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">{item.readTime}</span>
                    <Link
                      to={`/news/${item.id}`}
                      className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors text-sm font-medium group-hover:gap-3"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-20 bg-black/30">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Stay <span className="text-gradient">Updated</span>
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;