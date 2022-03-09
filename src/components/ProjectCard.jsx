import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="flex space-x-5">
      <div className="flex flex-col max-w-xs sm:max-w-lg lg:max-w-md bg-transparent rounded mb-20 h-96 sm:h-200 lg:h-100 sideshad">
        <a href={props.img} target="_blank" rel="noreferrer">
          <img className="rounded-t" src={props.img} alt="" />
        </a>
        <div className="p-5 text-justify">
            <h5 className="mb-2 text-2xl font-bold tracking-wide text-center pt-5">
              {props.title}
            </h5>
          <p className="mb-3 font-normal pt-2">{props.description}</p>
          <div className="flex justify-center pt-2">
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex space-x-1 items-center py-2 px-3 text-sm font-medium text-center text-white bg-loving rounded-lg hover:bg-violet-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18px"
                height="18px"
              >
                <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
              </svg>
              <span className="text-base">View Project</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
