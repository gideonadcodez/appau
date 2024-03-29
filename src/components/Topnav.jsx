import summer from "../assets/icons/bold.svg";
import quote from "../assets/icons/quote_left.svg";
import hash from "../assets/icons/italic.svg";
import save from "../assets/icons/export_pdf.svg";
import bookmark from "../assets/icons/bookmark.svg";

import { useContext } from "react";
import { ThemeContext } from "../Theme";
const Topnav = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="topnav">
      <div className="logo-container">
        <a href="/">
          <img src={summer} alt={summer} className="ico" />
        </a>
      </div>
      <div className="icons">
        <img src={quote} alt={summer} className="ico" />
        <img src={hash} alt={summer} className="ico" />
        <img src={summer} alt={summer} className="ico" />
        <img src={save} alt={summer} className="ico" />
      </div>
      <div className="action">
        <img src={hash} alt="" onClick={toggleTheme} className="ico" />
        <button>
          <img src={bookmark} alt={summer} className="ico" />
          Hire Me
        </button>
      </div>
    </nav>
  );
};
export default Topnav;
