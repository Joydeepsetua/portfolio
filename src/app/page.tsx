import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import styles from './page.module.css'
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'
import { feviconLogo, profileImage, reactLogo } from '@/config/ImgPath'
import { LIGHTBLACK, PRIMARY, WHITE } from '@/config/Colors';
import { Style as MyStyle } from '@/Styles';
import { Skills as skills, Projets as projects } from '../config/Constant';

export default function Home() {
  return (
    <Container fluid className={`p-0 ${styles.main}`}>
      <Row style={MyStyle.navbar}>
        <Col style={{ alignItems: 'center' }}>
          <Image
            // className={}
            src={feviconLogo}
            alt="Logo"
            width={40}
            height={30}
            priority
          />
          <strong style={{ color: 'white' }}>Protfolio</strong>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <a className={styles.nav_item} style={{ textDecoration: 'none' }}><span>Home</span></a>
          <a className={styles.nav_item} style={{ textDecoration: 'none' }}><span>Projects</span></a>
        </Col>
      </Row>
      <Container>
        <Row style={{}}>
          <Col lg={8} style={{ color: '#ffff' }}>
            <span>Ahoy..!</span><br />
            <span>I'm </span>
            <strong>Joydeep Setua</strong>
          </Col>
          <Col className={styles.center} style={{}}>
            <Image
              className={styles.profile_photo}
              src={profileImage}
              alt="Profile photo"
              width={300}
              height={400}
              priority
            />
          </Col>
        </Row>
        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore starter templates for Next.js.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div> */}
      </Container>
      <div style={{ backgroundColor: LIGHTBLACK, padding: 20, color: WHITE, justifyContent: 'center' }} className='m-0'>
        <Container>
          <Row style={{ justifyContent: 'center' }}>
            {skills.map((item: any) => {
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
      <div style={{ color: WHITE, justifyContent: 'center' }} className='m-5'>
        <Container>
          <Row style={{ justifyContent: 'center' }}>
            {projects.map((item: any) => {
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
    </Container>
  )
}
