import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'; // Pastikan path ini sesuai dengan instalasi shadcn-ui Anda

const faqs = [
    {
        question: 'Apakah pembelajaran dilakukan secara online?',
        answer: 'Ya, semua pembelajaran di Muchson Course dilakukan secara online, memungkinkan Anda belajar dari mana saja dan kapan saja.',
    },
    {
        question: 'Apakah ada jadwal belajar yang tetap?',
        answer: 'Tidak ada jadwal tetap. Anda bisa belajar sesuai kecepatan dan waktu luang Anda sendiri. Materi tersedia 24/7.',
    },
    {
        question: 'Bagaimana proses pembelajarannya?',
        answer: 'Proses pembelajaran meliputi video tutorial, latihan coding, kuis, dan proyek. Anda juga akan mendapatkan akses ke komunitas untuk berdiskusi.',
    },
    {
        question: 'Apakah ada sesi tatap muka online dengan mentor?',
        answer: 'Tentu, kami menyediakan sesi tatap muka online (webinar) secara berkala dengan mentor untuk sesi tanya jawab dan diskusi mendalam.',
    },
    {
        question: 'Apakah materi pembelajaran dapat diunduh?',
        answer: 'Beberapa materi seperti slide presentasi dan kode sumber dapat diunduh, namun video pembelajaran hanya dapat diakses secara streaming.',
    },
    {
        question: 'Apakah ada batasan waktu akses untuk program ini?',
        answer: 'Tidak ada batasan waktu. Sekali Anda membeli course, Anda akan mendapatkan akses selamanya ke semua materi dan update di masa mendatang.',
    },
    {
        question: 'Bagaimana jika saya mengalami kesulitan selama proses pembelajaran?',
        answer: 'Anda bisa bertanya di grup komunitas atau melalui forum diskusi. Mentor dan tim support kami siap membantu Anda.',
    },
    {
        question: 'Apakah ada grup khusus untuk berinteraksi dengan sesama member?',
        answer: 'Ya, kami memiliki grup komunitas eksklusif di Discord/Telegram (sesuaikan) di mana Anda bisa berinteraksi, berdiskusi, dan berkolaborasi dengan sesama member.',
    },
];

const FAQSection = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-teal-600 text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;