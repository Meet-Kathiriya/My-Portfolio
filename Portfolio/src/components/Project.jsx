import React from 'react'

export default function Project() {
    return (
        <div>
            <div className="works px-46 pb-40 text-white text-center max-md:px-3 max-lg:px-3 max-xl:px-10 max-2xl:px-10" id="Work">
                <h1 className="h1 text-5xl font-bold cursor-pointer hover:translate-y-[-10px]">Work</h1>
                <div className="flex flex-wrap gap-8 mt-15 justify-center max-ms:gap-3 max-xl:gap-10">
                    <div className="work hover:translate-y-[-10px] w-90 border-1 rounded-2xl flex flex-col items-center justify-start">
                        <img src="wrogn.jpg" alt="" className="rounded-t-2xl h-51" />
                            <h2 className="pt-3 text-xl font-semibold">WROGN Clone</h2>
                            <div className="flex gap-5 text-lg py-5">
                                <button className="flex items-center text-sm gap-3 py-1.5 px-2 border-1 rounded-lg"><a target="_blank" href="https://github.com/Meet-Kathiriya/Tailwind-Web/tree/main/wrogn">Get Code</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg></button>
                                <button className="flex items-center text-sm gap-3 py-1.5 px-2 border-1 rounded-lg"><a target="_blank" href="https://react-wrogn.vercel.app/">Live Demo</a><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9" /></svg></button>
                            </div>
                    </div>
                    <div className="work hover:translate-y-[-10px] w-90 border-1 rounded-2xl flex flex-col items-center justify-start">
                        <img src="airbnb.jpg" alt="" className="rounded-t-2xl" />
                            <h2 className="pt-3 text-xl font-semibold">Airbnb Clone</h2>
                            <div className="flex gap-5 text-lg py-5">
                                <button className="flex items-center text-sm gap-3 py-1.5 px-2 border-1 rounded-lg"><a target="_blank" href="https://github.com/Meet-Kathiriya/Tailwind-Web/tree/main/Airbnb">Get Code</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg></button>
                                <button className="flex items-center text-sm gap-3 py-1.5 px-2 border-1 rounded-lg"><a target="_blank" href="https://aiiiirbnb1.netlify.app/">Live Demo</a><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9" /></svg></button>
                            </div>
                    </div>
                    <div className="work hover:translate-y-[-10px] w-90 border-1 rounded-2xl flex flex-col items-center justify-start">
                        <img src="blinkit.jpg" alt="" className="rounded-t-2xl" />
                            <h2 className="pt-3 text-xl font-semibold">Blinkit Clone</h2>
                            <div className="flex gap-5 text-lg py-5">
                                <button className="flex items-center text-sm gap-3 py-1.5 px-2 border-1 rounded-lg"><a target="_blank" href="https://github.com/Meet-Kathiriya/Tailwind-Web/tree/main/Blinkit">Get Code</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg></button>
                                <button className="flex items-center text-sm gap-3 py-1.5 px-2 border-1 rounded-lg"><a target="_blank" href="https://blllinkit.netlify.app/">Live Demo</a><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9" /></svg></button>
                            </div>
                    </div>
                    <div className="work hover:translate-y-[-10px] w-90 border-1 rounded-2xl flex flex-col items-center justify-start">
                        <img src="rockstar.jpg" alt="" className="rounded-t-2xl" />
                            <h2 className="pt-3 text-xl font-semibold">Rockstar Clone</h2>
                            <div className="flex gap-5 text-lg py-5">
                                <button className="flex items-center text-sm gap-3 py-1.5 px-2 border-1 rounded-lg"><a target="_blank" href="https://github.com/Meet-Kathiriya/Tailwind-Web/tree/main/Rock%20Star%20Games">Get Code</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg></button>
                                <button className="flex items-center text-sm gap-3 py-1.5 px-2 border-1 rounded-lg"><a target="_blank" href="https://rooockstargames.netlify.app/">Live Demo</a><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9" /></svg></button>
                            </div>
                    </div>
                    <div className="work hover:translate-y-[-10px] w-90 border-1 rounded-2xl flex flex-col items-center justify-start">
                        <img src="Spotify.jpg" alt="" className="rounded-t-2xl h-51" />
                            <h2 className="pt-3 text-xl font-semibold">Spotify Clone</h2>
                            <div className="flex gap-5 text-lg py-5">
                                <button className="flex items-center text-sm gap-3 py-1.5 px-2 border-1 rounded-lg"><a target="_blank" href="https://github.com/Meet-Kathiriya/Tailwind-Web/tree/main/Spotify">Get Code</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg></button>
                                <button className="flex items-center text-sm gap-3 py-1.5 px-2 border-1 rounded-lg"><a target="_blank" href="https://spotiifyyy.netlify.app/">Live Demo</a><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9" /></svg></button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
