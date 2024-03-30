import home from "../assets/icons/Home.svg";
import plus from "../assets/icons/briefcase.svg";
import projects from "../assets/icons/box.svg";
import theme from "../assets/icons/sun.svg";
import about from "../assets/icons/contact.svg";
import idea from "../assets/icons/idea.svg";

import { useContext } from "react";
import { ThemeContext } from "../Theme";
const Topnav = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="topnav">
      <div className="logo-container">
        <a href="/">
          <img src={idea} alt={idea} className="ico" />
        </a>
      </div>
      <div className="icons">
        <img src={home} alt={home} className="ico" />
        <img src={about} alt={about} className="ico" />
        <img src={projects} alt={projects} className="ico" />
        <img src={plus} alt={plus} className="ico" />
      </div>
      <div className="action">
        <img src={theme} alt="" onClick={toggleTheme} className="ico" />
        <button>
          <img src={plus} alt={plus} className="ico" />
          Hire Me
        </button>
      </div>
    </nav>
  );
};
export default Topnav;
