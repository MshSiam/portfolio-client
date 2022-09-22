import React, { useEffect } from "react"
import "./Home.css"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import moonImage from "../../src/images/moon.jpg"
import venusImage from "../../src/images/venus.jpg"
import spaceImage from "../../src/images/space.jpg"
import { Typography } from "@mui/material"
import TimeLine from "./TimeLine/TimeLine"
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiMaterialdesign,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiFigma
} from "react-icons/si"
import html from "../../src/images/skillsImage/html.png"
import css from "../../src/images/skillsImage/css.jpg"
import javascript from "../../src/images/skillsImage/java-script.jpg"
import react from "../../src/images/skillsImage/react.webp"
import node from "../../src/images/skillsImage/node.jpg"
import mongo from "../../src/images/skillsImage/mongo.png"
import { MouseOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import About from "./About/About"

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader()
    const moonTexture = textureLoader.load(moonImage)
    const venusTexture = textureLoader.load(venusImage)
    const spaceTexture = textureLoader.load(spaceImage)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(4, 4, 8)

    const canvas = document.querySelector(".homeCanvas")
    const renderer = new THREE.WebGLRenderer({
      canvas
    })

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64)
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture })
    const moon = new THREE.Mesh(moonGeometry, moonMaterial)

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64)
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture })
    const venus = new THREE.Mesh(venusGeometry, venusMaterial)
    venus.position.set(8, 5, 5)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1)

    pointLight.position.set(8, 5, 5)
    pointLight2.position.set(-8, -5, -5)

    scene.add(venus)
    scene.add(moon)
    scene.add(pointLight)
    scene.add(pointLight2)
    scene.background = spaceTexture

    const constSpeed = 0.01

    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed
        moon.rotation.y += constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y += constSpeed
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed
        moon.rotation.y -= constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y -= constSpeed
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed
        moon.rotation.y += constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y += constSpeed
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed
        moon.rotation.y -= constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y -= constSpeed
      }
    })

    const animate = () => {
      requestAnimationFrame(animate)
      moon.rotation.y += 0.001
      venus.rotation.y += 0.001
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>S</p>
          <p>I</p>
          <p>A</p>
          <p>M</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">Hello There,</Typography>

          <Typography variant="h2">Junior Mern-Stack Developer </Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      <div className="homeContainer">
        {/* <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} /> */}
        <About />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace1">
            <img src={html} alt="" />
          </div>
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace2">
            <img src={css} alt="" />
          </div>
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace3">
            <img src={javascript} alt="" />
          </div>
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace4">
            <img src={react} alt="" />
          </div>
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace5">
            <img src={node} alt="" />
          </div>
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace6">
            <img src={mongo} alt="" />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeSkillsBox" id="homeskillsBox">
          <SiHtml5 />
          <SiCss3 />
          <SiFigma />
          <SiJavascript />
          <SiMaterialdesign />
          <SiTailwindcss />
          <SiBootstrap />
          <SiReact />
          <SiNodedotjs />
          <SiExpress />
          <SiMongodb />
          <SiPostman />
        </div>
      </div>
    </div>
  )
}

export default Home
