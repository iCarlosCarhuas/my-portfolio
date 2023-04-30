export default function Hero(){
	return(
		<div className="w-full p-4 flex flex-col font-Dosis mt-10 ">
			<div className="lg:flex items-center md:flex md:flex-row flex-wrap h-full p-4 mb-4 bg-white bg-opacity-75 rounded-b-2xl border-gray-800 border-b-8">
				<div className="md:w-1/2 border-2 p-4 border-black h-full">
					<h1 className="text-2xl font-medium">About <span className="font-bold hover:underline text-sm cursor-pointer">Me#</span></h1>
					<div className="mt-4 text-justify">
						<p className="text-lg">

							Hello there! I'm Carlos , and I'm a freelancer junior full stack developer with a passion for building high-quality, dynamic web applications. With experience in a range of programming languages and technologies, including HTML, CSS, JavaScript, React, Tailwind CSS, Git, MongoDB, ES6, and GraphQL, I'm confident in my ability to tackle any project that comes my way.

							Throughout my career, I've had the opportunity to work on a variety of exciting projects. From creating fun, interactive mini projects with JavaScript to building out a robust blog website and even an ecommerce platform, I've gained valuable experience in all aspects of web development. And, I'm always eager to take on new challenges and continue expanding my skills.

							Currently, I'm working on a few exciting projects, including a learning management system (LMS) and a mobile app built with Expo and React Native. I'm excited to see these projects come to life and to continue learning and growing as a developer.

							If you're looking for a motivated, detail-oriented, and skilled full stack developer to join your team, I'd love to chat. Let's work together to bring your vision to life!
						</p>
					</div>
				</div>
				<div className="sm:flex sm:p-4 md:flex md:flex-col md:w-1/2 md:items-center md:justify-center md:justify-around sm:flex sm:justify-around">
					<div className="xl:hidden flex justify-center items-center  p-10 sm:p-4">
						<img src="./Assets/mobile.svg" alt="svg"/>
					</div>
					<div className="flex justify-center items-center p-10 sm:p-4">
						<img src="./Assets/web.svg" alt="svg"/>
					</div>		
				</div>
			</div>
		</div>
	)
}