"use client"
import React from 'react'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'


export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='max-w-7xl mx-auto border-2'>
            <Navbar />

            {children}
            <Footer />
        </div>
    )
}
