import React, { useState, useEffect } from 'react'; // Import useState dan useEffect
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false); // State untuk melacak apakah sudah discroll

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Array kosong berarti efek ini hanya berjalan sekali setelah mount

    return (
        <nav className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-4' : 'py-6'}`}>
            <div className={`max-w-7xl mx-auto flex items-center px-4 justify-between`}>
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/file.svg" // Ganti dengan path logo WPU yang benar jika ada
                            alt="Muchson Course"
                            width={20}
                            height={20}
                            priority
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium">
                        Beranda
                    </Link>
                    <Link href="/tentang-kami" className="text-gray-600 hover:text-gray-800">
                        Tentang Kami
                    </Link>
                    {/* Program Dropdown - Placeholder */}
                    <div className="relative group">
                        <button className="text-gray-600 hover:text-gray-800 flex items-center">
                            Program
                            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {/* Dropdown content here */}
                    </div>
                    {/* Komunitas Dropdown - Placeholder */}
                    <div className="relative group">
                        <button className="text-gray-600 hover:text-gray-800 flex items-center">
                            Komunitas
                            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {/* Dropdown content here */}
                    </div>
                    <Link href="/kontak" className="text-gray-600 hover:text-gray-800">
                        Kontak
                    </Link>
                </div>

                {/* Buttons Section */}
                <div className="flex items-center space-x-4">
                    <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50 hover:text-teal-600">
                        Daftar
                    </Button>
                    <Button className="bg-teal-600 text-white hover:bg-teal-700">
                        Masuk
                    </Button>
                </div>

            </div>

        </nav>
    );
}