import React, {useState, useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import ProjectMap from "./ProjectMap.jsx";
import Data from "../data.js"


export default function Project(){

	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {

			const pin = gsap.fromTo(sectionRef.current, {
				translateX: 0
			}, {
				translateX: "-600vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0.6,
					pin: true,
					

				}
			})

		return () => {
			pin.kill()
		}
	}, [])


/*Project Data Map In Project.jsx*/

	const projectmapEl = Data.map(data => <ProjectMap 
			key= {data.id}
			data= {data}
		/>)
	return(	
		<section ref={triggerRef} className="scroll-section-outer">
		<div>
			<div ref={sectionRef} className="scroll-section-inner">
				<div className="scroll-section">
					{projectmapEl}
				</div>
				
			</div>
		</div>
		</section>
		)
}

			// <div className="scroll-section flex flex-col flex-nowrap h-screen w-screen p-4 m-2 border-y-black border-y-4 text-center">
			// 	<div className="w-full">
			// 		<h1 className="static tracking-wide p-4 my-4  font-extrabold text-6xl font-outline-4 text-transparent hover:underline cursor-pointer w-[25rem] bg-cyan-200 bg-opacity-50 text-right">
			// 		Project 1
			// 		</h1>
			// 	</div>	
			// <div className="flex sm:flex-row flex-col flex-nowrap justify-evenly align-center my-auto">
			// 	<div className="w-3/5 sm:w-auto mx-auto">
			// 		<img className="lg:w-2/3 w-full m-auto mt-2 rounded cursor-pointer scale-100 duration-300 hover:scale-110 hover:duration-300" src="src/Assets/project1.webp" />
			// 	</div>
			// 		<div className="m-auto flex flex-col px-5">
			// 			<h1 className="p-auto mx-10 text-xl sm:text-5xl sm:font-outline-4 sm:mx-auto bg-white rounded-lg p-1  text-transparent font-extrabold font-outline-2 text-center my-5">
			// 				Basquetball ScoreBoard
			// 			</h1>
			// 			<p className="mx-10 sm:mx-auto bg-white rounded-lg p-4 text-sm font-medium mt-5">
			// 		 	Used JS Vanilla tags such as DOM, functions , loops and arrays. 
			// 			</p>
			// 		</div>
			// 	</div>

			// </div>

			// <div className="scroll-section flex flex-col flex-nowrap h-screen w-screen p-4 m-2 border-y-black border-y-4 text-center">

			// 	<div className="w-full">
			// 		<h1 className="static tracking-wide p-4 my-4  font-extrabold text-6xl font-outline-4 text-transparent hover:underline cursor-pointer w-[25rem] bg-cyan-200 bg-opacity-50 text-right">
			// 		Project 2
			// 		</h1>
			// 	</div>	
			// <div className="flex sm:flex-row flex-col flex-nowrap justify-evenly align-center my-auto">
			// 	<div className="w-3/5 sm:w-auto mx-auto">
			// 		<img className="lg:w-2/3 w-full m-auto mt-2 rounded cursor-pointer scale-100 duration-300 hover:scale-110 hover:duration-300" src="src/Assets/project2.webp" />
			// 	</div>
			// 		<div className="m-auto flex flex-col px-5">
			// 			<h1 className="p-auto mx-10 text-xl sm:text-5xl sm:font-outline-4 sm:mx-auto bg-white rounded-lg p-1  text-transparent font-extrabold font-outline-2 text-center my-5">
			// 				Password Generator
			// 			</h1>
			// 			<p className="mx-10 sm:mx-auto bg-white rounded-lg p-4 text-sm font-medium mt-5">
			// 			Used JS Vanilla tags such as math functions, DOM and arrays. 
			// 			</p>
			// 		</div>
			// 	</div>

			// </div>	
			// <div id="section" className="scroll-section flex flex-col flex-nowrap h-screen w-screen p-4 m-2 border-y-black border-y-4 text-center">

			// 	<div className="w-full">
			// 		<h1 className="static tracking-wide p-4 my-4  font-extrabold text-6xl font-outline-4 text-transparent hover:underline cursor-pointer w-[25rem] bg-cyan-200 bg-opacity-50 text-right">
			// 		Project 3
			// 		</h1>
			// 	</div>	
			// <div className="flex sm:flex-row flex-col flex-nowrap justify-evenly align-center my-auto">
			// 	<div className="w-3/5 sm:w-auto mx-auto">
			// 		<img className="lg:w-2/3 w-full m-auto mt-2 rounded cursor-pointer scale-100 duration-300 hover:scale-110 hover:duration-300" src="src/Assets/project3.webp" />
			// 	</div>
			// 		<div className="m-auto flex flex-col px-5">
			// 			<h1 className="p-auto mx-10 text-xl sm:text-5xl sm:font-outline-4 sm:mx-auto bg-white rounded-lg p-1  text-transparent font-extrabold font-outline-2 text-center my-5">
			// 				Unit Converter
			// 			</h1>
			// 			<p className="mx-10 sm:mx-auto bg-white rounded-lg p-4 text-sm font-medium mt-5">
			// 		 	 Used JS Vanilla sucha as if condition, math functions, operators , operations, DOM.
			// 			</p>
			// 		</div>
			// 	</div>

			// </div>

			// <div id="section" className="scroll-section flex flex-col flex-nowrap h-screen w-screen p-4 m-2 border-y-black border-y-4 text-center">

			// 	<div className="w-full">
			// 		<h1 className="static tracking-wide p-4 my-4  font-extrabold text-6xl font-outline-4 text-transparent hover:underline cursor-pointer w-[25rem] bg-cyan-200 bg-opacity-50 text-right">
			// 		Project 4
			// 		</h1>
			// 	</div>	
			// <div className="flex sm:flex-row flex-col flex-nowrap justify-evenly align-center my-auto">
			// 	<div className="w-3/5 sm:w-auto mx-auto">
			// 		<img className="lg:w-2/3 w-full m-auto mt-2 rounded cursor-pointer scale-100 duration-300 hover:scale-110 hover:duration-300" src="src/Assets/project4.webp" />
			// 	</div>
			// 		<div className="m-auto flex flex-col px-5">
			// 			<h1 className="p-auto mx-10 text-xl sm:text-5xl sm:font-outline-4 sm:mx-auto bg-white rounded-lg p-1  text-transparent font-extrabold font-outline-2 text-center my-5">	
			// 				GPT Gift Generator
			// 			</h1>
			// 			<p className="mx-10 sm:mx-auto bg-white rounded-lg p-4 text-sm font-medium mt-5">
			// 		 		Used ReactJS Hooks such as UseStae UseEffect UseRef API in order to make a GPT form project.
 
			// 			</p>
			// 		</div>
			// 	</div>

			// </div>

			// <div id="section" className="scroll-section flex flex-col flex-nowrap h-screen w-screen p-4 m-2 border-y-black border-y-4 text-center">

			// 	<div className="w-full">
			// 		<h1 className="static tracking-wide p-4 my-4  font-extrabold text-6xl font-outline-4 text-transparent hover:underline cursor-pointer w-[25rem] bg-cyan-200 bg-opacity-50 text-right">
			// 		Project 5
			// 		</h1>
			// 	</div>	
			// <div className="flex sm:flex-row flex-col flex-nowrap justify-evenly align-center my-auto">
			// 	<div className="w-3/5 sm:w-auto mx-auto">
			// 		<img className="lg:w-2/3 w-full m-auto mt-2 rounded cursor-pointer scale-100 duration-300 hover:scale-110 hover:duration-300" src="src/Assets/project5.webp" />
			// 	</div>
			// 		<div className="m-auto flex flex-col px-5">
			// 			<h1 className="p-auto mx-10 text-xl sm:text-5xl sm:font-outline-4 sm:mx-auto bg-white rounded-lg p-1  text-transparent font-extrabold font-outline-2 text-center my-5">
			// 				Landing Page Design - Tailwind CSS
			// 			</h1>
			// 			<p className="mx-10 sm:mx-auto bg-white rounded-lg p-4 text-sm font-medium mt-5">
			// 		 	Used TailwindCSS in order tom make fronted design faster.
			// 			</p>
			// 		</div>
			// 	</div>

			// </div>

			// <div id="section" className="scroll-section flex flex-col flex-nowrap h-screen w-screen p-4 m-2 border-y-black border-y-4 text-center">

			// 	<div className="w-full">
			// 		<h1 className="static tracking-wide p-4 my-4  font-extrabold text-6xl font-outline-4 text-transparent hover:underline cursor-pointer w-[25rem] bg-cyan-200 bg-opacity-50 text-right">
			// 		Project 6
			// 		</h1>
			// 	</div>	
			// <div className="flex sm:flex-row flex-col flex-nowrap justify-evenly align-center my-auto">
			// 	<div className="w-3/5 sm:w-auto mx-auto">
			// 		<img className="lg:w-2/3 w-full m-auto mt-2 rounded cursor-pointer scale-100 duration-300 hover:scale-110 hover:duration-300" src="src/Assets/project6.webp" />
			// 	</div>
			// 		<div className="m-auto flex flex-col px-5">
			// 			<h1 className="p-auto mx-10 text-xl sm:text-5xl sm:font-outline-4 sm:mx-auto bg-white rounded-lg p-1  text-transparent font-extrabold font-outline-2 text-center my-5">
			// 				AJUL - Blog Website
			// 			</h1>
			// 			<p className="mx-10 sm:mx-auto bg-white rounded-lg p-4 text-sm font-medium mt-5">
			// 		 	Used Next.JS side rendering - ReactJS Hooks, TailwindCSS, GraphQL mutations and HyGraphAPI.

			// 			</p>
			// 		</div>
			// 	</div>

			// </div>

			// <div id="section" className="scroll-section flex flex-col flex-nowrap h-screen w-screen p-4 m-2 border-y-black border-y-4 text-center">

			// 	<div className="w-full">
			// 		<h1 className="static tracking-wide p-4 my-4  font-extrabold text-6xl font-outline-4 text-transparent hover:underline cursor-pointer w-[25rem] bg-cyan-200 bg-opacity-50 text-right">
			// 		Project 7
			// 		</h1>
			// 	</div>	
			// <div className="flex sm:flex-row flex-col flex-nowrap justify-evenly align-center my-auto">
			// 	<div className="w-3/5 sm:w-auto mx-auto">
			// 		<img className="lg:w-2/3 w-full m-auto mt-2 rounded cursor-pointer scale-100 duration-300 hover:scale-110 hover:duration-300" src="src/Assets/project7.webp" />
			// 	</div>
			// 		<div className="m-auto flex flex-col px-5">
			// 			<h1 className="p-auto mx-10 text-xl sm:text-5xl sm:font-outline-4 sm:mx-auto bg-white rounded-lg p-1  text-transparent font-extrabold font-outline-2 text-center my-5">
			// 				C-Art & Studios - Ecommerce
			// 			</h1>
			// 			<p className="mx-10 sm:mx-auto bg-white rounded-lg p-4 text-sm font-medium mt-5">
			// 		 		Next.js Ecommerce in which I complemented ReactJS Hooks, TailwindCSS and MongoDB
			// 			</p>
			// 		</div>
			// 	</div>

			// </div>