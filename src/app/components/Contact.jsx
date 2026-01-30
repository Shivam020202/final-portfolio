"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Initiating transmission...");
    // Simulate send
    setTimeout(() => {
      setStatus("Transmission Successful. Stand by for response.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto led-wrapper p-[2px] rounded-2xl">
        <div className="led-content bg-[#080808] rounded-2xl p-8 md:p-16 relative overflow-hidden">
          {/* Background Lines */}
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">
                  CONTACT_HUB
                </h2>
                <p className="text-gray-400 mb-8 font-light">
                  Ready to deploy your next project? Initialize communication
                  protocol below. Available for freelance and collaborative
                  missions.
                </p>
              </div>

              <div className="space-y-4 text-sm font-mono text-gray-300">
                <div className="flex items-center gap-4 p-4 border border-white/10 rounded bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-green-400">EMAIL ::</span>
                  <a href="mailto:shivam.work222@gmail.com">
                    shivam.work222@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 p-4 border border-white/10 rounded bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-blue-400">PHONE ::</span>
                  <a href="tel:+919110068182">+91 9110068182</a>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://github.com/Shivam020202"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    GITHUB
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href="https://instagram.com"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    INSTAGRAM
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">
                  Identify
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ENTER DESIGNATION"
                  className="w-full bg-[#111] border border-white/10 p-4 text-white focus:outline-none focus:border-purple-500 transition-colors rounded-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">
                  Frequency
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ENTER EMAIL ADDRESS"
                  className="w-full bg-[#111] border border-white/10 p-4 text-white focus:outline-none focus:border-purple-500 transition-colors rounded-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">
                  Transmission Payload
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="ENTER MESSAGE DATA..."
                  className="w-full bg-[#111] border border-white/10 p-4 text-white focus:outline-none focus:border-purple-500 transition-colors rounded-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-bold tracking-[0.2em] uppercase hover:bg-gray-300 transition-colors"
              >
                Execute Transmission
              </button>

              {status && (
                <div className="text-xs font-mono text-green-400 mt-4 text-center animate-pulse">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
