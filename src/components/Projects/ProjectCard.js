import { Delete } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import React from "react"
import "./Projects.css"

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  projectDescreption,
  technologies,
  isAdmin = false
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="_blank">
        <div>
          <img src={projectImage} alt="project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{projectDescreption}</Typography>
          <Typography variant="h6">Tech Stack : {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          <Delete />
        </Button>
      )}
    </>
  )
}

export default ProjectCard
