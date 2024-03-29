import ProjectCard from "./ProjectCard";

const Projects = () => {
  const cardDetails = {
    name: "Hello World",
    description: "lorem ipsum dolor sitg amet",
  };
  return (
    <div className="projects">
      <div className="head">
        <p className="role"> &#8226; Projects</p>
        <button className="primary-btn" style={{border: "none"}}>View All</button>
      </div>
      <div className="container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard/>
      </div>
    </div>
  );
};
export default Projects;
