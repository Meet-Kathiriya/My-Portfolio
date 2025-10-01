import React, { useState } from 'react'

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="h-auto text-white px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40">
            {/* nav */}
            <nav className="flex justify-between items-center py-3 text-lg" id="home">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Meet&apos;s Portfolio</h3>
                <div className="relative">
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex gap-4 lg:gap-9 py-4 px-5 rounded-full">
                        <li>
                            <a href="#home" className="hover:text-[#9333ea] transition-all duration-200 flex items-center">
                                <i className="fa-solid fa-house mr-2" style={{ color: "#ffffff" }}></i>
                                <span className="hidden lg:inline">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-[#9333ea] transition-all duration-200 flex items-center">
                                <i className="fa-solid fa-user mr-2" style={{ color: "#f0f4f9" }}></i>
                                <span className="hidden lg:inline">About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#work" className="hover:text-[#9333ea] transition-all duration-200 flex items-center">
                                <i className="fa-solid fa-code mr-2" style={{ color: "#fafcff" }}></i>
                                <span className="hidden lg:inline">Work</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-[#9333ea] transition-all duration-200 flex items-center">
                                <i className="fa-solid fa-phone mr-2" style={{ color: "#fafafa" }}></i>
                                <span className="hidden lg:inline">Contact</span>
                            </a>
                        </li>
                    </ul>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className="fa-solid fa-bars text-xl" style={{ color: "#fafafa" }}></i>
                    </button>
                    
                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <div className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-sm rounded-lg p-4 min-w-[200px] z-50">
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <a href="#home" className="hover:text-[#9333ea] transition-all duration-200 flex items-center" onClick={() => setIsMenuOpen(false)}>
                                        <i className="fa-solid fa-house mr-2" style={{ color: "#ffffff" }}></i>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-[#9333ea] transition-all duration-200 flex items-center" onClick={() => setIsMenuOpen(false)}>
                                        <i className="fa-solid fa-user mr-2" style={{ color: "#f0f4f9" }}></i>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#work" className="hover:text-[#9333ea] transition-all duration-200 flex items-center" onClick={() => setIsMenuOpen(false)}>
                                        <i className="fa-solid fa-code mr-2" style={{ color: "#fafcff" }}></i>
                                        Work
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-[#9333ea] transition-all duration-200 flex items-center" onClick={() => setIsMenuOpen(false)}>
                                        <i className="fa-solid fa-phone mr-2" style={{ color: "#fafafa" }}></i>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
            {/* nav */}

            {/* main */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start py-8 lg:py-30 gap-8 lg:gap-12">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-semibold py-2 leading-tight">
                        Hey there, I&apos;m Meet !
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] py-2">
                        A Web Developer
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-neutral-600 max-w-2xl mx-auto lg:mx-0">
                        A Web Developer with a passion for turning code into seamless user experiences!
                    </p>
                    <button
                        aria-label="download"
                        className="cursor-pointer mt-8 lg:mt-12 flex flex-row items-center gap-2 border-2 border-white py-3 px-6 lg:py-4 lg:px-8 hover:border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all ease-in-out duration-300 mx-auto lg:mx-0"
                    >
                        <a href="#contact">Contact Me</a>
                        <i className="fa-solid fa-up-right-from-square" style={{ color: "#ffffff" }}></i>
                    </button>
                </div>

                <div className="flex justify-center lg:justify-end items-center w-full lg:w-[45%]">
                    <div className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-[70%] lg:h-[370px] max-w-md">
                        <img src="image.png" alt="Meet's Profile" className="rounded-xl w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            {/* main */}
        </div>
    )
}
