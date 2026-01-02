import React, { useState, useEffect } from 'react'; // Import useState dan useEffect
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import NavigationMenu from './NavigationMenu';
// import { * asSheetPrimitive } from '@radix-ui/react-dialog';

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
                <div className="hidden md:flex items-center space-x-8 ">
                    <NavigationMenu />
                </div>
                <div className='md:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="w-6 h-6" />
                                {/* <Menu className="w-6 h-6" /> */}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px]">
                            <SheetTitle>Menu</SheetTitle>
                            <div className="space-y-4 mt-4 p-4 flex flex-col">
                                <NavigationMenu />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}