//Let data.map out of GSAP animations because it makes permutable to each dynamic released data. 

import React, {useState, useRef, useEffect} from 'react';



export default function ProjectMap(props){
	return(
				<div className="my-auto flex flex-col flex-nowrap h-[100vh] w-screen p-4 m-2 border-y-black border-y-4 rounded-lg text-center">
				<div className="w-full">
					<h1 className="static tracking-wide p-4 my-4  font-extrabold text-6xl font-outline-4 text-transparent hover:underline cursor-pointer w-[25rem] bg-cyan-200 bg-opacity-50 text-right">
					{props.data.project}
					</h1>
				</div>	
					
				<div className="flex sm:flex-row flex-col flex-nowrap justify-evenly align-center my-auto">
					<div className="w-3/5 sm:w-auto mx-auto">
						<a className="image-link" href={props.data.link}  target="_blank">
						<img className="lg:w-2/3 w-full m-auto mt-2 rounded cursor-pointer scale-100 duration-300 hover:scale-110 hover:duration-300" src={`./Assets/${props.data.image}`}/>
						<div className="overlay"></div>
						<span className="rounded-xl bg-black py-5 px-10 bg-opacity-50  view-text">View</span>
						</a>
					</div>
					<div className="m-auto flex flex-col px-5">
						<h1 className="p-auto mx-10 text-xl sm:text-5xl sm:font-outline-4 sm:mx-auto bg-white rounded-lg p-1  text-transparent font-extrabold font-outline-2 text-center my-5">
							{props.data.title}
						</h1>
						<p className="mx-10 sm:mx-auto bg-white rounded-lg p-4 text-sm font-medium mt-5">
					 		{props.data.description}
						</p>
					</div>
				</div>
				</div>
		)
}
