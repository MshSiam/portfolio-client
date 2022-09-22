import { Typography } from "@mui/material"
import React from "react"
import "./Projects.css"
import { AiOutlineProject } from "react-icons/ai"
import { FaRegSmileWink } from "react-icons/fa"
import techmart from "../../images/website/techmart.png"
import mall from "../../images/website/mall.png"
import emart from "../../images/website/emart.png"
import bike from "../../images/website/bike.png"
import food from "../../images/website/food.png"
import realstate from "../../images/website/realstate.png"

const Projects = () => {
  return (
    <div className="projects">
      <Typography variant="h3">
        PROJECTS <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        <>
          <a
            href="https://msh-siam-ecommerce.netlify.app"
            className="projectCard"
            target="_blank">
            <div>
              <img src={techmart} alt="project" />
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
          <a
            href="https://mall-heroku-mshsiam.netlify.app"
            className="projectCard"
            target="_blank">
            <div>
              <img src={mall} alt="project" />
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
          <a
            href="https://emart-mshsiam.netlify.app"
            className="projectCard"
            target="_blank">
            <div>
              <img src={emart} alt="project" />
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
          <a
            href="https://bike-website-ac530.web.app/"
            className="projectCard"
            target="_blank">
            <div>
              <img src={bike} alt="project" />
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
          <a
            href="https://hot-onion-msh-siam.netlify.app"
            className="projectCard"
            target="_blank">
            <div>
              <img src={food} alt="project" />
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
          <a
            href="https://real-state-house-siam.netlify.app"
            className="projectCard"
            target="_blank">
            <div>
              <img src={realstate} alt="project" />
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
