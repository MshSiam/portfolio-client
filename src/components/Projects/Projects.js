import { Typography } from "@mui/material"
import React from "react"
import "./Projects.css"
import { AiOutlineProject } from "react-icons/ai"
import { FaRegSmileWink } from "react-icons/fa"
import techmart from "../../images/website/techmart.png"
import mall from "../../images/website/mall.png"
import emart from "../../images/website/emart.png"
import headphone from "../../images/website/headphone.png"
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
              <Typography variant="h5">Ecommerce -Tech Shop</Typography>
            </div>
            <div>
              <Typography>sells various kind of tech stuff.</Typography>
              <Typography></Typography>
              <Typography variant="h6">
                Technology Used :{" "}
                <p>
                  React js, React-Bootstrap, React-Redux, Axios, Node js,
                  Express js, MongoDB, Stripe.
                </p>
              </Typography>
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
              <Typography variant="h5">Mall -Cloths Store</Typography>
            </div>
            <div>
              <Typography>sells cloths for both men & women.</Typography>
              <Typography></Typography>
              <Typography variant="h6">
                Technology Used :{" "}
                <p>
                  React js, Styled-Components ,Axios, Node js, MongoDB, Express
                  Js, Stripe.
                </p>
              </Typography>
            </div>
          </a>
        </>
        <>
          <a
            href="https://headphone-next-ecommerce.vercel.app/"
            className="projectCard"
            target="_blank">
            <div>
              <img src={headphone} alt="project" />
              <Typography variant="h5">Headphone Store</Typography>
            </div>
            <div>
              <Typography>sells Gaming Headphones</Typography>
              <Typography></Typography>
              <Typography variant="h6">
                Technology Used : <p>Next js, React-js, Sanity, Stripe.</p>
              </Typography>
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
              <Typography variant="h5">Emart</Typography>
            </div>
            <div>
              <Typography>sells various kind of products.</Typography>
              <Typography></Typography>
              <Typography variant="h6">
                Technology Used :{" "}
                <p>
                  React js, React-Bootstrap, React Loading Skelton, React
                  Helmet.
                </p>
              </Typography>
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
              <Typography variant="h5">Bike Website</Typography>
            </div>
            <div>
              <Typography>sells various kind Bikes.</Typography>
              <Typography></Typography>
              <Typography variant="h6">
                Technology Used :{" "}
                <p>
                  React js, Material UI, Axios, Node js, Express, MongoDB,
                  Stripe.
                </p>
              </Typography>
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
              <Typography variant="h5">Food Delivery</Typography>
            </div>
            <div>
              <Typography>sells various foods and drinks.</Typography>
              <Typography></Typography>
              <Typography variant="h6">
                Technology Used :{" "}
                <p>React js, Frammer Motion, Firebase, Fire Store.</p>
              </Typography>
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
              <Typography variant="h5">Real State </Typography>
            </div>
            <div>
              <Typography>sells houses in various country.</Typography>
              <Typography></Typography>
              <Typography variant="h6">
                Technology Used : <p>React js, React-Icons , Tailwind Css</p>
              </Typography>
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
