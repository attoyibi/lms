import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    return (
        <section className="relative bg-white py-20 md:py-32 text-center overflow-hidden h-full">
            {/* Background grid pattern */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)' }}></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                {/* Top buttons */}
                <div className="flex justify-center space-x-4 mb-8">
                    <Link href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm">
                        Kenapa WPU Course?
                    </Link>
                    <Link href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm">
                        Lihat penawaran eksklusif kami <span className="ml-2">&rarr;</span>
                    </Link>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    <span className="text-blue-600">Belajar</span> <span className="text-green-600">Bersama Kami</span>
                    <br />
                    Jadi Talenta <span className="text-gray-800">Digital Terbaik</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Platform online course terbaik dengan dukungan mentor berpengalaman dan materi terlengkap
                </p>

                {/* Call to Action Button */}
                <Button className="bg-teal-600 text-white hover:bg-teal-700 px-8 py-3 text-lg rounded-md">
                    Belajar Sekarang
                </Button>
            </div>
        </section>
    );
}