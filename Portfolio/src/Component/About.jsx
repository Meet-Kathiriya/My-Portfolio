import React from 'react'

export default function About() {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 py-16" id="about">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8">About</h1>
            <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base md:text-lg lg:text-[18px] text-[#d4d4d4] leading-relaxed">
                    I am a passionate full-stack software developer with a deep-rooted love for
                    crafting digital solutions that empower and inspire. My journey into the world of
                    software development began with a solid foundation in computer science, which I
                    acquired during my years of dedicated study at Sauratsra University, where I
                    earned my Bachleor&apos;s in Computer Science degree.
                </p>

                <p className="text-sm sm:text-base md:text-lg lg:text-[18px] text-[#d4d4d4] leading-relaxed">
                    My educational journey provided me with a strong theoretical understanding, but
                    it&apos;s my insatiable curiosity and relentless drive that have fueled my
                    practical expertise. I thrive in the dynamic and ever-evolving tech landscape,
                    constantly updating my skills to stay at the forefront of innovation. As a
                    full-stack developer, I find joy in bringing ideas to life, from conceptualization
                    to deployment. I revel in the challenge of seamlessly connecting the front-end
                    user experience with the robust functionality of the back end. I approach each
                    project with enthusiasm and precision.
                </p>

                <p className="text-sm sm:text-base md:text-lg lg:text-[18px] text-[#d4d4d4] leading-relaxed">
                    When I&apos;m not immersed in lines of code, you can find me exploring the latest
                    tech trends, attending hackathons, or contributing to open-source projects. I
                    believe that the tech world is a community, and I&apos;m dedicated to giving back
                    and sharing knowledge whenever I can.
                </p>
            </div>

            <div className="mt-8 sm:mt-12">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6">Skills & Technologies</h2>
                <div className="flex justify-start gap-2 flex-wrap">
                    <ul className="flex gap-3 sm:gap-4 md:gap-5 flex-wrap">
                        <li className="px-3 sm:px-4 md:px-5 text-white py-2 text-sm sm:text-base border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                            HTML
                        </li>
                        <li className="px-3 sm:px-4 md:px-5 text-white py-2 text-sm sm:text-base border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                            CSS
                        </li>
                        <li className="px-3 sm:px-4 md:px-5 text-white py-2 text-sm sm:text-base border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                            Media Query
                        </li>
                        <li className="px-3 sm:px-4 md:px-5 text-white py-2 text-sm sm:text-base border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                            Bootstrap
                        </li>
                        <li className="px-3 sm:px-4 md:px-5 text-white py-2 text-sm sm:text-base border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                            Tailwind CSS
                        </li>
                        <li className="px-3 sm:px-4 md:px-5 text-white py-2 text-sm sm:text-base border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                            React JS
                        </li>
                        <li className="px-3 sm:px-4 md:px-5 text-white py-2 text-sm sm:text-base border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                            Node JS
                        </li>
                        <li className="px-3 sm:px-4 md:px-5 text-white py-2 text-sm sm:text-base border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                            Firebase
                        </li>
                        <li className="px-3 sm:px-4 md:px-5 text-white py-2 text-sm sm:text-base border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                            Git &amp; GitHub
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
