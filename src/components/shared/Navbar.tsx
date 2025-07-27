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
                            className='rounded-full'
                            src="/Muchson Logo.png" // Ganti dengan path logo Muchson yang benar jika ada
                            alt="Muchson Course"
                            width={80}
                            height={80}
                            priority
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium">
                        Beranda
                    </Link>
                    <Link href="https://lynk.id/muchsonproject" className="text-gray-600 hover:text-gray-800">
                        Request Support
                    </Link>
                    {/* Program Dropdown - Placeholder */}
                    <div className="relative group">
                        <button className="text-gray-600 hover:text-gray-800 flex items-center cursor-pointer transition-all duration-300">
                            Content
                            <svg
                                className={`ml-1 h-4 w-4 transform transition-transform group-hover:rotate-180`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div className="absolute hidden group-hover:block w-48 bg-white border rounded-lg shadow-lg pt-2">
                            <Link href="https://youtu.be/tG9JXMa3ovI" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                                RESTful API CRUD MockApi.io
                            </Link>
                            {/* <Link href="" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                                Mobile Development
                            </Link> */}
                            <Link href="https://youtu.be/eSHOqb5aCnI" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                                Automation AI Development
                            </Link>
                        </div>
                    </div>
                    {/* Komunitas Dropdown - Placeholder */}
                    <div className="relative group">
                        <button className="cursor-pointer text-gray-600 hover:text-gray-800 flex items-center">
                            Komunitas
                            <svg className="ml-1 h-4 w-4 transform transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {/* Dropdown content here */}
                        <div className="absolute hidden group-hover:block w-48 bg-white border rounded-lg shadow-lg pt-2">
                            <Link href="https://www.youtube.com/@muhammadmuchson6543" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                                Youtube
                            </Link>
                            <Link href="https://www.tiktok.com/@mmuchson" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                                Tiktok
                            </Link>
                            <Link href="https://chat.whatsapp.com/FnKOeKrkNRw69FeAkbtqc1" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                                Whatsapp
                            </Link>
                        </div>
                    </div>
                    {/* <Link href="/kontak" className="text-gray-600 hover:text-gray-800">
                        Kontak
                    </Link> */}
                </div>

                {/* Buttons Section */}
                <div className="flex items-center space-x-4">
                    <Button variant="outline" className="cursor-pointer border-teal-500 text-teal-500 hover:bg-teal-50 hover:text-teal-600">
                        Daftar
                    </Button>
                    <Button className="cursor-pointer bg-teal-600 text-white hover:bg-teal-700">
                        Masuk
                    </Button>
                </div>

            </div>

        </nav>
    );
}