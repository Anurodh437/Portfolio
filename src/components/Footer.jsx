import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className="left-0 right-0 bottom-0 bg-grayish w-full py-4 md:pl-20 text-white footer">
      <div className="grid md:grid-rows-1 grid-rows-1 grid-flow-col gap-4">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-40 gap-3 text-center">
          <div>Designed and Developed by Anurodh Dubey</div>
          <div>Copyright &copy; 2021, Portfolio.</div>
          <div className="flex items-center justify-center space-x-5">
            <a
              href="https://github.com/Anurodh437"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/anurodh-dubey-997135176/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/dubey_anurodh/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
