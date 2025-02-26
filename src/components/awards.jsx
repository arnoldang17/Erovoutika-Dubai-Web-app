
//importing react
import React from 'react';

//Tailwind css
import "../styles/global.css";
//images used

import bC from './public/bestChoice.png';


//import FA
import { FaAward } from 'react-icons/fa';


function awards() {
	const headerStyle = {
		position: "fixed",
		top: "0",
		left: "0",
		zIndex: "-1",
	  };


  return (
	<div class="max-h-full max-w-full ">
	
	<header class=" w-full h-[100px]" style={{headerStyle}}>
		<div class="mx-auto max-w-screen px-10 py-4 place-items-start">
		  <div class="flex flex-row place-items-start gap-4 md:flex-row md:place-items-center md:justify-between">


			<div class="grid grid-cols-7 place-items-start">
			<FaAward
				class="h-full w-auto"
				color="#b8860b"
				
			/>
			
				<div class="col-span-6" >
			  <h1 class="text-2xl font-bold text-gray-200 sm:text-3xl">Erovoutika Awards and Accreditation</h1>
			  <p class="mt-1.5 text-base text-gray-400">
				Take a look at our achievements
			  </p>

				</div>
			</div>


		  </div>
		</div>
	  </header>

	  {/* first row of the rewards*/}
<div class="grid grid-rows-2">
	<div class="grid grid-cols-3 place-items-center">

	  <a  class="group relative block h-1/2 w-[400px] sm:h-80 lg:h-96 mx-10 place">
		<span class="absolute inset-0 border-2 border-dashed border-black rounded-2xl"></span>
	  
		<div
		  class="relative flex h-full transform items-center rounded-2xl border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
		>
		  <div
			class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 place-items-center "
		  >
			<img 
			src='./bestChoice.png'
			class='h-full w-auto'
			/>
	  
			<h2 class="mt-4 text-xl font-medium sm:text-2xl">PESMS Best Choice Awardee 2020-2021</h2>
		  </div>
	  
		  <div
			class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 "
		  >
			<img 
			src='./bestChoice.png' 
			class="self-center" />
			<h3 class="mt-4 text-xl font-medium sm:text-2xl">PESMS Best Choice Awardee 2020-2021</h3>
	  
			<p class="mt-4 text-sm sm:text-base">
			  Award given by PESMS Events Management, recognizing outstanding companies, brands, and individuals in the Philippines based on consumer preference and market research.
			</p>
		  </div>
		</div>
	  </a>

	  <a href="#" class="group relative block h-1/2 w-[400px] sm:h-80 lg:h-96  mx-10">
		<span class="absolute inset-0 border-2 border-dashed border-black rounded-2xl"></span>
	  
		<div
		  class="relative flex h-full transform items-center border-2 rounded-2xl border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
		>
		  <div
			class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 place-items-center"
		  >
			<img 
			src='./compTIA.png'
			class='h-full w-auto'
			/>
	  
			<h2 class="mt-4 text-xl font-medium sm:text-2xl">CompTIA Authorized Partner</h2>
		  </div>
	  
		  <div
			class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
		  >
			<img 
			src='./compTIA.png'
			class='h-full w-auto'
			/>
			<h3 class="mt-4 text-xl font-medium sm:text-2xl">CompTIA Authorized Partner</h3>
	  
			<p class="mt-4 text-sm sm:text-base">
			  Erovoutika is a certified partner of CompTIA that offers valuable tools and resources to help training organizations recruit, prepare and certify IT professionals.
			</p>
		  </div>
		</div>
	  </a>

	  <a href="#" class="group relative block h-1/2 w-[400px] sm:h-80 lg:h-96  mx-10">
		<span class="absolute inset-0 border-2 border-dashed border-black rounded-2xl"></span>
	  
		<div
		  class="relative flex h-full transform items-center rounded-2xl border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
		>
		  <div
			class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 place-items-center"
		  >
			<img 
			src='./qAsia.png'
			class='h-full w-auto'
			/>
	  
			<h2 class="mt-4 text-xl font-medium sm:text-2xl">Q Asia's Quality Excellence Awardee 2020-2021</h2>
		  </div>
	  
		  <div
			class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
		  >
			<img 
			src='./qAsia.png'
			class='h-full w-auto'
			/>
			<h3 class="mt-4 text-xl font-medium sm:text-2xl">Best Automation and Robotics Control Systems and Training Provider Q Asia's Quality Excellence Awardee 2020-2021</h3>
	  
			<p class="mt-4 text-sm sm:text-base">
			  Erovoutika has met the rigorous standards of Q Asia for receiving The Seal of Product Quality and Seal of Quality Service.
			</p>
		  </div>
		</div>
	  </a>
	  </div>

 {/* second row of the rewards*/}
		<div class="grid grid-cols-2 gap-2 place-items-center">

		<a href="#" class="group relative block h-1/2 w-[400px] sm:h-80 lg:h-96 mt-[60px] ">
		<span class="absolute inset-0 border-2 border-dashed border-black rounded-2xl"></span>
	  
		<div
		  class="relative flex h-full transform items-center border-2 rounded-2xl border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
		>
		  <div
			class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 place-items-center"
		  >
			<img 
			src='./cdp.png'
			class='h-full w-auto'
			/>
	  
			<h2 class="mt-4 text-xl font-medium sm:text-2xl">CDP Provider Accreditation No. ECE-2022-014</h2>
		  </div>
	  
		  <div
			class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
		  >
			<img 
			src='./cdp.png'
			class='h-full w-auto'
			/>
			<h3 class="mt-4 text-xl font-medium sm:text-2xl">CDP Provider Accreditation No. ECE-2022-014</h3>
	  
			<p class="mt-4 text-sm sm:text-base">
			CPD Accreditation is a trust mark achieved by Erovoutika as our training activities has been assessed and confirmed to meet standards suitable for Continuing Professional Development.
			</p>
		  </div>
		</div>
	  </a>
	  <a href="#" class="group relative block h-1/2 w-[400px] sm:h-80 lg:h-96 mt-[60px] ">
		<span class="absolute inset-0 border-2 border-dashed border-black rounded-2xl"></span>
	  
		<div
		  class="relative flex h-full transform items-center border-2 rounded-2xl border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
		>
		  <div
			class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 place-items-center"
		  >
			<img 
			src='./psma.png'
			class='h-full w-auto'
			/>
	  
			<h2 class="mt-4 text-xl font-medium sm:text-2xl">Star Brand Awardee 2020</h2>
		  </div>
	  
		  <div
			class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
		  >
			<img 
			src='./psma.png'
			class='h-full w-auto'
			/>
			<h3 class="mt-4 text-xl font-medium sm:text-2xl">Philippine Social Media Awards Electronics and Robotics Company Star Brand Awardee 2020</h3>
	  
			<p class="mt-4 text-sm sm:text-base">
			Erovoutika was recognized for its innovative use of social media to promote its products and services in Electronics and Robotics.
			</p>
		  </div>
		</div>
	  </a>
			</div>
		
	  </div>

</div>
	
  );
}

export default awards;


