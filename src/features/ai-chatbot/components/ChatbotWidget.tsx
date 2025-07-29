"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Send, MessageSquare } from 'lucide-react';

export default function ChatbotWidget() {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="rounded-full w-14 h-14 shadow-lg bg-teal-600 hover:bg-teal-700">
                        <MessageSquare className="w-6 h-6 text-white" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[350px] sm:w-[400px] flex flex-col">
                    <SheetHeader>
                        <SheetTitle>Muchson Course Chatbot</SheetTitle>
                    </SheetHeader>
                    <div className="flex-1 overflow-y-auto p-4 space-y-2 border rounded-md bg-gray-50">
                        {messages.length === 0 ? (
                            <p className="text-center text-gray-500">Start chatting!</p>
                        ) : (
                            messages.map((msg, index) => (
                                <div key={index} className="bg-blue-100 p-2 rounded-lg self-end text-right">
                                    {msg}
                                </div>
                            ))
                        )}
                    </div>
                    <div className="flex mt-4">
                        <Input
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendMessage();
                                }
                            }}
                            className="flex-1 mr-2"
                        />
                        <Button onClick={handleSendMessage} className="bg-teal-600 hover:bg-teal-700">
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}