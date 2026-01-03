import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 rounded-lg mx-auto max-w-7xl mb-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
                <div className="flex flex-col items-center text-center ">
                    {/* Placeholder for logo, replace with your actual logo path */}
                    <Image
                        src="/Muchson Logo.png" // Ganti dengan path logo Muchson Course Anda
                        alt="Muchson Course Logo"
                        width={100}
                        height={40}
                        className="mb-4 rounded-lg"
                    />
                    <p className="max-w-xs mb-4">
                        Muchson Course adalah platform pembelajaran untuk membantu kamu menjadi digital talent terbaik.
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                        {/* Placeholder for location icon */}
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                        <span>Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Placeholder for phone icon */}
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        <span>089679165530</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-center items-center text-sm">
                <p>&copy; {new Date().getFullYear()} Muchson Course. All Rights Reserved.</p>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    {/* Placeholder for social media icons */}
                    <a href="https://github.com/attoyibi" className="text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.5.092.646-.217.646-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.164-1.11-1.474-1.11-1.474-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.93 0-1.09.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.701.114 2.516.331 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.099 2.65.64.7 1.028 1.598 1.028 2.688 0 3.829-2.339 4.67-4.566 4.922.357.307.676.915.676 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.144.578.652.483C19.137 20.195 22 16.447 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-muchson-attoyibi-7024911b8/" className="text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;