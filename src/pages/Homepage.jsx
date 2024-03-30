import bookmark from "../assets/icons/ok.svg";
import Projects from "../components/Projects";
import logo from "../assets/icons/Grouplogo.svg";
import avatar from "../assets/icons/Frame 6.svg"
import plus from "../assets/icons/briefcase.svg"


const Homepage = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="head">
          <p className="role"> &#8226; Software Engineer</p>
          <p className="avail">
            {" "}
            <img src={bookmark} alt={bookmark} className="ico" /> Available for
            work
          </p>
        </div>
        <div className="details">
          <img src={avatar} alt="" className="avtr" />
          <div className="texts">
            <h1>I am Gideon Appau.</h1>
            <p>Software Engineer from Takoradi, Ghana.</p>
            <p>I design digital products with great experience.</p>
            <p>
              Currently building{" "}
              <span className="startup">
                <img src={logo} alt={logo} className="icon" />
                Cirv
              </span>
            </p>
            <div className="btns">
              <button className="primary-btn">
                <img src={plus} alt="" className="ico" />
                Hire Gideon
              </button>
              <button className="secondary-btn">
                <img src={bookmark} alt="" className="ico" />
                Email Gideon
              </button>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
};
export default Homepage;
