import { Info, MessageSquare, Send } from 'lucide-react'
import React from 'react'

export default function VideoLearningUIComponent() {
    return (
        <div><main className="flex flex-1 overflow-hidden p-4 gap-4">
            {/* Sisi Kiri: Video Player Placeholder */}
            <section className="flex-[2] flex flex-col gap-4">
                <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl group">
                    {/* Simulasi Video Player */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                    {/* Control Bar Mockup */}
                    <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="h-1 w-full bg-gray-600 rounded-full mb-4">
                            <div className="h-1 w-1/3 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-white text-xs">
                            <span>12:45 / 45:00</span>
                            <span>1080p HD</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h2 className="text-xl font-bold mb-2">Introduction to Quantum Computing</h2>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        In this module, we explore the fundamental principles of quantum mechanics applied to computing.
                        Feel free to ask the AI assistant if you find any concepts confusing at specific timestamps.
                    </p>
                </div>
            </section>

            {/* Sisi Kanan: AI Chat Sidebar */}
            <aside className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col overflow-hidden">
                {/* Chat Header */}
                <div className="p-4 border-b bg-slate-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <MessageSquare size={18} className="text-blue-600" />
                        <span className="font-semibold">AI Tutor</span>
                    </div>
                    <Info size={16} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                </div>

                {/* Chat Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* Bot Message */}
                    <div className="flex flex-col gap-1 max-w-[85%]">
                        <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-sm leading-relaxed">
                            Halo! Saya asisten belajarmu. Ada bagian dari video ini yang ingin kamu tanyakan?
                        </div>
                        <span className="text-[10px] text-slate-400 ml-1">09:41 AM</span>
                    </div>

                    {/* User Message */}
                    <div className="flex flex-col gap-1 items-end ml-auto max-w-[85%]">
                        <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-sm leading-relaxed shadow-md shadow-blue-100">
                            Apa maksud dari "Superposition" yang dijelaskan di menit 12:40 tadi?
                        </div>
                        <span className="text-[10px] text-slate-400 mr-1">09:42 AM</span>
                    </div>

                    {/* Bot Message Thinking/Loading Mockup */}
                    <div className="flex gap-1 items-center text-slate-400">
                        <div className="flex gap-1 animate-pulse">
                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-slate-100 bg-white">
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Ask something about the video..."
                            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                            <Send size={16} />
                        </button>
                    </div>
                    <p className="text-[10px] text-center text-slate-400 mt-3 italic">
                        AI can make mistakes. Check important information.
                    </p>
                </div>
            </aside>
        </main></div>
    )
}
