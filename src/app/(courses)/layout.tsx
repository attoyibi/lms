'use client';
import React from 'react'
import { featuredCourses, subscriptions } from '@/lib/placeholder-data';

import { Search, Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Menu className="w-5 h-5" />
                        </Button>
                        <Link href="/courses" className="flex items-center">
                            <div className="text-2xl font-bold text-red-600">LMS</div>
                        </Link>
                    </div>

                    <div className="hidden md:flex flex-1 max-w-2xl mx-4">

                        <div className="flex w-full">
                            <Input
                                placeholder="Telusuri"
                                className="rounded-l-full border-r-0"
                            />
                            <Button className="rounded-r-full rounded-l-none">
                                <Search className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Search className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <User className="w-5 h-5 rounded-full bg-blue-600 text-white" />
                        </Button>
                    </div>
                </div>
            </header>
            {children}
            {/* Custom Scrollbar Hide */}
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    )
}
