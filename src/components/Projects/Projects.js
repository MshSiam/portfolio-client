import { Typography } from "@mui/material"
import React from "react"
import "./Projects.css"
import { AiOutlineProject } from "react-icons/ai"
import { FaRegSmileWink } from "react-icons/fa"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const projects = [1, 2, 3, 4]

  return (
    <div className="projects">
      <Typography variant="h3">
        PROJECTS <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            url="https://www.facebook.com/seam.kenway/"
            projectImage="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/295321205_3241678329404743_8258333138038489774_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=KtFhVqipVHIAX-XGE1J&_nc_ht=scontent.fdac110-1.fna&oh=00_AT_iMvKP37TN4roW_-JcNuLE0-jCQfR6w1S7GVSrVbQBcQ&oe=632F33D4"
            projectTitle="demo testing"
            projectDescreption="demodescription"
            technologies="demo technologies"
          />
        ))}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem Ubuntu Mono" }}>
        All The Projects Shown Avobe are Made By Me . <FaRegSmileWink />
      </Typography>
    </div>
  )
}

export default Projects
