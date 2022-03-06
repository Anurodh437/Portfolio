import React, { useState } from "react";
import Particle from "../components/Particle";
import axios from "axios";
import formSvg from "../assets/formSvg.svg";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSent = async (e) => {
    e.preventDefault();
    setSent(true);
    try {
      await axios.post("/send_mail", {
        name,
        email,
        message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-16 bg-gray-900 text-white">
      <Particle />
      {sent && (
        <div className="flex flex-col items-center pt-5">
          <h1 className="text-lg">Your Message is sent successfully!</h1>
          <p className="text-base">Thank You, I'll Contact you Soon</p>
        </div>
      )}
      <div className="flex justify-center py-12 px-5 md:px-20">
        <div className="contactForm text-gray-100 border-2 rounded border-loving">
          <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-10 mx-auto text-white rounded-lg shadow-lg">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Lets talk about everything!
                </h2>
                <div className="text-gray-400 text-lg mt-4">
                  Send me an <span className="underline">email</span>
                  {"."}
                </div>
              </div>
              <div className="mt-8 text-center">
                <img src={formSvg} alt="" />
              </div>
            </div>
            <form onSubmit={handleSent}>
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
