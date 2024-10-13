import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="md:border-2 border-[#1c1c1c] rounded-xl w-full mb-10 md:p-8 p-4 md:bg-[#161616] md:bg-opacity-60  shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-300 mb-6">Contact Me</h2>
      <div className="flex">
        <form className="w-full md:pr-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full transition-all border-2 border-[#252525] duration-200 bg-[#1C1C1C] text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full transition-all  border-2 border-[#252525] duration-200 bg-[#1C1C1C] text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full transition-all  border-2 border-[#252525] duration-200 bg-[#1C1C1C] text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your sweet message ..."
              rows="4"
              className="w-full transition-all  border-2 border-[#252525] duration-200 bg-[#1C1C1C] text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full  bg-[#39177D] border-2 border-[#551CAF] text-white py-3 rounded-lg hover:bg-opacity-70 hover:border-opacity-55 transition duration-300"
          >
            Send / Shoot
          </button>
        </form>
        <div className="md:w-1/3 md:flex hidden items-center justify-center">
          {/* Place for your custom image */}
          <div className="w-48 h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
            <Image
              src="https://img.freepik.com/free-vector/grey-send-paper-airplane_78370-849.jpg?t=st=1728754580~exp=1728758180~hmac=fd93469cb326f2872b700e903e576d5365dc19b25e13dd8e3eb394890bba0729&w=1380"
              alt="hero"
              width={800}
              height={400}
              className="object-cover w-[100%] h-48 rounded-lg"
            />
          </div>
        </div>
      </div>
      <p className="bg-black border-2 border-[#1c1c1c] w-full p-2 rounded-lg mt-4 text-sm text-gray-500 ">
        Note - Backend pending , so no real data will be sent . Shoot an email ?
        @shivam.work222@gmail.com
      </p>
    </div>
  );
};

export default ContactForm;
