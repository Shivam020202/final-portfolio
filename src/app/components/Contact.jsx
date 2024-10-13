"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="md:border-2 border-[#1c1c1c] rounded-xl w-full mb-10 md:p-8 p-4 md:bg-[#161616] md:bg-opacity-60 shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-300 mb-6">Contact Me</h2>
      <div className="flex">
        <form className="w-full md:pr-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full transition-all border-2 border-[#252525] duration-200 bg-[#1C1C1C] text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full transition-all border-2 border-[#252525] duration-200 bg-[#1C1C1C] text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full transition-all border-2 border-[#252525] duration-200 bg-[#1C1C1C] text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your sweet message ..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full transition-all border-2 border-[#252525] duration-200 bg-[#1C1C1C] text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#39177D] border-2 border-[#551CAF] text-white py-3 rounded-lg hover:bg-opacity-70 hover:border-opacity-55 transition duration-300"
          >
            Send / Shoot
          </button>
        </form>
        <div className="md:w-1/3 md:flex hidden items-center justify-center">
          <div className="w-48 h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
            <Image
              src="https://img.freepik.com/free-vector/grey-send-paper-airplane_78370-849.jpg"
              alt="hero"
              width={800}
              height={400}
              className="object-cover w-[100%] h-48 rounded-lg"
            />
          </div>
        </div>
      </div>
      {status && <p className="mt-4 text-sm text-[#3f3f3f]">{status}</p>}
      <p className="bg-black border-2 border-[#1c1c1c] w-full p-2 rounded-lg mt-4 text-sm text-gray-500 ">
        Note - Custom Backend Integrated ! Have fun , don&apos;t spam
      </p>
    </div>
  );
};

export default ContactForm;
