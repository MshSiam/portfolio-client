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
              <Typography variant="h5">
                Ecommerce -Tech Shop (Full Stack)
              </Typography>
            </div>
            <div>
              <Typography>
                # This website is fully Responsive for desktop, tablet and
                mobile devices.
              </Typography>
              <Typography># Different nav for users and admin.</Typography>
              <Typography>
                # User have to login or sign up to purchase proucts.
              </Typography>
              <Typography>
                # User can see his order details, increase, decrease or delete
                products from the cart.
              </Typography>
              <Typography>
                # Admin can manage products (add, update, delete), manage
                orders, manage users.
              </Typography>
              <Typography>
                # Stripe is used to pay the price of the products.
              </Typography>
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
              <Typography variant="h5">
                Mall -Cloths Store (Full Stack)
              </Typography>
            </div>
            <div>
              <Typography>
                # This website is fully Responsive for desktop, tablet and
                mobile devices.
              </Typography>
              <Typography>
                #Any user add products to his cart don't need to login / signup.
              </Typography>
              <Typography>
                # User can see his cart details , increase, decrease or delete
                products from the cart.
              </Typography>
              <Typography>
                # Stripe is used to pay the price of the products.
              </Typography>

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
              <Typography variant="h5">Headphone Store (Full Stack)</Typography>
            </div>
            <div>
              <Typography>
                # This website is fully Responsive for desktop, tablet and
                mobile devices.
              </Typography>
              <Typography>
                #Any user add products to his cart don't need to login / signup.
              </Typography>
              <Typography>
                # User can see his cart details , increase, decrease or delete
                products from the cart
              </Typography>
              <Typography>
                # Stripe is used to pay the price of the products.
              </Typography>
              <Typography></Typography>
              <Typography variant="h6">
                Technology Used : <p>Next js, React-js, Sanity, Stripe.</p>
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
              <Typography variant="h5">Bike Website (Full Stack)</Typography>
            </div>
            <div>
              <Typography>
                # This website is fully Responsive for desktop, tablet and
                mobile devices.
              </Typography>
              <Typography>
                # Different dashboard for users and admins.
              </Typography>
              <Typography>
                # User have to login or sign up to purchase proucts producst
                page ar private route.
              </Typography>
              <Typography>
                # User can see his order details/ status, add review.
              </Typography>
              <Typography>
                # Admin can manage products (add, update, delete), manage orders
                (delete, ship). Admin can make a user admin.
              </Typography>
              <Typography></Typography>
              <Typography variant="h6">
                Technology Used :{" "}
                <p>
                  React js, Material UI, Axios, Firebase, Node js, Express,
                  MongoDB, Stripe.
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
              <Typography variant="h5">Food Delivery (Full Stack)</Typography>
            </div>
            <div>
              <Typography>
                # This website is fully Responsive for desktop, tablet and
                mobile devices.
              </Typography>
              <Typography># User can filter product by categories.</Typography>
              <Typography># User can login / signup using google .</Typography>
              <Typography>
                #Any user add products to his cart don't need to login / signup.
              </Typography>
              <Typography>
                # User can increase, decrease or delete products from the cart.
              </Typography>
              <Typography># Admin can add product</Typography>
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
            href="https://emart-mshsiam.netlify.app"
            className="projectCard"
            target="_blank">
            <div>
              <img src={emart} alt="project" />
              <Typography variant="h5">Emart (Front End)</Typography>
            </div>
            <div>
              <Typography>
                # This website is fully Responsive for desktop, tablet and
                mobile devices.
              </Typography>
              <Typography>
                #Any user add products to his cart don't need to login / signup.
              </Typography>
              <Typography>
                # User can see his cart details and order.
              </Typography>
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
            href="https://real-state-house-siam.netlify.app"
            className="projectCard"
            target="_blank">
            <div>
              <img src={realstate} alt="project" />
              <Typography variant="h5">Real State (Front End )</Typography>
            </div>
            <div>
              <Typography>
                # Fully Responsive for desktop, tablet and mobile devices.
              </Typography>
              <Typography>
                # Anyone can filter the houses according to country, price range
                and house type .
              </Typography>
              <Typography># Anyone can check the house details.</Typography>
              <Typography>
                # House details page are build by dynamic route.
              </Typography>
              <Typography></Typography>
              <Typography variant="h6">
                Technology Used : <p>React js, React-Icons , Tailwind Css</p>
              </Typography>
            </div>
          </a>
        </>
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem Ubuntu Mono" }}>
        All The Projects Shown Avobe are Made By Me. Code Links Are Included in
        My Resume . <FaRegSmileWink />
      </Typography>
    </div>
  )
}

export default Projects
