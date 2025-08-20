import React from 'react'

export default function Contact() {
    return (
        <div className="w-full px-25" id="contact">
            <div>
                <h1 className="text-4xl font-semibold mb-5 text-white">Contact</h1>
                <p className="dark:text-neutral-300 text-neutral-600">
                    I would love to hear from you. Whether you have a question about my services,
                    want to discuss a potential project, or simply want to say hello, don&apos;t
                    hesitate to get in touch. I am here to help and excited to start a
                    conversation.
                </p>
            </div>

            <div className="flex">
                {/* Contact Info */}
                <div className="w-full text-white flex flex-col flex-wrap justify-center gap-4">
                    <div className="w-full rounded-xl p-6 flex flex-col gap-3">
                        <i className="fa-regular fa-envelope text-[25px]" style={{ color: "#9333ea" }}></i>
                        <p>meetkathiriya@gmail.com</p>
                    </div>

                    <div className="w-full text-white rounded-xl p-6 flex flex-col gap-3">
                        <i className="fa-solid fa-phone text-[25px]" style={{ color: "#9333ea" }}></i>
                        <p>+91 6352440031</p>
                    </div>

                    <div className="w-full text-white rounded-xl p-6 flex flex-col gap-3">
                        <i className="fa-solid fa-location-dot text-[25px]" style={{ color: "#9333ea" }}></i>
                        <p>Rajkot - India.</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col justify-start items-start gap-4 w-full p-6">
                    <h2 className="font-medium text-xl text-white">Send me a Message</h2>

                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6 
            text-gray-900 placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0"
                    />

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6 
            text-gray-900 placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0"
                    />

                    <textarea
                        rows="3"
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6 
            text-gray-900 placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0"
                    ></textarea>

                    <button
                        className="cursor-pointer flex flex-row items-center gap-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-lg"
                        aria-label="Send"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
