import React from 'react'

export default function Skill() {
  return (
    <div>
      <div className="my-skill mx-80 py-30 text-white text-center max-sm:mx-10 max-md:mx-10 max-lg:mx-10 max-xl:mx-20 max-2xl:mx-20" id="Skills">
        <h1 className="h1 text-5xl font-bold cursor-pointer hover:translate-y-[-10px]">My Skills</h1>  
        <div className="flex flex-wrap gap-10 justify-center mt-20">
            <div className="skill border-1 w-40 h-40 font-semibold rounded-2xl text-md flex flex-col justify-end pb-4 items-center hover:text-black hover:translate-y-[-10px]">
                <img src="html.png" alt="" className="w-30" />
                HTML
            </div>
            <div className="my bg-white text-black font-semibold w-40 h-40 rounded-2xl text-md flex flex-col justify-end pb-4 items-center hover:text-white hover:border-1 hover:translate-y-[-10px]">
                <img src="css.png" alt="" className="w-25" />
                CSS
            </div>
            <div className="skill border-1 w-40 h-40 font-semibold rounded-2xl text-md flex flex-col justify-center pb-4 items-center hover:text-black hover:translate-y-[-10px]">
                <img src="tailwind css.png" alt="" className="w-30" />
                Tailwind CSS
            </div>
            <div className="skill border-1 w-40 h-40 font-semibold rounded-2xl text-md flex flex-col gap-3 pb-4 justify-end items-center hover:text-black hover:translate-y-[-10px]">
                <img src="bootstrap.png" alt="" className="w-23" />
                Bootstrap
            </div>
            <div className="skill border-1 w-40 h-40 font-semibold rounded-2xl text-md flex flex-col gap-3 pb-4 justify-end items-center hover:text-black hover:translate-y-[-10px]">
                <img src="react.png" alt="" className="w-20" />
                React JS
            </div>
            <div className="skill border-1 w-40 h-40 font-semibold rounded-2xl text-md flex flex-col gap-3 pb-4 justify-end items-center hover:text-black hover:translate-y-[-10px]">
                <img src="node js.png" alt="" className="w-20" />
                Node JS
            </div>
        </div>    
    </div>
    </div>
  )
}
