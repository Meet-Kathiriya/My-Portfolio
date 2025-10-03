import React from 'react'

export default function About() {
    return (
        <div>
            <div className="about px-30 pt-35 text-white max-sm:px-10 max-md:px-12 max-lg:px-15 max-xl:px-18" id="About">
                <h1 className="h1 text-5xl font-bold cursor-pointer hover:translate-y-[-10px]">About</h1>
                <div className="flex gap-3">
                    <div className="w-70 h-1 mt-13 rounded-full bg-white"></div>
                    <p className="mt-10 text-xl">As passionate web developers, we create powerful, high-performing websites that blend creativity with technology. While designers shape the look, we build the engine — delivering clean code, lightning-fast speed, secure frameworks, and seamless functionality. Our goal is to craft scalable, future-ready platforms that not only look stunning but also drive results and grow with your business.</p>
                </div>
            </div>
        </div>
    )
}
