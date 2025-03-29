import React from 'react';
import logo from "..//assets/images/Erovoutika Dubai logo.png";

const Navbar = () => {
  return (
    <header className="bg-[rgba(47,21,115,0.4)]">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
            <img className="h-15" src={logo.src} alt="Logo" />
        </div>

        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {['Home', 'News', 'Trainings', 'Tournaments'].map((item) => (
                <li key={item}>
                  <a 
                  href="#"
                  className="text-white transition hover:text-blue-500" >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
               
              <div className="hidden sm:flex">
                  <a className="rounded-[60px] bg-white px-5 py-2.5 text-sm font-medium text-blue-950" 
                  href="#">
                    Register Now
                  </a>
                </div>
              </div>
              <div className="block md:hidden">
                <button className="inline-block  rounded-sm bg-white p-2 text-blue-950 transition hover:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;