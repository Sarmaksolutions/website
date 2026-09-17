import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, MessageSquare, Loader2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  action?: 'contact' | 'training' | null;
}

// ─── Full company knowledge base injected into Gemini system prompt ───────────
const SYSTEM_PROMPT = `You are the SARMAK AI Assistant — a helpful, professional, and friendly chatbot embedded on the SARMAK company website (sarmak.in). Your job is to answer visitor questions accurately using the company knowledge below. Always be concise (max 3-4 sentences per answer), warm, and professional. If a question is not covered by the knowledge below, politely say you don't have that information and suggest they reach out via the Contact page or email info@sarmak.in.

Never make up services, prices, or facts not listed here. Do not answer questions unrelated to SARMAK or general IT/technology topics.

━━━━━━━━━━━━━━━━━━━━
COMPANY OVERVIEW
━━━━━━━━━━━━━━━━━━━━
Company name: SARMAK
Website: sarmak.in
Training portal: learn.sarmak.in
Email: info@sarmak.in
Phone: +91 97640 00745
Business hours: Monday–Friday, 9:00 AM – 6:00 PM IST
Location: India
Tagline: Innovative IT Solutions & AI-Powered Services
Founded: Approx. 3+ years ago
Team size: 50+ expert engineers

SARMAK is a technology company providing managed IT, cloud, database, DevOps, OS, middleware, and AI-powered services to enterprise clients. The mission is to help businesses modernize infrastructure, reduce costs, and transform digitally.

━━━━━━━━━━━━━━━━━━━━
LEADERSHIP TEAM
━━━━━━━━━━━━━━━━━━━━
- Jithesh A. Balan — CEO & Founder. 23+ years in enterprise IT strategy, infrastructure modernization, and digital transformation across Telecom, Banking, E-Publishing, and Construction sectors.
- Priyaranjan Mohapatra — Head of Business (Operations & AI Strategy). 18+ years in program leadership, P&L governance, large-scale operations for global Tier-1 clients across US and APAC. Oversees operational governance, Agile at scale, and AI strategy.
- Suneel Wattal — Advisory Board. Engineering graduate from BITS Pilani, MBA in Finance, MCA. Led major eGovernance initiatives for Government of Haryana and Madhya Pradesh. 30+ years in project management.

━━━━━━━━━━━━━━━━━━━━
SERVICES
━━━━━━━━━━━━━━━━━━━━
1. MANAGED IT SERVICES — Proactive monitoring, end-user support, infrastructure management, secure system administration. Helps reduce operational costs by 10–20% and guarantees 99.9% uptime.

2. AI SERVICES — AI consulting, automation, predictive analytics (up to 45% downtime reduction), intelligent workflow design, AI chatbots & virtual assistants, infrastructure intelligence, smart analytics, anomaly detection, automated incident management, capacity planning. 60% faster issue resolution. AI-powered IT management and business transformation.

3. CLOUD SERVICES — Cloud strategy, migration, architecture, multi-cloud and hybrid cloud management, cloud security and optimization. Supports AWS, Azure, and GCP.

4. DATABASE SERVICES — Architecture, migration, backup & recovery, performance optimization, full lifecycle DBA administration for Oracle, SQL, NoSQL, and modern data platforms.

5. DEVOPS SERVICES — CI/CD pipelines, Kubernetes, infrastructure as code (IaC), automation, monitoring, release orchestration, faster delivery cycles.

6. OPERATING SYSTEM (OS) SERVICES — Server and endpoint management across Windows and Linux environments. Patch management, security hardening, system optimization.

7. MIDDLEWARE SERVICES — Application integration, API management, message brokers, enterprise platform connectivity.

8. POWER PLATFORM SERVICES — Microsoft Power Platform consulting and implementation.

━━━━━━━━━━━━━━━━━━━━
TRAINING (LEARNING WITH SARMAK)
━━━━━━━━━━━━━━━━━━━━
SARMAK offers free and paid learning programs through learn.sarmak.in covering:
- AI & Machine Learning
- Cloud (AWS, Azure, GCP)
- DevOps & CI/CD
- IT Operations & Database Administration
Programs target professionals, university students, and career changers. University AI Training Programs are also offered directly to institutions.

━━━━━━━━━━━━━━━━━━━━
KEY STATS & DIFFERENTIATORS
━━━━━━━━━━━━━━━━━━━━
- 3+ years of experience
- 50+ certified engineers
- 99.9% uptime guaranteed
- Up to 20% increase in operational efficiency
- 10–20% reduction in operational costs
- 45% reduction in downtime via AI
- 60% faster issue resolution
- Industries served: Banking & Finance, Telecom, Manufacturing, Education, Construction, E-Publishing, Government

━━━━━━━━━━━━━━━━━━━━
COMPANY APPROACH / PROCESS
━━━━━━━━━━━━━━━━━━━━
1. Initial Consultation — Understand client needs and assess current IT landscape.
2. Service Design — Tailor services to business objectives.
3. Implementation — Deploy solutions with minimal disruption.
4. Ongoing Support — Continuous monitoring, management, and optimization.
5. Regular Reviews — Performance assessments and strategic adjustments.

━━━━━━━━━━━━━━━━━━━━
CASE STUDIES
━━━━━━━━━━━━━━━━━━━━
- Cloud Migration for Financial Services (Banking & Finance industry)
- AI Training Program for University (Education industry)
- Database Optimization for Manufacturing (Manufacturing industry)

━━━━━━━━━━━━━━━━━━━━
CORE VALUES
━━━━━━━━━━━━━━━━━━━━
- Business-Centric Expertise: Services aligned proactively with client business goals.
- Growth-Oriented: Scalable service implementation aligned with business growth.
- Deep Collaboration: Effective communication and prompt reporting for strong partnerships.
- Value Delivery: Focus on exceptional value and optimal ROI.

━━━━━━━━━━━━━━━━━━━━
CONTACT & ROUTING GUIDANCE
━━━━━━━━━━━━━━━━━━━━
- For pricing, quotes, or project estimates → always mention they can submit details on the Contact page or email info@sarmak.in
- For training enrollment → direct to learn.sarmak.in
- For careers/jobs → direct to the Careers page on sarmak.in
- For case studies/testimonials → direct to Case Studies page
- For blog/news/insights → direct to Blog page

━━━━━━━━━━━━━━━━━━━━
RESPONSE STYLE RULES
━━━━━━━━━━━━━━━━━━━━
- Always respond in English unless user writes in another language.
- Keep answers to 2–4 sentences max unless a list is clearly more helpful.
- End with a helpful next step when appropriate (e.g., "You can also visit our Contact page...").
- Do NOT hallucinate phone numbers, emails, or services not listed above.
- If asked about pricing, say pricing depends on project scope and recommend contacting the team.
- If asked something completely off-topic (personal questions, general world knowledge), politely redirect: "I'm here to help with questions about SARMAK's services and offerings!"
`;

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent';

async function callGemini(
  history: { role: string; parts: { text: string }[] }[],
  userMessage: string
): Promise<string> {
  const payload = {
    system_instruction: {
      parts: [{ text: SYSTEM_PROMPT }],
    },
    contents: [
      ...history,
      {
        role: 'user',
        parts: [{ text: userMessage }],
      },
    ],
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 400,
    },
  };

  if (!GEMINI_API_KEY) throw new Error('VITE_GEMINI_API_KEY not set in .env');

  const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    const geminiError = data?.error?.message ?? JSON.stringify(data);
    console.error('Gemini API error:', res.status, geminiError);
    throw new Error(`Gemini ${res.status}: ${geminiError}`);
  }

  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Sorry, I could not generate a response.';
}

// Detect if bot response is suggesting contact / training
function detectAction(text: string): 'contact' | 'training' | null {
  const lower = text.toLowerCase();
  if (lower.includes('learn.sarmak.in') || lower.includes('training portal') || lower.includes('enrollment')) {
    return 'training';
  }
  if (
    lower.includes('contact page') ||
    lower.includes('info@sarmak.in') ||
    lower.includes('reach out') ||
    lower.includes('get in touch') ||
    lower.includes('submit') ||
    lower.includes('our team will')
  ) {
    return 'contact';
  }
  return null;
}

const ChatBot = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [tooltip, setTooltip] = useState(true);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: "Hi! I'm SARMAK's AI Assistant. Ask me anything about our services, training programs, team, or how we can help your business.",
      action: null,
    },
  ]);

  // Gemini conversation history (excludes the initial greeting)
  const geminiHistory = useRef<{ role: string; parts: { text: string }[] }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const visiblePagePrefixes = [
    '/',
    '/about',
    '/services',
    '/service-plans',
    '/why-choose-us',
    '/case-studies',
    '/blog',
    '/careers',
    '/faq',
    '/partners',
    '/resources',
    '/news',
  ];

  const showChat = visiblePagePrefixes.some(
    (prefix) => location.pathname === prefix || location.pathname.startsWith(`${prefix}/`)
  );

  if (!showChat) return null;

  const sendMessage = async (message: string) => {
    const userMsg: ChatMessage = { sender: 'user', text: message };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const replyText = await callGemini(geminiHistory.current, message);
      const action = detectAction(replyText);

      // Update Gemini history for context
      geminiHistory.current = [
        ...geminiHistory.current,
        { role: 'user', parts: [{ text: message }] },
        { role: 'model', parts: [{ text: replyText }] },
      ];

      const botMsg: ChatMessage = { sender: 'bot', text: replyText, action };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        sender: 'bot',
        text: `Error: ${err instanceof Error ? err.message : String(err)}`,
        action: 'contact',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    sendMessage(input.trim());
    setInput('');
  };

  const handleContactRedirect = () => {
    setOpen(false);
    navigate('/contact');
  };

  const handleTrainingRedirect = () => {
    setOpen(false);
    window.open('https://learn.sarmak.in', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open ? (
        <div className="w-[340px] max-w-[90vw] rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-3xl bg-slate-900/95 px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">SARMAK AI Assistant</p>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  AI-powered
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex h-[400px] flex-col overflow-hidden">
            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm text-slate-100">
              {messages.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] break-words rounded-3xl px-4 py-3 shadow-sm ${
                      message.sender === 'bot'
                        ? 'bg-slate-800 text-slate-100'
                        : 'bg-gold/10 text-white'
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
                    {message.action === 'contact' && (
                      <button
                        type="button"
                        onClick={handleContactRedirect}
                        className="mt-3 inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-2 text-xs font-medium text-gold transition hover:bg-gold/20"
                      >
                        Go to Contact page →
                      </button>
                    )}
                    {message.action === 'training' && (
                      <button
                        type="button"
                        onClick={handleTrainingRedirect}
                        className="mt-3 inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-2 text-xs font-medium text-gold transition hover:bg-gold/20"
                      >
                        Visit learn.sarmak.in →
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-3xl bg-slate-800 px-4 py-3 shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin text-gold" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-white/10 bg-slate-950/95 px-4 py-3">
              <div className="flex gap-2">
                <label htmlFor="chat-input" className="sr-only">
                  Type your message
                </label>
                <input
                  id="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about services, training..."
                  disabled={loading}
                  className="min-h-[44px] flex-1 rounded-2xl border border-white/10 bg-slate-900/90 px-4 text-sm text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-slate-950 transition hover:bg-gold/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-end gap-3">
          {tooltip && (
            <div className="relative flex items-center gap-2 rounded-2xl bg-slate-900 border border-white/10 px-4 py-3 shadow-xl max-w-[220px] animate-fade-in">
              {/* Tail pointing down-right */}
              <span className="absolute -bottom-2 right-5 h-3 w-3 rotate-45 bg-slate-900 border-r border-b border-white/10" />
              <p className="text-sm text-white leading-snug">
                👋 Hi! Ask me anything about <span className="text-gold font-semibold">SARMAK</span>
              </p>
              <button
                type="button"
                onClick={() => setTooltip(false)}
                className="ml-1 shrink-0 rounded-full p-0.5 text-slate-400 hover:text-white transition"
                aria-label="Dismiss"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={() => { setOpen(true); setTooltip(false); }}
            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-slate-950 shadow-2xl shadow-black/20 transition hover:-translate-y-1"
            aria-label="Open chat bot"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
