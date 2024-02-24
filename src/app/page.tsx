"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import styles from './page.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { callIcon, joydeepsetua, mailIcon, sheetingWithDesktop } from '@/config/ImgPath'
import { GRAY, LIGHTBLACK, FOOTER, PRIMARY, WHITE } from '@/config/Colors';
import { SKILLS, PROJECTS, SOCIAL_MEDIA, THEME_SKILLS } from '../config/Constant';
import { Comforter_Brush } from 'next/font/google';
import { motion } from "framer-motion"
import React from 'react';

const roboto = Comforter_Brush({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

const right_to_left = {
  hidden: { opacity: 0, x: 100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}
const left_to_right = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}
const up_to_down = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 }
}


export default function Home() {
  const [activeTab, setActiveTab] = React.useState(1);
  const date = new Date().getFullYear();
  return (
    <Container fluid className={`p-0 ${styles.main}`}>
      {/* Navbar */}
      <Container>
        <motion.main
          variants={up_to_down}
          initial="hidden"
          animate="enter"
          transition={{ type: "linear" }}
        >
          <Row className='mt-5 mb-5'>
            <Col className='align-items-center'>
              <h3 style={{ color: 'white' }} className={roboto.className}>{`< Joydeep Setua />`}</h3>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="/#" onClick={() => setActiveTab(1)} className={`${styles.nav_item}`} style={{ textDecoration: 'none', color: activeTab == 1 ? PRIMARY : GRAY }}><samp>Home</samp></a>
              <a href="/#projects" onClick={() => setActiveTab(2)} className={styles.nav_item} style={{ textDecoration: 'none', color: activeTab == 2 ? PRIMARY : GRAY }}><samp>Projects</samp></a>
              <a href="/#skill" onClick={() => setActiveTab(3)} className={styles.nav_item} style={{ textDecoration: 'none', color: activeTab == 3 ? PRIMARY : GRAY }}><samp>Skill</samp></a>
              <a href="/#contact" onClick={() => setActiveTab(4)} className={styles.nav_item} style={{ textDecoration: 'none', color: activeTab == 4 ? PRIMARY : GRAY }}><samp>Contact</samp></a>
            </Col>
          </Row>
        </motion.main>
      </Container>

      {/* Home */}
      <Container>
        <Row>
          <Col lg={6} style={{ color: '#ffff' }} className={`${styles.center} d-flex align-items-center p-1`}>
            <div style={{ textAlign: 'center' }}>
              {/* <h6>Ahoy..!</h6>
              <h6>I'm </h6> */}
              <motion.main
                variants={left_to_right}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear" }}
              >
                <h1 style={{ fontFamily: 'cursive', fontSize: 70, color: WHITE }}>Joydeep Setua</h1>
                <h4 style={{ fontFamily: 'monospace', color: PRIMARY }}>(Mobile App Developer)</h4><br /><br />
                <p style={{ fontFamily: 'monospace', lineHeight: 2 }}>A React Native developer with over 1 year of hands-on experience in crafting user-friendly mobile applications. I've successfully led the development of 5+ projects.</p>
                {/* specializing in diverse domains such as E-commerce, Education with live classes, and Employee management tools. */}
                <div className='d-flex justify-content-center mt-5'>
                  {SOCIAL_MEDIA.map((item: any) => {
                    const [isHover, setIsHover] = React.useState(false)
                    return (
                      <div key={item.id} className='p-0 m-2' style={{ zIndex: 100, cursor: 'pointer' }}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}>
                        <a className='d-flex justify-content-center align-items-center' href={item.url} target='_blank'>
                          <Image
                            src={isHover ? item.path_fill : item.path_outline}
                            alt={item.title}
                            width={item.width}
                            height={item.height}
                            className='d-flex justify-content-center align-items-center'
                          />
                        </a>
                      </div>
                    )
                  })}
                </div>
              </motion.main>
            </div>
          </Col>
          <Col className={styles.center}>
            <motion.main
              variants={right_to_left}
              initial="hidden"
              animate="enter"
              transition={{ type: "linear" }}
            >
              <Image
                className={`p-1 animate-photo`}
                src={sheetingWithDesktop}
                alt="Profile photo"
                width={400}
                height={450}
                priority
              />
            </motion.main>
          </Col>
        </Row>
      </Container>

      {/* Skills */}
      <div id='skill' style={{ backgroundColor: LIGHTBLACK, padding: 20, color: WHITE, justifyContent: 'center' }} className='m-0'>
        <Container>
          <div className='d-flex justify-content-center m-3'>
            <h3 style={{ fontFamily: 'monospace' }}>What I Know</h3>
          </div>
          <Row style={{ justifyContent: 'center' }}>
            {/* THEME_SKILLS, SKILLS */}
            {THEME_SKILLS.map((item: any) => {
              return (
                <Col lg={2} md={3} sm={4} xs={4} style={{ position: 'relative' }} key={item.id} className='p-0 m-2'>
                  <div className={`${styles.icon} p-2 h-100 d-grid align-items-center`}>
                    <div className='d-flex justify-content-center align-items-center'>
                      <Image
                        src={item.path}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        className='d-flex justify-content-center align-items-center'
                      />
                    </div>
                    <p className='p-0 m-0 text-center'>{item.title}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      {/* Projects */}
      <div id='projects' style={{ color: WHITE, justifyContent: 'center' }} className='m-5'>
        <Container>
          <div className='d-flex justify-content-center m-3'>
            <h3 style={{ fontFamily: 'monospace' }}>My Projects</h3>
          </div>
          <Row style={{ justifyContent: 'center' }}>
            {PROJECTS.map((item: any) => {
              return (
                <Col lg={2} md={3} sm={4} xs={4} style={{ position: 'relative' }} key={item.id} className='p-0 m-2'>
                  <div className={`${styles.icon} p-2 h-100 d-grid align-items-center`}>
                    <div className='d-flex justify-content-center align-items-center'>
                      <Image
                        src={item.path}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        className='d-flex justify-content-center align-items-center'
                      />
                    </div>
                    <p className='p-0 m-0 text-center'>{item.title}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      {/* Contact */}
      <div id='contact' style={{ backgroundColor: LIGHTBLACK, color: WHITE, justifyContent: 'center' }} className='m-0 pb-5'>
        <Container>
          <div className='d-flex justify-content-center m-3'>
            <h3 style={{ fontFamily: 'monospace' }}>Contact Me</h3>
          </div>
          <Row>
            <Col>
              <div style={{ textAlign: 'center' }}>
                <motion.main
                  variants={left_to_right}
                  initial="hidden"
                  animate="enter"
                  transition={{ type: "linear" }}
                >
                  <Image
                    className={`p-1 animate-photo`}
                    src={joydeepsetua}
                    alt="Profile photo"
                    width={300}
                    height={300}
                    style={{ borderRadius: '50%' }}
                    priority
                  />
                </motion.main>
              </div>
            </Col>
            <Col lg={6} style={{ color: '#ffff' }} className={`d-flex align-items-center p-1`}>
              <div style={{ textAlign: 'center', marginTop:20 }}>
                <motion.main
                  variants={right_to_left}
                  initial="hidden"
                  animate="enter"
                  transition={{ type: "linear" }}
                >
                  <a style={{ fontFamily: 'monospace', color: 'lightgray' }}>+91 9713231022</a><br />
                  <a style={{ fontFamily: 'monospace', color: 'lightgray' }}>joydeepsetua86@gmail.com</a>

                  <div className='d-flex justify-content-center mt-4'>
                    {SOCIAL_MEDIA.map((item: any) => {
                      const [isHover, setIsHover] = React.useState(false)
                      return (
                        <div key={item.id} className='p-0 m-2' style={{ zIndex: 100, cursor: 'pointer' }}
                          onMouseEnter={() => setIsHover(true)}
                          onMouseLeave={() => setIsHover(false)}>
                          <a className='d-flex justify-content-center align-items-center' href={item.url} target='_blank'>
                            <Image
                              src={isHover ? item.path_fill : item.path_outline}
                              alt={item.title}
                              width={item.width}
                              height={item.height}
                              className='d-flex justify-content-center align-items-center'
                            />
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </motion.main>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <div id='footer' style={{ backgroundColor: FOOTER, padding: 20, color: WHITE, justifyContent: 'center' }} className='m-0'>
        <Container>
          <Row style={{ alignContent: 'center', justifyContent: 'center' }}>
            <Col lg={6} className='d-flex justify-content-center'>
              <span style={{ fontSize: 13, color: GRAY, marginRight: 5 }}>{`Made with ❤️ by`}</span>
              <span style={{ fontSize: 13, color: PRIMARY }}>Joydeep Setua</span>
            </Col>
            <Col className='d-flex justify-content-center'>
              <span style={{ fontSize: 13, color: GRAY, marginRight: 5 }}>{`Icons used by `}</span>
              <a style={{ fontSize: 13, color: PRIMARY }} target="_blank" href="https://icons8.com" >Icons8</a>
            </Col>
          </Row>
        </Container>
      </div>
    </Container >
  )
}
