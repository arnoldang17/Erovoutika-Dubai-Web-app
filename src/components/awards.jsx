
//importing react
import React from 'react';

//Tailwind css
import "../styles/global.css";


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
			<img 
			src='./ribbon.png'
			class='h-full w-auto'
			/>
			
				<div class="col-span-6 mr-4" >
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
	<div class="grid grid-cols-2 place-items-center h-[300px] w-full">

	  <a  class="group relative block h-[150px] w-[700px] sm:h-[100px] lg:h-[150px] mx-10">
		<span class="absolute inset-0 border-2 border-dashed border-white rounded-2xl"></span>
	  
		<div
		  class="relative flex h-full transform items-center rounded-2xl border-2 border-transparent opacity-80 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
		>
		  <div
			class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 place-items-center place-content-center ml-28"
		  >
			<img 
			src='./bestChoice.png'
			class='h-[80px] w-auto mt-3'
			/>
	  
			<h2 class="mt-1 text-xl font-medium sm:text-2xl">PESMS Best Choice Awardee 2020-2021</h2>
		  </div>
	  
		  <div
			class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 place-content-center"
		  >

			<div class="grid grid-cols-7 place-items-start">
			<img 
			src='./bestChoice.png' 
			class="place-self-center" />
			
				<div class="col-span-6 mr-4 ml-4" >
				<h3 class="mt-4 text-xl font-medium sm:text-2xl">PESMS Best Choice Awardee 2020-2021</h3>
	  
	  <p class="mt-4 text-sm sm:text-base">
		Award given by PESMS Events Management, recognizing outstanding companies, brands, and individuals in the Philippines based on consumer preference and market research.
	  </p>

				</div>
			</div>
			

		  </div>
		</div>
	  </a>

	  <a  class="group relative block h-[150px] w-[700px] sm:h-[100px] lg:h-[150px] mx-10">
		<span class="absolute inset-0 border-2 border-dashed border-white rounded-2xl"></span>
	  
		<div
		  class="relative flex h-full transform items-center rounded-2xl border-2 border-transparent opacity-80 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
		>
		  <div
			class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 place-items-center place-content-center ml-40"
		  >
			<img 
			src='./compTIA.png'
			class='h-[80px] w-auto mt-3'
			/>
	  
			<h2 class="mt-1 text-xl font-medium sm:text-2xl">CompTIA Authorized Partner</h2>
		  </div>
	  
		  <div
			class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 place-content-center"
		  >

			<div class="grid grid-cols-7 place-items-start">
			<img 
			src='./compTIA.png' 
			class="place-self-center" />
			
				<div class="col-span-6 mr-4 ml-4" >
				<h3 class="mt-4 text-xl font-medium sm:text-2xl">CompTIA Authorized Partner</h3>
	  
	  <p class="mt-4 text-sm sm:text-base">
	  Erovoutika is a certified partner of CompTIA that offers valuable tools and resources to help training organizations recruit, prepare and certify IT professionals.
	  </p>

				</div>
			</div>
		  </div>
		</div>
	  </a>

	  </div>


{/*second row of awards */}
	  <div class="grid grid-cols-2 place-items-center h-[300px] w-full">


	  <a  class="group relative block h-[200px] w-[700px] sm:h-[100px] lg:h-[150px] mx-10">
		<span class="absolute inset-0 border-2 border-dashed border-white rounded-2xl"></span>
	  
		<div
		  class="relative flex h-full transform items-center rounded-2xl border-2 border-transparent opacity-80 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
		>
		  <div
			class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 place-items-center place-content-center ml-15"
		  >
			<img 
			src='./qAsia.png'
			class='h-[80px] w-auto mt-3'
			/>
	  
			<h2 class="mt-1 text-xl font-medium sm:text-2xl">Q Asia's Quality Excellence Awardee 2020-2021</h2>
		  </div>
	  
		  <div
			class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 place-content-center "
		  >

			<div class="grid grid-cols-7 place-items-start">
			<img 
			src='./qAsia.png' 
			class="place-self-center" />
			
				<div class="col-span-6 mr-4 ml-4" >
				<h3 class="mt-4 text-xl font-medium sm:text-xl">Best Automation and Robotics Control Systems and Training Provider Q Asia's Quality Excellence Awardee 2020-2021</h3>
	  
	  <p class="mt-0.5 text-sm sm:text-base">
	  Erovoutika has met the rigorous standards of Q Asia for receiving The Seal of Product Quality and Seal of Quality Service.
	  </p>

				</div>
			</div>
		  </div>
		</div>
	  </a>




	  <a  class="group relative block h-[200px] w-[700px] sm:h-[100px] lg:h-[150px] mx-10">
		<span class="absolute inset-0 border-2 border-dashed border-white rounded-2xl"></span>
	  
		<div
		  class="relative flex h-full transform items-center rounded-2xl border-2 border-transparent opacity-80 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
		>
		  <div
			class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 place-items-center place-content-center ml-15"
		  >
			<img 
			src='./cdp.png'
			class='h-[80px] w-auto mt-3'
			/>
	  
			<h2 class="mt-1 text-xl font-medium sm:text-2xl">CDP Provider Accreditation No. ECE-2022-014</h2>
		  </div>
	  
		  <div
			class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 place-content-center"
		  >

			<div class="grid grid-cols-7 place-items-start">
			<img 
			src='./cdp.png' 
			class="place-self-center" />
			
				<div class="col-span-6 mr-4 ml-4" >
				<h3 class="mt-4 text-xl font-medium sm:text-2xl">CDP Provider Accreditation No. ECE-2022-014</h3>
	  
	  <p class="mt-4 text-sm sm:text-base">
	  CPD Accreditation is a trust mark achieved by Erovoutika as our training activities has been assessed and confirmed to meet standards suitable for Continuing Professional Development.
	  </p>

				</div>
			</div>
		  </div>
		</div>
	  </a>
</div>



 {/* third row  of the rewards*/}
		<div class="grid  gap-2 place-items-center">

		<a  class="group relative block h-[170px] w-[700px] sm:h-[100px] lg:h-[170px] mx-10">
		<span class="absolute inset-0 border-2 border-dashed border-white rounded-2xl"></span>
	  
		<div
		  class="relative flex h-full transform items-center rounded-2xl border-2 border-transparent opacity-80 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
		>
		  <div
			class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 place-items-center place-content-center ml-45"
		  >
			<img 
			src='./psma.png'
			class='h-[80px] w-auto mt-3'
			/>
	  
			<h2 class="mt-1 text-xl font-medium sm:text-2xl">Star Brand Awardee 2020</h2>
		  </div>
	  
		  <div
			class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 place-content-center"
		  >

			<div class="grid grid-cols-7 place-items-start">
			<img 
			src='./psma.png' 
			class="place-self-center" />
			
				<div class="col-span-6 mr-4 ml-4" >
				<h3 class="mt-4 text-xl font-medium sm:text-2xl">Philippine Social Media Awards Electronics and Robotics Company Star Brand Awardee 2020</h3>
	  
	  <p class="mt-1 text-sm sm:text-base">
	  Erovoutika was recognized for its innovative use of social media to promote its products and services in Electronics and Robotics.
	  </p>

				</div>
			</div>
		  </div>
		</div>
	  </a>

			</div>
		
	  </div>


	
  );
}

export default awards;


