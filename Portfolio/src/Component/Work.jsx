import React from 'react'

export default function Work() {
    return (
        <div className="w-full py-12 sm:py-16 md:py-20" id="work">
            <div className="mb-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-white">Works</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40">

                {/* Wrogn Clone */}
                <div className="flex flex-col text-white items-start p-4 sm:p-6 hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-black rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                    <img src="Wrogn.png" className="rounded-lg w-full h-48 sm:h-56 object-cover" loading="lazy" alt="Wrogn Clone Project" />
                    <h1 className="text-lg sm:text-xl font-medium mt-4">Wrogn Clone</h1>
                    <p className="text-sm mt-2 dark:text-neutral-300 text-neutral-600">
                        A Full Stack Wrogn Clone Application
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <a
                            href="https://react-wrogn.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center text-sm gap-2 rounded-full hover:text-purple-600 transition-colors"
                        >
                            <i className="fa-solid fa-link fa-shake" style={{ color: "#fff" }}></i>
                            <span className="hidden sm:inline">Wrogn.com</span>
                            <span className="sm:hidden">Live Demo</span>
                        </a>
                        <a
                            href="https://github.com/Meet-Kathiriya/Tailwind-Web/tree/main/wrogn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center text-sm gap-2 rounded-full hover:text-purple-600 transition-colors"
                        >
                            <i className="fa-brands fa-github fa-shake" style={{ color: "#e9eaed" }}></i>
                            <span className="hidden sm:inline">Get Code</span>
                            <span className="sm:hidden">Code</span>
                        </a>
                    </div>
                </div>
                
                {/* Blinkit Clone */}
                <div className="flex flex-col text-white items-start p-4 sm:p-6 hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-black rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                    <img src="blinkit.png" className="rounded-lg w-full h-48 sm:h-56 object-cover" loading="lazy" alt="Blinkit Clone Project" />
                    <h1 className="text-lg sm:text-xl font-medium mt-4">Blinkit Clone</h1>
                    <p className="text-sm mt-2 dark:text-neutral-300 text-neutral-600">
                        A Full Stack Blinkit Clone Application
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <a
                            href="https://blllinkit.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center text-sm gap-2 rounded-full hover:text-purple-600 transition-colors"
                        >
                            <i className="fa-solid fa-link fa-shake" style={{ color: "#f5f5f5" }}></i>
                            <span className="hidden sm:inline">Blinkit.com</span>
                            <span className="sm:hidden">Live Demo</span>
                        </a>
                        <a
                            href="https://github.com/Meet-Kathiriya/Tailwind-Web/tree/main/Blinkit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center text-sm gap-2 rounded-full hover:text-purple-600 transition-colors"
                        >
                            <i className="fa-brands fa-github fa-shake" style={{ color: "#e9eaed" }}></i>
                            <span className="hidden sm:inline">Get Code</span>
                            <span className="sm:hidden">Code</span>
                        </a>
                    </div>
                </div>

                {/* Spotify Clone */}
                <div className="flex flex-col text-white items-start p-4 sm:p-6 hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-black rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                    <img src="spotify.png" className="rounded-lg w-full h-48 sm:h-56 object-cover" loading="lazy" alt="Spotify Clone Project" />
                    <h1 className="text-lg sm:text-xl font-medium mt-4">Spotify Clone</h1>
                    <p className="text-sm mt-2 dark:text-neutral-300 text-neutral-600">
                        A Full Stack Spotify Clone Application
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <a
                            href="https://spotiifyyy.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center text-sm gap-2 rounded-full hover:text-purple-600 transition-colors"
                        >
                            <i className="fa-solid fa-link fa-shake" style={{ color: "#f5f5f5" }}></i>
                            <span className="hidden sm:inline">Spotify.com</span>
                            <span className="sm:hidden">Live Demo</span>
                        </a>
                        <a
                            href="https://github.com/Meet-Kathiriya/Tailwind-Web/tree/main/Spotify"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center text-sm gap-2 rounded-full hover:text-purple-600 transition-colors"
                        >
                            <i className="fa-brands fa-github fa-shake" style={{ color: "#e9eaed" }}></i>
                            <span className="hidden sm:inline">Get Code</span>
                            <span className="sm:hidden">Code</span>
                        </a>
                    </div>
                </div>

                {/* Airbnb Clone */}
                <div className="flex flex-col text-white items-start p-4 sm:p-6 hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-black rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                    <img src="Airbnb.png" className="rounded-lg w-full h-48 sm:h-56 object-cover" loading="lazy" alt="Airbnb Clone Project" />
                    <h1 className="text-lg sm:text-xl font-medium mt-4">Airbnb Clone</h1>
                    <p className="text-sm mt-2 dark:text-neutral-300 text-neutral-600">
                        A Full Stack Airbnb Clone Application
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <a
                            href="https://aiiiirbnb1.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center text-sm gap-2 rounded-full hover:text-purple-600 transition-colors"
                        >
                            <i className="fa-solid fa-link fa-shake" style={{ color: "#f5f5f5" }}></i>
                            <span className="hidden sm:inline">Airbnb.com</span>
                            <span className="sm:hidden">Live Demo</span>
                        </a>
                        <a
                            href="http://github.com/Meet-Kathiriya/Tailwind-Web/tree/main/Airbnb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center text-sm gap-2 rounded-full hover:text-purple-600 transition-colors"
                        >
                            <i className="fa-brands fa-github fa-shake" style={{ color: "#e9eaed" }}></i>
                            <span className="hidden sm:inline">Get Code</span>
                            <span className="sm:hidden">Code</span>
                        </a>
                    </div>
                </div>

                {/* Rockstar Clone */}
                <div className="flex flex-col text-white items-start p-4 sm:p-6 hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-black rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                    <img src="Rockstar.png" className="rounded-lg w-full h-48 sm:h-56 object-cover" loading="lazy" alt="Rockstar Clone Project" />
                    <h1 className="text-lg sm:text-xl font-medium mt-4">Rockstar Clone</h1>
                    <p className="text-sm mt-2 dark:text-neutral-300 text-neutral-600">
                        A Full Stack Rockstar Clone Application
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <a
                            href="https://rooockstargames.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center text-sm gap-2 rounded-full hover:text-purple-600 transition-colors"
                        >
                            <i className="fa-solid fa-link fa-shake" style={{ color: "#f5f5f5" }}></i>
                            <span className="hidden sm:inline">Rockstar.com</span>
                            <span className="sm:hidden">Live Demo</span>
                        </a>
                        <a
                            href="https://github.com/Meet-Kathiriya/Tailwind-Web/tree/main/Rock%20Star%20Games"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center text-sm gap-2 rounded-full hover:text-purple-600 transition-colors"
                        >
                            <i className="fa-brands fa-github fa-shake" style={{ color: "#e9eaed" }}></i>
                            <span className="hidden sm:inline">Get Code</span>
                            <span className="sm:hidden">Code</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
