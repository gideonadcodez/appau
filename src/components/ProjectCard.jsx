import logo from "../assets/icons/logo.svg";

const ProjectCard = () => {
  return (
    <div className="card">
      <img src={logo} alt={logo} className="ico" />
      <p className="title">Upnote</p>
      <p className="content">
        Write better and efficient notes with Upnote. Compatible for offline and
        online usage. Lorem inpusm dolor site amet
      </p>
      <a href="#">See for yourself</a>
    </div>
  );
};

export default ProjectCard;
