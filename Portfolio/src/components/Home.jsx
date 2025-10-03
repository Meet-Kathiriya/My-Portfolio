import React from 'react'

export default function Home() {
  return (
    <div>
       <div className="mx-30 flex items-center gap-70 max-sm:mx-10 max-sm:gap-0 max-sm:text-center max-sm:flex max-sm:flex-col-reverse max-md:mx-10 max-md:gap-0 max-md:text-center max-md:flex max-md:flex-col-reverse max-lg:mx-10 max-lg:gap-20 max-xl:mx-5 max-xl:gap-14 max-2xl:mx-10 max-2xl:gap-63" id="Home">
            <div className="flex flex-col justify-center pl-20 max-lg:pl-5">
                <h3 className="text-white text-5xl mt-40">Hello,</h3>
                <h1 className="text-white text-5xl max-lg:text-4xl py-7">I'm <span className="name text-[#fff] font-bold text-6xl px-2">Meet</span></h1>
                <h2 className="text-white text-5xl max-lg:text-4xl">Full Stack Developer</h2>
                <a href="#Contact" className="my-15"><button className="button cursor-pointer text-2xl font-semibold text-white border-2 rounded-lg py-2 px-4 hover:scale-110 max-lg:text-lg">Contact Me</button></a>
            </div>
            <div className="flex justify-center items-center border-2">
                <img src="cartoon.png" alt="" className="w-120 max-lg:w-100 max-lg:mt-15" />
            </div>
        </div>
    </div>
  )
}
