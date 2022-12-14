import { Link, Typography } from "@mui/material"
import React from "react"
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">Contact Me</Typography>
        <Typography>
          Hello, I am Muhammad Siam. I am a junior Mern-Stack Developer.
        </Typography>
        <br />
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
        <br />

        <Typography>+880-1765871554</Typography>
        <Typography>siyamkenway@gmail.com</Typography>
      </div>

      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/MshSiam" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-siam-77703520b/"
          target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/seam.kenway/" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/siam_kenway/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default Footer
