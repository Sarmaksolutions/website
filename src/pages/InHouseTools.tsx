import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp } from 'lucide-react';
import SEO, { generateOrganizationSchema } from '@/components/SEO';

const tools = [
  {
    title: 'Cloud Cost Optimizer',
    description: 'A built-in engine that ingests multi-cloud billing and resource telemetry to deliver savings, budget governance, and spend accountability.',
    bullets: ['Real-time cost visibility', 'Idle compute and storage detection', 'Reserved pricing & rightsizing recommendations', 'Forecasting and budget guardrails'],
  },
  {
    title: 'Oracle Performance Review',
    description: 'A productized review process that blends SQL diagnostics, index health, and execution analytics to improve Oracle reliability and throughput.',
    bullets: ['SQL plan and query tuning', 'Index health and fragmentation analysis', 'Wait event and session diagnostics', 'Proactive schema and backup readiness checks'],
  },
  {
    title: 'Infrastructure Efficiency',
    description: 'A monitoring and optimization toolkit for hybrid infrastructure, helping you align capacity, utilization, and cost through smarter operations.',
    bullets: ['Utilization benchmarking across environments', 'Capacity planning for compute and storage', 'Workload placement and lifecycle efficiency', 'Sustainability and cost-performance tradeoffs'],
  },
];

const InHouseTools = () => {
  return (
    <>
      <SEO
        title="SARMAK In-House Tools for Cloud, Oracle, and Infrastructure"
        description="Explore SARMAK's in-house tools for cloud cost optimization, Oracle performance review, and infrastructure efficiency, backed by expert delivery and a demo option."
        keywords="cloud cost optimizer, oracle performance review, infrastructure efficiency, in-house tools, IT operations"
        schema={generateOrganizationSchema()}
      />

      <section className="relative py-24 bg-[#090b12]">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">In-House Tools</span>
            <h1 className="heading-xl text-white mb-6">Proprietary tools that make IT operations smarter, faster, and more efficient.</h1>
            <p className="body-lg text-white/70 max-w-3xl mx-auto">
              SARMAK builds productized intelligence for IT operations. These in-house tools combine telemetry, analytics, and best-practice automation to reduce cloud waste, harden Oracle performance, and improve infrastructure efficiency for enterprise environments.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mb-16">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-3">Product-first Scale</h3>
              <p className="text-white/70 text-sm">Designed as reusable products, these tools can be deployed rapidly and adapted to enterprise IT operations at scale.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-3">Actionable Intelligence</h3>
              <p className="text-white/70 text-sm">Each tool turns raw telemetry into prioritized actions for cost savings, performance improvement, and operational stability.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-3">Consultative Delivery</h3>
              <p className="text-white/70 text-sm">SARMAK pairs product capabilities with expert delivery so your team gets both technology and practical outcomes.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/" className="btn-outline flex items-center gap-2">
              Back to Home
              <ArrowRight className="w-4 h-4 rotate-180" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tools.map((tool) => {
              const id = tool.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <article key={tool.title} id={id} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/20">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-2">{tool.title}</h2>
                      <p className="text-sm text-white/70 leading-relaxed">{tool.description}</p>
                    </div>
                    <div className="text-gold p-3 rounded-2xl bg-gold/10">
                      <Shield className="w-6 h-6" />
                    </div>
                  </div>
                <ul className="space-y-3 mb-6">
                  {tool.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-white/70">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-gold font-medium">
                  <TrendingUp className="w-4 h-4" />
                  <span>Industry-ready insights</span>
                </div>
              </article>
            )})}
          </div>

          <div className="mt-20 rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#111214] to-[#111214]/80 p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold text-white">Ready to explore your in-house optimization path?</h2>
                <p className="text-white/70 max-w-2xl mt-3">
                  Book a personalized demo and see how SARMAK’s tools can reduce cloud spend, improve Oracle database performance, and make your infrastructure more efficient.
                </p>
              </div>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InHouseTools;
