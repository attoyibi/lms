import React from 'react';
import Image from 'next/image';

const WhyChooseUsSection = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Kenapa Harus Belajar Di Muchson Course?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Temukan pengalaman belajar terbaik dengan mentor berpengalaman dan course yang dirancang khusus untukmu sesuai standar industri
                    </p>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                {/* Placeholder for icon, replace with actual icon component if available */}
                                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Mentor Terbaik</h3>
                                <p className="text-gray-600">Belajar langsung bersama Pak Sandhika, Kang Avip, Kang Agung dan mentor lainnya.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                {/* Placeholder for icon, replace with actual icon component if available */}
                                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Akses Selamanya</h3>
                                <p className="text-gray-600">Sekali beli course, kamu bisa akses selamanya tanpa batas waktu.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                {/* Placeholder for icon, replace with actual icon component if available */}
                                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Connect Komunitas IT Terbesar</h3>
                                <p className="text-gray-600">Muchson memiliki komunitas IT terbesar dengan jumlah lebih dari 50.000 member.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    {/* Replace with your actual image path */}
                    <Image
                        src="/programming8.jpg" // Ganti dengan path gambar yang sesuai
                        alt="Why Choose Us"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;