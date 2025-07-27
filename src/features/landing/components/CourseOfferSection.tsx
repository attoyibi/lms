'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

// Fungsi bantu untuk hitung waktu tersisa
function getRemainingTime(targetDate: Date) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { days, hours, minutes, seconds };
}

export default function CourseOfferSection() {
    const targetDate = new Date('2025-08-01T00:00:00'); // ganti tanggal sesuai batas promo
    const [time, setTime] = useState(getRemainingTime(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getRemainingTime(targetDate));
        }, 1000);

        return () => clearInterval(timer); // bersihkan timer saat komponen di-unmount
    }, [targetDate]);

    return (
        <section className="py-16 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Section: Course Card */}
                <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <Image
                            src="/profile linked in.jpeg" // Ganti dengan thumbnail kamu
                            alt="Full Stack Next JS: Realtime Point Of Sale Apps"
                            width={400}
                            height={250}
                            layout="responsive"
                            className="rounded-t-lg"
                        />
                        <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            90% Off
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            Pelatihan Front end Atau AI Secara Private
                        </h2>
                        <p className="text-gray-600 text-sm line-through">Rp1.000.000</p>
                        <p className="text-teal-600 text-2xl font-bold">Rp 100.000</p>
                    </div>
                </div>

                {/* Right Section: Special Offer Details */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    {/* Timer */}
                    <div className="flex justify-start space-x-6 mb-8 max-w-5xl gap-2">
                        <TimeBox label="Hari" value={time.days} />
                        <TimeBox label="Jam" value={time.hours} />
                        <TimeBox label="Menit" value={time.minutes} />
                        <TimeBox label="Detik" value={time.seconds} />
                    </div>

                    <h3 className="text-4xl font-bold text-teal-600 mb-6">
                        Nikmati Penawaran Spesial
                    </h3>
                    <p className="text-gray-700 text-lg mb-8">
                        Muchson Course menawarkan diskon eksklusif kepada student yang ingin belajar di platform kami. Detail course dan materi yang akan dipelajari sudah bisa kamu akses pada halaman course.
                    </p>
                    <Button
                        className="bg-teal-600 text-white hover:bg-teal-700 px-8 py-3 text-lg rounded-md cursor-pointer"
                        onClick={() => window.open('https://lynk.id/muchsonproject', '_blank')}
                    >
                        Lihat Detail
                    </Button>
                </div>
            </div>
        </section>
    );
}

function TimeBox({ label, value }: { label: string; value: number }) {
    return (
        <div className="text-center">
            <p className="text-4xl font-bold text-gray-800">{value.toString().padStart(2, '0')}</p>
            <p className="text-gray-600">{label}</p>
        </div>
    );
}
