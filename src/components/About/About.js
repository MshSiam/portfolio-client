import { Typography } from "@mui/material"
import React from "react"
import "./About.css"

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is sample Quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            className="aboutAvatar"
            src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/295321205_3241678329404743_8258333138038489774_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=KtFhVqipVHIAX-XGE1J&_nc_ht=scontent.fdac110-1.fna&oh=00_AT_iMvKP37TN4roW_-JcNuLE0-jCQfR6w1S7GVSrVbQBcQ&oe=632F33D4"
            alt=""
          />
          <Typography variant="h4">Muhammad Siam</Typography>
          <Typography>Junior Mern-Stack Developer</Typography>
          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            A Teacher and Learner
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "3px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right"
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quasi officiis qui deserunt expedita, a debitis, aliquam enim ullam
            voluptates vitae fuga. Dolore ullam fugiat qui excepturi sapiente
            facilis omnis.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default About
