import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';

// Layout Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ChatBot from '@/components/ChatBot';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import AIServices from '@/pages/AIServices';
//import AITraining from '@/pages/AITraining';
import ManagedServices from '@/pages/ManagedServices';
import CloudServices from '@/pages/CloudServices';
import DatabaseServices from '@/pages/DatabaseServices';
import DevOpsServices from '@/pages/DevOpsServices';
import OSServices from '@/pages/OSServices';
import MiddlewareServices from '@/pages/MiddlewareServices';
//import PowerPlatform from '@/pages/PowerPlatform';
import ServicePlans from '@/pages/ServicePlans';
import WhyChooseUs from '@/pages/WhyChooseUs';
//import Industries from '@/pages/Industries';
import CaseStudies from '@/pages/CaseStudies';
//import Testimonials from '@/pages/Testimonials';
import Blog from '@/pages/Blog';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import LearningWithSarmak from '@/pages/LearningWithSarmak';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import Sitemap from '@/pages/Sitemap';
import FAQ from '@/pages/FAQ';
import Partners from '@/pages/Partners';
import Resources from '@/pages/Resources';
import News from '@/pages/News';
import InHouseTools from '@/pages/InHouseTools';
import BlogPost from '@/pages/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-[#1c1d1b] text-white">
          <Header />
          <ScrollToTop />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/ai" element={<AIServices />} />
              {/*<Route path="/services/ai-training" element={<AITraining />} /> */}
              <Route path="/services/learning-with-sarmak" element={<LearningWithSarmak />} />
              <Route path="/services/managed-it" element={<ManagedServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/database" element={<DatabaseServices />} />
              <Route path="/services/devops" element={<DevOpsServices />} />
              <Route path="/services/operating-systems" element={<OSServices />} />
              <Route path="/services/middleware" element={<MiddlewareServices />} />
              {/*<Route path="/services/power-platform" element={<PowerPlatform />} /> */}
              <Route path="/service-plans" element={<ServicePlans />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              {/*<Route path="/industries" element={<Industries />} /> */}
              <Route path="/case-studies" element={<CaseStudies />} />
              {/*<Route path="/testimonials" element={<Testimonials />} /> */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/in-house-tools" element={<InHouseTools />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
          <Toaster />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
