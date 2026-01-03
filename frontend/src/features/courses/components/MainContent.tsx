import React from 'react'
import Link from 'next/link'

export default function MainContent({ subscriptions, featuredCourses }: { subscriptions: any[], featuredCourses: any[] }) {
    return (
        <div>
            {/* Main Content */}
            <div className="flex">
                {/* Sidebar */}
                <aside className="hidden lg:block w-64 border-r p-4 max-h-[calc(100vh-60px)] overflow-y-auto">
                    <nav className="space-y-3">
                        <div className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                            Beranda
                        </div>
                        <hr className="my-4" />
                        <h3 className="text-sm font-bold text-gray-600 px-4 py-2">Subscription</h3>
                        {subscriptions.map((sub) => (
                            <div
                                key={sub.id}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg flex items-center gap-2"
                            >
                                <div className="w-8 h-8 rounded-full bg-gray-300" />
                                <span className="text-sm">{sub.name}</span>
                            </div>
                        ))}

                        <button className="text-blue-600 text-sm font-semibold mt-4 px-4 py-2 hover:bg-gray-100 rounded-lg w-full text-left">
                            Tampilkan lebih banyak
                        </button>
                    </nav>
                </aside>

                {/* Content Area */}
                <main className="flex-1 p-4 md:p-6 max-w-7xl mx-auto w-full">
                    {/* Featured Courses Grid */}
                    {/* Browse Section */}
                    <div className='mb-2'>
                        <h2 className="text-2xl font-bold mb-4">Telusuri Kursus</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                'Pemrograman',
                                'Desain',
                                'Bisnis',
                                'Musik',
                                'Fotografi',
                                'Olahraga',
                                'Pendidikan',
                                'Teknologi',
                            ].map((category) => (
                                <button
                                    key={category}
                                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-center transition"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {featuredCourses.map((course) => (
                            <Link key={course.id} href="/courses/[id]" as={`/courses/${course.id}`}>
                                <div
                                    key={course.id}
                                    className="cursor-pointer group rounded-lg overflow-hidden"
                                >
                                    <div className={`${course.image} h-40 md:h-48 relative flex items-center justify-center`}>
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                                        <div className="absolute bottom-3 right-3 text-white text-sm font-semibold">
                                            Tonton
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <h3 className="font-bold text-sm line-clamp-2 group-hover:text-blue-600">
                                            {course.title}
                                        </h3>
                                        {course.subtitle && (
                                            <p className="text-xs text-gray-600 mt-1">{course.subtitle}</p>
                                        )}
                                        <p className="text-xs text-gray-600 mt-2">{course.instructor}</p>
                                        <p className="text-xs text-gray-500">
                                            {course.views} ditonton • {course.uploadedAgo}
                                        </p>
                                        <button className="mt-3 w-full py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition hover:cursor-pointer">
                                            Learn Now
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>


                </main>
            </div>
        </div>
    )
}
