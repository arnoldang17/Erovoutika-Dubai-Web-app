
//importing react
import React from "react";
//ui
import {BlurFade} from "@/components/ui/blur-fade";

function Robolution() {
 
  
    return (
        <div className="bg-white">
                
            <div className="grid md:grid-cols-2 grid-cols-1 lg:p-56 sm:p-36 p-10 gap-10">

                <div >
                <h3 className="font-semibold xl:text-7xl lg:text-5xl text-2xl text-black mb-4"> What is ROBOLUTION DUBAI 2025?</h3>
                <h4 className="text-base text-zinc-800 mt-4">Robolution, Erovoutika’s premier robotics competition, fosters global innovation in robotics, cybersecurity, and automation. Established in 2019, it now spans regional to international levels. Robolution Dubai 2025 features competitions, training, awards, and networking.</h4>
                
                </div>

                <div className="place-items-center">
                <img 
                    src='./bot1.jpg'
			        className='h-[300px] w-auto rounded-sm opacity-80'
                    /> 
                   
                </div>

                <span className="flex items-center md:col-span-2 col-span-1">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

                    <span className="shrink-0 px-4 text-gray-900"> <img 
                                        src='./erov.png'
			                            className='h-[40px] w-auto rounded-sm opacity-80'
                                        /> </span>

                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                    </span>



                <div className="mt-24 place-items-center">
                <img 
                src='./joinUs.jpg'
			    className='h-[300px] w-auto rounded-sm opacity-90'
                /> 
               </div>

                <div className="place-items-start mt-24">
                <h3 className="font-semibold xl:text-7xl lg:text-5xl text-2xl text-black mb-4"> Join Our Community!</h3>
                <h4 className="text-base text-zinc-800 mt-4">Robolution Dubai 2025 is open to teachers, faculty, robotics coaches, government employees, students, industry partners, and awardees from around the world.</h4>
                
                <a className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:ring-3 focus:outline-hidden rounded-sm mt-10" href="#">
                    <span className="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full rounded-sm" ></span>

                    <span className="relative text-sm font-medium text-indigo-600 transition-colors rounded-sm group-hover:text-white">Join Us </span>
                </a>


                </div>

            </div>
        </div>
    );
}

export default Robolution;