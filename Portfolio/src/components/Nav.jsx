import React, { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="px-30 py-5 flex justify-between items-center text-white max-sm:px-10 max-md:px-10 max-lg:px-12 max-xl:px-15">
        <h3 className="text-2xl font-semibold">Meet.dev</h3>
        <div className="flex items-center">
          <ul className="ul flex gap-5 text-lg max-sm:hidden max-md:hidden">
            <li className="flex items-center gap-2 text-white hover:scale-110 hover:border-1 py-1 px-2 hover:rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                <path fill="#fff" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"/>
              </svg>
              <a href="#Home">Home</a>
            </li>
            <li className="flex items-center gap-2 hover:scale-110 hover:border-1 py-1 px-2 hover:rounded-lg">
              <a href="#About">About</a>
            </li>
            <li className="flex items-center gap-2 hover:scale-110 hover:border-1 py-1 px-2 hover:rounded-lg">
              <a href="#Skills">Skills</a>
            </li>
            <li className="flex items-center gap-2 hover:scale-110 hover:border-1 py-1 px-2 hover:rounded-lg">
              <a href="#Work">Work</a>
            </li>
            <li className="flex items-center gap-2 hover:scale-110 hover:border-1 py-1 px-2 hover:rounded-lg">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <div className="hidden max-sm:flex max-md:flex flex-col justify-center items-center cursor-pointer ml-2" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/>
            </svg>
          </div>
        </div>

        {isMenuOpen && (
          <ul className="absolute top-20 left-160 w-full bg-black flex flex-col gap-4 p-5 max-sm:flex max-md:flex z-50">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Work">Work</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        )}
      </nav>
    </div>
  );
}
