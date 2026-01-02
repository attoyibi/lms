import React from 'react';
import { Send, Video, MessageSquare, Info } from 'lucide-react';
import Link from 'next/link';
import VideoLearningUIComponent from '@/features/courses/components/VideoLearningUIComponent';
const VideoLearningUI = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-50 text-slate-800 font-sans">
            {/* Header - Simple & Clean */}
            {/* <header className="h-14 bg-white border-b flex items-center px-6 justify-between shrink-0">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                        <Video size={20} />
                    </div>
                    <h1 className="font-bold text-lg tracking-tight">AI Learning Copilot</h1>
                </div>
                <div className="flex gap-4 text-sm font-medium text-slate-500">
                    <Link href="/courses">
                        <span className="hover:text-blue-600 cursor-pointer transition-colors">Course Materials</span>
                    </Link>

                    <span className="hover:text-blue-600 cursor-pointer transition-colors">Notes</span>
                </div>
            </header> */}
            <VideoLearningUIComponent />

        </div>
    );
};

export default VideoLearningUI;