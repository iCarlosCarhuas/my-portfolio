import React, { useState, useEffect, useRef } from "react"

import Hero from "./Component/Hero.jsx"
import Layout from "./Component/Layout.jsx"

import Project from "./Component/Project.jsx"
import Form from "./Component/Form.jsx"
import Footer from "./Component/Footer.jsx"


import "./index.css"
import "./styles.css"

const App = () => {

	const myRef = useRef();
	const [isProjectVisible, setIsProjectVisible] = useState();
	console.log("My Header is Visible?" , isProjectVisible)
	useEffect( () => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setIsProjectVisible(entry.isIntersecting)
			},
			{
		}
		)
		observer.observe(myRef.current);
	},[])


	/*scrollToSection*/

	const hero = useRef(null);
	const layout = useRef(null);
	const project = useRef(null);
	const contactform = useRef(null);

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	}

	return(
		<div>
			<div  
				className={`
				transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  w-4/5 px-4 py-2 my-2 bg-gray-600 mx-auto flex flex-row justify-between 
				
					${isProjectVisible ? "" : "header"}
				`}

				style={{
				position: isProjectVisible ? "" : "sticky",
				top: isProjectVisible ? "" : "5px",
				zIndex: "999",
				}}
				>
				<a href="">
				<img className="hover:scale-110 duration-300 bg-white p-2 rounded-full w-20" src="./Logo.png" alt="logo"/>
				</a>
				<div 
				className="navbar mt-1 font-Shantell flex justify-center justify-between items-center font-medium">
					<ul className="flex">
						<li onClick={() => scrollToSection(hero)} className="link cursor-pointer"><p className="nav">About</p></li>
						<li onClick={() => scrollToSection(layout)} className="link cursor-pointer mx-4"><p className="nav">Skills</p></li>
						<li onClick={() => scrollToSection(project)} className="link cursor-pointer mr-4"><p className="nav">Projects</p></li>
						<li onClick={() => scrollToSection(contactform)} className="link cursor-pointer"><p className="nav">Contact</p></li>
					</ul> 
				</div>
			</div>

			<div ref={hero} className="hero bg-opacity-50 bg-gray-500 w-4/5 mx-auto my-10">					
					<Hero />
				<div ref={layout} className="layout mb-20">
					<Layout />
				</div>
			</div>
			<div ref={project} className="project"></div>
			<div ref={myRef} className="project-container">
				<Project />
			</div>
			<div ref={contactform} className="contactForm pt-40 bg-gray-900 bg-opacity-75">
			<div className= "rounded-t-full bg-gray-800">
				<Form />
			</div>		
			</div>
			<div className=" bg-black bg-opacity-75">
			<Footer />
			</div>
			
		</div>

	)
}

export default App;