import React from 'react'
import Link from 'next/link'
// export default function Login() {
//     return (
//         <div className=''>login</div>
//     )
// }


export default function Login() {
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">

                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">

                    <div className="logo-container item-center justify-center flex mb-6">
                        <a href="./">
                            <img width="100" height="100" src="/Muchson Logo.png" alt="Logo" className="logo rounded-full" />

                        </a>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">LMS</h1>
                        <p className="text-gray-600">Sign in to your account</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition duration-200"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.26C22.56 11.4 22.48 10.66 22.32 9.92H12.18V14.08H17.84C17.68 15.16 16.92 16.84 15.36 17.76L15.34 17.92L19.02 20.94L19.26 20.96C21.48 19.24 22.56 16.28 22.56 12.26Z" fill="#4285F4" />
                                <path d="M12.18 22C15.3 22 17.94 20.92 19.26 19L15.36 17.76C14.5 18.36 13.42 18.72 12.18 18.72C9.12 18.72 6.54 16.76 5.7 13.96L5.54 14.08L2.66 16.94L2.58 17.12C4.26 20.5 7.92 22 12.18 22Z" fill="#34A853" />
                                <path d="M5.7 13.96C5.5 13.24 5.4 12.5 5.4 11.76C5.4 11.02 5.5 10.28 5.7 9.56L5.58 9.44L2.7 6.6L2.58 6.68C1.86 8.04 1.44 9.56 1.44 11.24C1.44 12.92 1.86 14.44 2.58 15.8L5.7 13.96Z" fill="#FBBC05" />
                                <path d="M12.18 5.2C14.22 5.2 15.78 6.04 16.86 7.16L19.32 4.72C17.94 3.5 15.84 2.72 12.96 2.72C7.92 2.72 3.66 6.28 2.58 11.24L5.7 13.08C6.54 10.28 9.12 8.32 12.18 8.32V5.2Z" fill="#EA4335" />
                            </svg>
                            <span className="text-gray-700 font-medium">Sign in with Google</span>
                        </button>
                    </div>
                    <div className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-indigo-600 hover:underline font-semibold">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}