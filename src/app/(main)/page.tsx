import HeroSection from '@/features/landing/components/HeroSection';
import CourseOfferSection from "@/features/landing/components/CourseOfferSection";
import WhyChooseUsSection from "@/features/landing/components/WhyChooseUsSection";
import FAQSection from "@/features/landing/components/FAQSection";
import ChatbotWidget from '@/features/ai-chatbot/components/ChatbotWidget';
export default function Home() {
    return (
        <div className="container">
            <HeroSection />
            <CourseOfferSection />
            <WhyChooseUsSection />
            <FAQSection />
            <ChatbotWidget />
        </div >
    );
}
