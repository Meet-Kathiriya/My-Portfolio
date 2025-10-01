import React from 'react'

export default function Contact() {
    return (
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 py-16" id="contact">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-white">Contact</h1>
                <p className="text-sm sm:text-base md:text-lg dark:text-neutral-300 text-neutral-600 leading-relaxed">
                    I would love to hear from you. Whether you have a question about my services,
                    want to discuss a potential project, or simply want to say hello, don&apos;t
                    hesitate to get in touch. I am here to help and excited to start a
                    conversation.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Contact Info */}
                <div className="w-full lg:w-1/2 text-white flex flex-col gap-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Get in Touch</h2>
                    <div className="space-y-4">
                        <div className="rounded-xl p-4 sm:p-6 flex flex-col gap-3 hover:bg-gray-800/30 transition-colors">
                            <i className="fa-regular fa-envelope text-xl sm:text-2xl" style={{ color: "#9333ea" }}></i>
                            <p className="text-sm sm:text-base">meetkathiriya@gmail.com</p>
                        </div>

                        <div className="text-white rounded-xl p-4 sm:p-6 flex flex-col gap-3 hover:bg-gray-800/30 transition-colors">
                            <i className="fa-solid fa-phone text-xl sm:text-2xl" style={{ color: "#9333ea" }}></i>
                            <p className="text-sm sm:text-base">+91 6352440031</p>
                        </div>

                        <div className="text-white rounded-xl p-4 sm:p-6 flex flex-col gap-3 hover:bg-gray-800/30 transition-colors">
                            <i className="fa-solid fa-location-dot text-xl sm:text-2xl" style={{ color: "#9333ea" }}></i>
                            <p className="text-sm sm:text-base">Rajkot - India.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-1/2 p-4 sm:p-6">
                    <h2 className="font-medium text-lg sm:text-xl text-white mb-4">Send me a Message</h2>

                    <div className="w-full space-y-4">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-3 sm:py-4 px-4 sm:px-6 
                text-gray-900 placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 focus:border-purple-500 transition-colors"
                        />

                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-3 sm:py-4 px-4 sm:px-6 
                text-gray-900 placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 focus:border-purple-500 transition-colors"
                        />

                        <textarea
                            rows="4"
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-3 sm:py-4 px-4 sm:px-6 
                text-gray-900 placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 focus:border-purple-500 transition-colors resize-vertical"
                        ></textarea>

                        <button
                            className="cursor-pointer flex flex-row items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-base sm:text-lg transition-colors w-full sm:w-auto"
                            aria-label="Send"
                        >
                            <span>Send Message</span>
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
