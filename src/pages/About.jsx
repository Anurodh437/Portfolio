import React from "react";
import Particle from "../components/Particle";
import about from "../assets/about.png";
import TechStack from "../components/TechStack";
import ToolStack from "../components/ToolStack";
import GithubStats from "../components/GithubStats";
import { GoPrimitiveDot } from "react-icons/go";

const About = () => {
  return (
    <div className="pt-16 bg-gray-900 text-white h-full">
      <Particle />
      <div className="flex items-start justify-center space-x-10 flex-wrap pt-20 lg:pt-36">
        <div className="text-justify px-10 lg:px-0">
          <h1 className="text-center text-3xl">KNOW WHO I'M</h1>
          <p className="pt-10 text-justify text-xl tracking-wide">
            Hi Everyone, I am{" "}
            <span className="text-loving font-semibold">Anurodh Dubey</span>{" "}
            from <span className="text-loving">Renukoot, India</span>.
            <br /> I am currently pursuing B.Tech in Computer Science and
            <br />
            Engineering from GLA UNIVERSITY, MATHURA.
          </p>
          <p className="pt-10 text-xl">
            Apart from coding, some other activities that I love to do!
          </p>
          <div className="pl-10 pt-5">
            <div className="flex items-center space-x-2">
              <span>
                <GoPrimitiveDot />
              </span>
              <p>Playing Games</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <GoPrimitiveDot />
              </span>
              <p>Travelling</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <GoPrimitiveDot />
              </span>
              <p>Working on new Technologies to create something unique</p>
            </div>
          </div>
        </div>
        <div className="pt-20 lg:pt-0">
          <img src={about} width="450" alt="" />
        </div>
      </div>
      <div className="text-center pt-24">
        <h1 className="text-4xl">Technical Skills</h1>
        <div className="pt-5">
          <TechStack />
        </div>
        <h1 className="pt-10 text-4xl">Tools I use</h1>
        <div className="pt-5">
          <ToolStack />
        </div>
        <h1 className="text-4xl pt-10">Days I Code</h1>
        <div className="flex pt-8 justify-center">
          <GithubStats />
        </div>
      </div>
    </div>
  );
};

export default About;
