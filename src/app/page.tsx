import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeroSection from '@/features/landing/components/HeroSection';
export default function Home() {
  return (
    <div>
      <HeroSection />
      <div
        className="flex flex-col items-center justify-center align-center h-screen">
        <Button
        >Button 1</Button>
      </div>
    </div>
  );
}
