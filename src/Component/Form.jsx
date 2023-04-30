import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_hntdxtd';
    const templateId = 'template_feqntbz';
    const userId = 'YAQKHSrzpNIG9T6wQ';

    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: 'Carlos Carhuas',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        alert('There was an error sending your message. Please try again later.');
      });
  };

	return(
		<div className="w-4/5 p-5 mx-auto h-full bg-gray-700">
			<h1 className="static tracking-wider p-4 my-4 font-extrabold text-6xl font-outline-4 text-transparent w-[17rem] bg-white bg-opacity-50 "> <p className="w-10 cursor-pointer hover:underline">Contact</p></h1>

    	<div className=" m-2">
    	<form 
    	className=" flex flex-col justify-center align-center" 
    	method="post" onSubmit={handleSubmit}>
	        <label className="text-3xl font-bold font-outline-2 text-transparent bg-white w-40 py-1 my-2 rounded-xl bg-opacity-25" htmlFor="name">
	        		<p className="text-center">Name:</p>
	        </label>
	        <input className="caret-white flex flex-col align-ceter justify-center py-3 rounded bg-gray-400 text-2xl font-medium px-4 tracking-wide placeholder:text-gray-700 placeholder:font-bold placeholder:px-6" placeholder="enter your name" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required></input>
	        
	        <label className="text-3xl font-bold font-outline-2 text-transparent bg-white w-40 py-1 my-2 rounded-xl bg-opacity-25" htmlFor="email">
	        		<p className="text-center">Email:</p>
	        </label>
	        <input className="caret-white flex flex-col align-ceter justify-center py-3 rounded bg-gray-400 text-2xl font-medium px-4 tracking-wide placeholder:text-gray-700 placeholder:font-bold placeholder:px-6" placeholder="enter your email" type="email" name="user-email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
	        
	        <label className="text-3xl font-bold font-outline-2 text-transparent bg-white w-40 py-1 my-2 rounded-xl bg-opacity-25" htmlFor="subject" placeholder="enter the subject">
	        		<p className="text-center">Subject:</p>
	        </label>
	        <input className="caret-white flex flex-col align-ceter justify-center py-3 rounded bg-gray-400 text-2xl font-medium px-4 tracking-wide placeholder:text-gray-700 placeholder:font-bold placeholder:px-6" placeholder="enter the subject" type="text" name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required></input>
	        
	        <label className="text-3xl font-bold font-outline-2 text-transparent bg-white w-40 py-1 my-2 rounded-xl bg-opacity-25" htmlFor="message">
	        		<p className="text-center">Message:</p>
	        </label>
	        <textarea className="flex flex-col align-ceter justify-center py-3 rounded bg-gray-400 text-2xl font-medium px-4 tracking-wide placeholder:text-gray-700 placeholder:font-bold placeholder:px-6" placeholder="enter the message" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
	        
	        <button className="mt-10 rounded-lg border mx-auto py-2 px-4 text-white font-bold transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300 bg-opacity-25" type="submit">Send</button>
    	</form>
    		
    	</div>
		</div>
		);
};

export default Form;