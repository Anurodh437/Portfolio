import React from "react";
import rightimg from "../assets/home-main.svg";
import Particle from "../components/Particle";
import Type from "../components/Type";
import avatar from "../assets/avatar.svg";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <Particle />
      <section className="bg-gray-900 pt-32 lg:pt-16 text-white h-full">
        <div className="flex flex-row flex-wrap justify-evenly items-center pt-10 lg:pb-32">
          <div className="flex flex-col">
            <div className="flex items-center justify-center lg:justify-start px-2">
              <h1 className="text-4xl pb-2">Hii there</h1>
              <img
                className="ml-3 wave"
                width={40}
                src="https://img.icons8.com/emoji/48/000000/waving-hand-emoji.png"
                alt="hii"
              />
            </div>
            <div className="">
              <h1 className="text-4xl md:text-5xl flex px-10 sm:px-2">
                I'M <span className="flex pl-3 text-loving">ANURODH DUBEY</span>
              </h1>
              <div className="flex justify-center sm:justify-start text-2xl md:text-4xl text-loving font-semibold pt-10 px-2">
                <Type />
              </div>
            </div>
          </div>
          <div className="pt-10 md:pt-0">
            <img src={rightimg} width={500} alt="bgimage" />
          </div>
        </div>
      </section>
      <div className="h-1 bg-slate-800 w-full"></div>
      <section className="bg-gray-900 h-full pt-28 text-white">
        <div className="flex flex-row justify-center items-center md:space-x-28 flex-wrap">
          <div className="tracking-wider">
            <h1 className="text-center text-4xl px-10 md:px-0 md:text-5xl">LET ME <span className="text-loving">INTRODUCE</span> MYSELF</h1>
            <p className="pt-16 text-lg px-10">
              I fell in love with programming and I have at least learnt
              something, I think…
            </p>
            <br />
            <p className="text-lg px-10">
              I am fluent in classics like <i className="text-loving">Java, Javascript and Python</i>.
            </p>
            <br />
            <p className="text-lg px-10">
              My field of Interest's are building new <i className="text-loving">Web Technologies and
              <br />
              Products</i> and also in areas related to <i className="text-loving">Machine Learning</i>.
            </p>
            <br />
            <p className="text-lg px-10">
              Whenever possible, I also apply my passion for developing products
              <br />
              with <i className="text-loving">Node.js</i> and <i className="text-loving">Modern Javascript Library and Frameworks</i>&nbsp;like&nbsp;
              <i>React.js</i>.
            </p>
          </div>
          <div className="pt-14 lg:pt-0">
            <img src={avatar} alt="imga" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-20 pb-16">
          <h1 className="text-4xl">FIND ME ON</h1>
          <p className="pt-3">Feel free to <span className="text-loving">connect</span> &nbsp;with me</p>
          <div className="flex space-x-5 pt-8">
            <a
              href="https://github.com/Anurodh437"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoGithub className="text-loving bg-white text-4xl  p-1 transition hover:scale-105 shadow" />
            </a>
            <a
              href="https://www.linkedin.com/in/anurodh-dubey-997135176/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoLinkedin className="text-loving bg-white text-4xl p-1 transition hover:scale-105 shadow" />
            </a>
            <a
              href="https://www.instagram.com/dubey_anurodh/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoInstagram className="text-loving bg-white text-4xl  p-1 transition hover:scale-105 shadow" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
