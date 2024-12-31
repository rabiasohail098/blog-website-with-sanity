'use client';

import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("An error occurred while sending the email.");
    }
  };
  return (
    <div>
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3  bg-cover bg-center bg-[url(/b.png)]  md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 bg-cover bg-center bg-[url(/b.png)]  rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-orange-300 text-outline tracking-widest text-xl">
            ADDRESS
          </h2>
          <p className="mt-1 text-outline text-green-200">
            Photo booth tattooed prism, portland taiyaki hoodie neutra
            typewriter
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-orange-300 text-outline tracking-widest text-xl">
            EMAIL
          </h2>
          <a className="text-indigo-500 text-outline text-lg leading-relaxed">rabiasohail1209@gmail.com</a>
          <h2 className="title-font font-semibold text-orange-300 text-outline tracking-widest text-xl mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-outline text-green-200">123-456-7890</p>
        </div>
      </div>
    </div>
    <form className="lg:w-1/3 md:w-1/2 bg-white rounded-lg h-fit bg-cover bg-center bg-[url(/b.png)]  flex flex-col px-8 md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-orange-300 text-outline  text-xl mb-1 font-bold title-font">
        Feedback
      </h2>
      <p className="leading-relaxed mb-5 text-green-200 text-outline">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-indigo-500 text-outline text-lg">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-blue-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-indigo-500 text-outline text-lg">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-blue-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-indigo-500 text-outline text-lg">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-blue-200  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className='block text-outline mx-auto md:ml-auto md:mr-auto p-2 text-lg mt-6 text-yellow-200 w-[120px] sm:w-[150px] border-2 rounded-lg  transition-all duration-300'>
        Submit
      </button>
      <p className="text-sm text-green-200 text-outline mt-3">
        Chicharrones blog helvetica normcore iceland tousled brook viral
        artisan.
      </p>
    </form>
  </div>
</section>

    </div>
  )
}

export default Page