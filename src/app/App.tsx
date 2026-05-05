import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { HighlightSection } from './components/HighlightSection';
import { ProductSection } from './components/ProductSection';
import { VisionSection } from './components/VisionSection';
import { MissionSection } from './components/MissionSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { JourneySection } from './components/JourneySection';
import { InvestorsSection } from './components/InvestorsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFB] dark:bg-[#0A0F1C] font-['Inter'] overflow-x-hidden transition-colors duration-300">
      <style>
        {`
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            scroll-behavior: smooth;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            letter-spacing: -0.02em;
          }

          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: #F8FAFB;
          }
          
          .dark ::-webkit-scrollbar-track {
            background: #0A0F1C;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #00C853, #00E5FF);
            border-radius: 10px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #00E5FF, #00C853);
          }

          /* Selection Color */
          ::selection {
            background: #00C853;
            color: white;
          }
          
          .dark ::selection {
            background: #00E5FF;
            color: #0A0F1C;
          }
        `}
      </style>

      <Navigation />
      <HeroSection />
      <HighlightSection />
      <ProductSection />
      <VisionSection />
      <MissionSection />
      <WhyChooseSection />
      <JourneySection />
      <InvestorsSection />
      <FAQSection />
      <Footer />
    </div>
    </ThemeProvider>
  );
}