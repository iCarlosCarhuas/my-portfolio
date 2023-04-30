import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Layout(){

const layoutRef = useRef();
	const [isLayoutVisible, setIsLayoutVisible] = useState();
	console.log("My Layout is Visible?" , isLayoutVisible)
	useEffect( () => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setIsLayoutVisible(entry.isIntersecting)
			},
			{
		}
		)
		observer.observe(layoutRef.current);
	},[])

	let number = 100;
	let number2 = 90;
	let number3 = 80;
	let number4 = 70;
	let number5 = 90;
	let number6 = 60;
	let number7 = 50;
	let number8 = 50;
	let number9 = 80;


	useEffect(() => {
    if (isLayoutVisible) {
        gsap.to("#progress-num", {
            duration: 3,
            innerText: number + "%",
            ease: "power1.out",
            snap: {innerText: 1}
        });
    	} else {
        	gsap.set("#progress-num", { innerText: "0" });
    	}
	}, [isLayoutVisible]);

	useEffect(() => {
    if (isLayoutVisible) {
        gsap.to("#progress-num2", {
            duration: 4,
            innerText: number2 + "%",
            ease: "power1.out",
            snap: {innerText: 1}
        });
    	} else {
        	gsap.set("#progress-num2", { innerText: "0" });
    	}
	}, [isLayoutVisible]);

	useEffect(() => {
    if (isLayoutVisible) {
        gsap.to("#progress-num3", {
            duration: 5,
            innerText: number3 + "%",
            ease: "power1.out",
            snap: {innerText: 1}
        });
    	} else {
        	gsap.set("#progress-num3", { innerText: "0" });
    	}
	}, [isLayoutVisible]);

	useEffect(() => {
    if (isLayoutVisible) {
        gsap.to("#progress-num4", {
            duration: 6,
            innerText: number4 + "%",
            ease: "power1.out",
            snap: {innerText: 1}
        });
    	} else {
        	gsap.set("#progress-num4", { innerText: "0" });
    	}
	}, [isLayoutVisible]);

	useEffect(() => {
    if (isLayoutVisible) {
        gsap.to("#progress-num5", {
            duration: 7,
            innerText: number5 + "%",
            ease: "power1.out",
            snap: {innerText: 1}
        });
    	} else {
        	gsap.set("#progress-num5", { innerText: "0" });
    	}
	}, [isLayoutVisible]);

	useEffect(() => {
    if (isLayoutVisible) {
        gsap.to("#progress-num6", {
            duration: 8,
            innerText: number6 + "%",
            ease: "power1.out",
            snap: {innerText: 1}
        });
    	} else {
        	gsap.set("#progress-num6", { innerText: "0" });
    	}
	}, [isLayoutVisible]);

	useEffect(() => {
    if (isLayoutVisible) {
        gsap.to("#progress-num7", {
            duration: 9,
            innerText: number7 + "%",
            ease: "power1.out",
            snap: {innerText: 1}
        });
    	} else {
        	gsap.set("#progress-num7", { innerText: "0" });
    	}
	}, [isLayoutVisible]);

	useEffect(() => {
    if (isLayoutVisible) {
        gsap.to("#progress-num8", {
            duration: 10,
            innerText: number8 + "%",
            ease: "power1.out",
            snap: {innerText: 1}
        });
    	} else {
        	gsap.set("#progress-num8", { innerText: "0" });
    	}
	}, [isLayoutVisible]);

	useEffect(() => {
    if (isLayoutVisible) {
        gsap.to("#progress-num9", {
            duration: 11,
            innerText: number9 + "%",
            ease: "power1.out",
            snap: {innerText: 1}
        });
    	} else {
        	gsap.set("#progress-num9", { innerText: "0" });
    	}
	}, [isLayoutVisible]);
	return (
		<div ref={layoutRef} className="md:flex-row md:flex-wrap flex flex-col flex-wrap font-Dosis bg-white border-8 border-y-white border-opacity-0 bg-opacity-0 justify-around">
			<h1 className="md:w-full text-center font-extrabold text-6xl font-outline-4 text-transparent hover:underline py-5 cursor-pointer mx-auto">
				Skills#
			</h1>
				<div className="z-20 md:w-1/3 p-4 mx-10 rounded-b-2xl border-orange-600 border-b-8 border-r-2  border-t-2 border-l-8 flex flex-row flex-wrap bg-white bg-opacity-0 scale-95 hover:scale-100 ease-in duration-300 cursor-pointer">
					<h1 className="pb-5 w-full text-center text-5xl font-extrabold">HTML5</h1>
					<div className="w-full flex flex-row justify-center mx-auto justify-around items-center">
						<img className="py-auto w-64" src="./Assets/html5.svg" />
						<div id="progress-num">
							{/*num*/}
						</div>
					</div>
					<div className="my-auto flex rounded-lg bg-white bg-opacity-30 w-full mt-5">
						<div className={`bar
							${isLayoutVisible ? "html" : ""}
						`}>
						{/*bar*/}
						</div>
					</div>
				</div>
				<div className="md:w-1/3 p-4 mx-10 rounded-b-2xl border-blue-700 border-b-8 border-r-2  border-t-2 border-l-8 flex flex-row flex-wrap bg-white bg-opacity-0 scale-95 hover:scale-100 ease-in duration-300 cursor-pointer">
					<h1 className="pb-5 w-full text-center md text-5xl font-extrabold">CSS3</h1>
					<div className="w-full flex flex-row justify-center mx-auto justify-around items-center">
						<img className="py-auto w-64" src="./Assets/css3.svg" />
						<div id="progress-num2" className="flex justify-center">
							{/*num*/}
						</div>
					</div>
					<div className="my-auto flex rounded-lg bg-white bg-opacity-30 w-full mt-5">
						<div 
						className={`bar2
							${isLayoutVisible ? "css" : ""}
						`}>
						{/*bar*/}
						</div>
					</div>
				</div>
				<div className="md:w-1/3 p-4 mx-10 rounded-b-2xl border-yellow-300 border-b-8 border-r-2  border-t-2 border-l-8 flex flex-row flex-wrap bg-white bg-opacity-0 scale-95 hover:scale-100 ease-in duration-300 cursor-pointer">
					<h1 className="pb-5 w-full text-center md:text-3xl text-5xl font-extrabold">JavaScript</h1>
					<div className="w-full flex flex-row justify-center mx-auto justify-around items-center">
						<img className="py-auto w-64" src="./Assets/js.svg" />
						<div id="progress-num3">
							{/*num*/}
						</div>
					</div>
					<div className="my-auto flex rounded-lg bg-white bg-opacity-30 w-full mt-5">
						<div 
						className={`bar3
							${isLayoutVisible ? "js" : ""}
						`}>
							{/*bar*/}
						</div>
					</div>
				</div>
				<div className="md:w-1/3 p-4 mx-10 rounded-b-2xl border-yellow-400 border-b-8 border-r-2  border-t-2 border-l-8 flex flex-row flex-wrap bg-white bg-opacity-0 scale-95 hover:scale-100 ease-in duration-300 cursor-pointer">
					<h1 className="pb-5 w-full text-center md:text-3xl text-5xl font-extrabold">EcmaScript</h1>
					<div className="w-full flex flex-row justify-center justify-around items-center">
						<img className="py-auto w-64" src="./Assets/es6.svg" />
						<div id="progress-num4" className="ml-2">
							{/*num*/}
						</div>
					</div>
					<div className="my-auto flex  rounded-lg bg-white bg-opacity-30 w-full mt-5">
						<div 
						className={`bar4
						${isLayoutVisible ? "es6" : ""}
						`}>
							{/*bar*/}
						</div>
					</div>
				</div>
				<div className="md:w-1/3 p-4 mx-10 rounded-b-2xl border-cyan-500 border-b-8 border-r-2  border-t-2 border-l-8 flex flex-row flex-wrap bg-white bg-opacity-0 scale-95 hover:scale-100 ease-in duration-300 cursor-pointer">
					<h1 className="pb-5 w-full text-center md:text-3xl text-5xl font-extrabold">TailwindCSS</h1>
					<div className="w-full flex flex-row justify-center justify-around items-center">
						<img className="py-auto w-64" src="./Assets/tailwindcss.svg" />
						<div id="progress-num5">
							{/*num*/}
						</div>
					</div>
					<div className="my-auto flex rounded-lg bg-white bg-opacity-30 w-full">
						<div 
						className={`bar5
						${isLayoutVisible ? "tailwindcss" : ""}
						`}>
							{/*bar*/}
						</div>
					</div>
				</div>
				<div className="md:w-1/3 p-4 mx-10 rounded-b-2xl border-cyan-300 border-b-8 border-r-2  border-t-2 border-l-8 flex flex-row flex-wrap bg-white bg-opacity-0 scale-95 hover:scale-100 ease-in duration-300 cursor-pointer">
					<h1 className="w-full text-center md:text-3xl text-5xl font-extrabold">ReactJS</h1>
					<div className="w-full flex flex-row justify-center justify-around items-center">
						<img className="py-auto w-64 " src="./Assets/react.svg" />
						<div id="progress-num6">
							{/*num*/}
						</div>
					</div>
					<div className="my-auto flex rounded-lg bg-white bg-opacity-30 w-full mt-5">
						<div 
						className={`bar6
						${isLayoutVisible ? "react" : ""}
						`}>
							{/*bar*/}
						</div>
					</div>
				</div>

				<div className="md:w-1/3 p-4 mx-10 rounded-b-2xl border-emerald-600 border-b-8 border-r-2  border-t-2 border-l-8 flex flex-row flex-wrap bg-white bg-opacity-0 scale-95 hover:scale-100 ease-in duration-300 cursor-pointer">
					<h1 className="pb-5 w-full text-center md:text-4xl text-5xl font-extrabold">MongoDB</h1>
					<div className="w-full flex flex-row justify-center justify-around items-center">
						<img className="w-52" src="./Assets/mongodb.svg" />
						<div id="progress-num7">
							{/*num*/}
						</div>
					</div>
					<div className="my-auto flex rounded-lg bg-white bg-opacity-30 w-full mt-5">
						<div 
						className={`bar7
						${isLayoutVisible ? "mongodb" : ""}
						`}>
							{/*bar*/}
						</div>
					</div>
				</div>
				<div className="md:w-1/3 p-4 mx-10 rounded-b-2xl border-pink-400 border-b-8 border-r-2  border-t-2 border-l-8 flex flex-row flex-wrap bg-white bg-opacity-0 scale-95 hover:scale-100 ease-in duration-300 cursor-pointer">
					<h1 className="pb-5 w-full text-center md:text-4xl text-5xl font-extrabold">GraphQL</h1>
					<div className="w-full flex flex-row justify-center mx-auto justify-around items-center">
						<img className="w-52" src="./Assets/graphql.svg" />
						<div id="progress-num8">
							{/*num*/}
						</div>
					</div>
					<div className="my-auto flex rounded-lg bg-white bg-opacity-30 w-full mt-5">
						<div 
						className={`bar8
						${isLayoutVisible ? "graphql" : ""}
						`}>
							{/*bar*/}
						</div>
					</div>
				</div>
				<div className="p-4 mx-10 rounded-b-2xl border-orange-600 border-b-8 border-r-2  border-t-2 border-l-8 flex flex-row flex-wrap bg-white bg-opacity-0 scale-95 hover:scale-100 ease-in duration-300 cursor-pointer">
					<h1 className="pb-5 w-full text-center text-5xl font-extrabold">Git</h1>
					<div className="w-full flex flex-row justify-around items-center">
						<img className="w-52" src="./Assets/git.svg" />
						<div id="progress-num9">
							{/*num*/}
						</div>
					</div>
					<div className="my-auto flex rounded-lg bg-white bg-opacity-30 w-full mt-5">
						<div 
						className={`bar9
						${isLayoutVisible ? "git" : ""}
						`}>
							{/*bar*/}
						</div>
					</div>
				</div>
					
			</div>
	)
}