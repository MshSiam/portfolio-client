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
        <>
          <a href="" className="projectCard" target="_blank">
            <div>
              <img src="" alt="project" />
              <Typography variant="h5">projectTitle</Typography>
            </div>
            <div>
              <Typography variant="h4">About Project</Typography>
              <Typography>projectDescreption</Typography>
              <Typography variant="h6">Tech Stack : technologies</Typography>
            </div>
          </a>
        </>
        <>
          <a href="" className="projectCard" target="_blank">
            <div>
              <img src="" alt="project" />
              <Typography variant="h5">projectTitle</Typography>
            </div>
            <div>
              <Typography variant="h4">About Project</Typography>
              <Typography>projectDescreption</Typography>
              <Typography variant="h6">Tech Stack : technologies</Typography>
            </div>
          </a>
        </>
        <>
          <a href="" className="projectCard" target="_blank">
            <div>
              <img src="" alt="project" />
              <Typography variant="h5">projectTitle</Typography>
            </div>
            <div>
              <Typography variant="h4">About Project</Typography>
              <Typography>projectDescreption</Typography>
              <Typography variant="h6">Tech Stack : technologies</Typography>
            </div>
          </a>
        </>
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem Ubuntu Mono" }}>
        All The Projects Shown Avobe are Made By Me . <FaRegSmileWink />
      </Typography>
    </div>
  )
}

export default Projects
