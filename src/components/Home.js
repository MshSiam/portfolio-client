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
  SiPostman
} from "react-icons/si"

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
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace1">
            <img
              src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/293515581_3231269913778918_945467255294252343_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=IsvWLaV9c3wAX9qo9WY&tn=qcKEf1pypR3o00q_&_nc_ht=scontent.fdac110-1.fna&oh=00_AT-yemZRF_8HZe6Gf8HWsEibc-9Kt1Gs1eMBoJAuzjFu_A&oe=632EED34"
              alt=""
            />
          </div>
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace2">
            <img
              src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/291328054_3222065344699375_2298346391387372209_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=_mVEA8C3mxUAX9qTsM4&_nc_ht=scontent.fdac110-1.fna&oh=00_AT8VYcuprtyc1TAJtxMzaHIFd8Qlv0OWzjxdUSDT1X2kmw&oe=6330258C"
              alt=""
            />
          </div>
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace3">
            <img
              src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/287482964_3205172486388661_4998008815720573630_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=JwM2DWupGQEAX_qtDeq&tn=qcKEf1pypR3o00q_&_nc_ht=scontent.fdac110-1.fna&oh=00_AT9Gc0ayB_zPafTHsmviqSPno9l9HTrENxBILl2sMymfFA&oe=63301FCF"
              alt=""
            />
          </div>
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace4">
            <img
              src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/286097828_3201612526744657_1253267925567137813_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=lAyPlXB6EngAX82DPsn&_nc_ht=scontent.fdac110-1.fna&oh=00_AT_VfcVdsdmYOIuKVDK9D0SLV52kMPz-WzyRkkzeqoBRSg&oe=632F0D6D"
              alt=""
            />
          </div>
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace5">
            <img
              src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/279880602_3175635099342400_8264868284577282840_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=9Vxfg_huOW0AX_6sb4u&_nc_ht=scontent.fdac110-1.fna&oh=00_AT-YREyUnYytnNdauv0yUkBcFE1yJP6_ZRWuCl6hmqA_yw&oe=63308078"
              alt=""
            />
          </div>
          <div className="homeCubeSkillsFaces  homeCubeSkillsFace6">
            <img
              src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/269864341_3082523128653598_2609365359739591781_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=-PNCd4JXXqwAX8YNgTy&_nc_ht=scontent.fdac110-1.fna&oh=00_AT-wirhIP81VsQJzkjMMp6WcAXO0Ic9sr2wycufYBFHbzg&oe=632FC682"
              alt=""
            />
          </div>
        </div>

        <div className="cubeShadow"></div>
        <div className="homeSkillsBox">
          <SiHtml5 />
          <SiCss3 />
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
