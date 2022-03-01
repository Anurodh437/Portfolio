import React from "react";
import Particle from "../components/Particle";
import ProjectCard from "../components/ProjectCard";
import birthday from "../assets/birthdayplanner.png";
import findyourdeveloper from "../assets/findyourdeveloper.png";
import notemaker from "../assets/notemaker.png";

const Projects = () => {
  return (
    <div className="pt-16 bg-gray-900 text-white">
      <Particle />
      <div className="text-center">
        <h1 className="mt-24 text-4xl px-4">My Recent Projects</h1>
        <p className="mt-3 sm:mt-2 text-base tracking-wider px-4 ">
          Here are few Projects I've worked on recently
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly mt-16 sm:space-x-4 md:px-4">
        <div>
          <ProjectCard
            img={findyourdeveloper}
            title="FindYourDeveloper"
            description="A platform for all those developers who are eager to stay updated and want to connect with new developers."
            link="https://github.com/Anurodh437/FindYourDeveloper"
          />
        </div>
        <div>
          <ProjectCard
            img={birthday}
            title="BirthdayPlanner"
            description="A website to plan birthdays for your loved ones just at one place."
            link="https://github.com/Anurodh437/BirthdayPlanner"
          />
        </div>
        <div>
          <ProjectCard
            img={notemaker}
            title="NoteMaker"
            description="Best place to create all your notes at one place and safer."
            link="https://github.com/Anurodh437/Notemaker_Mern_WebApp"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
