import React from 'react'

export default function Home() {
    return (
        <div className="h-auto text-white mx-40 flex-col-reverse">
            {/* nav */}
            <nav className="flex justify-between items-center py-3 text-lg" id="home">
                <h3 className="text-[25px] font-semibold">Meet&apos;s Portfolio</h3>
                <div className="mt-4">
                    <ul className="flex gap-9 py-4 px-5 rounded-full">
                        <li>
                            <a href="#home" className="hover:text-[#9333ea] transition-all duration-200">
                                <i className="fa-solid fa-house mr-2" style={{ color: "#ffffff" }}></i>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-[#9333ea] transition-all duration-200">
                                <i className="fa-solid fa-user mr-2" style={{ color: "#f0f4f9" }}></i>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#work" className="hover:text-[#9333ea] transition-all duration-200">
                                <i className="fa-solid fa-code mr-2" style={{ color: "#fafcff" }}></i>
                                Work
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-[#9333ea] transition-all duration-200">
                                <i className="fa-solid fa-phone mr-2" style={{ color: "#fafafa" }}></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="invisible">
                        <i className="fa-solid fa-bars" style={{ color: "#fafafa" }}></i>
                    </div>
                </div>
            </nav>
            {/* nav */}

            {/* main */}
            <div className="flex py-30">
                <div>
                    <h1 className="text-[55px] font-semibold py-2">Hey there, I&apos;m Meet !</h1>
                    <h2 className="text-[24px] py-2">A Web Developer</h2>
                    <p className="text-[20px] text-neutral-600">
                        A Web Developer with a passion for turning code into seamless user experiences!
                    </p>
                    <button
                        aria-label="download"
                        className="cursor-pointer mt-12 flex flex-row items-center gap-2 border-2 bordre-white py-4 px-8 hover:border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all ease-in-out duration-300"
                    >
                        <a href="#contact">Contact Me</a>
                        <i className="fa-solid fa-up-right-from-square" style={{ color: "#ffffff" }}></i>
                    </button>
                </div>

                <div className="flex justify-end items-center w-[45%]">
                    <div className="rounded-full w-[70%] h-[370px]">
                        <img src="it's me.jpg" alt="" className="rounded-xl" />
                    </div>
                </div>
            </div>
            {/* main */}
        </div>
    )
}
