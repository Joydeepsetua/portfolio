import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import styles from './page.module.css'
import { Container, Row, Col} from 'react-bootstrap'
import { sheetingWithDesktop } from '@/config/ImgPath'
import { LIGHTBLACK, PRIMARY, WHITE } from '@/config/Colors';
import { Skills as skills, Projets as projects } from '../config/Constant';
import { Comforter_Brush } from 'next/font/google';

const roboto = Comforter_Brush({
  weight: '400',
  subsets:['latin'],
  display:'swap'
})


export default function Home() {
  return (
    <Container fluid className={`p-0 ${styles.main}`}>
      <Container>
        <Row className='mt-5 mb-5'>
          <Col className='align-items-center'>
            {/* <Image
            // className={}
            src={feviconLogo}
            alt="Logo"
            width={40}
            height={30}
            priority
          /> */}
            <h3 style={{ color: 'white' }} className={roboto.className}>{`< Joydeep Setua />`}</h3>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a className={styles.nav_item} style={{ textDecoration: 'none' }}><samp>Home</samp></a>
            <a className={styles.nav_item} style={{ textDecoration: 'none' }}><samp>Projects</samp></a>
            <a className={styles.nav_item} style={{ textDecoration: 'none' }}><samp>Contact</samp></a>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={6} style={{ color: '#ffff' }} className='d-flex align-items-center'>
            <div>
              {/* <h6>Ahoy..!</h6>
            <h6>I'm </h6> */}
              <h1>Joydeep Setua</h1>
              <h4>(Mobile App Developer)</h4>
              <p>A React Native developer with over 1 year of hands-on experience in crafting user-friendly mobile applications. I've successfully led the development of 5+ projects, specializing in diverse domains such as E-commerce, Education with live classes, and Employee management tools.</p>

            </div>
          </Col>
          <Col className={styles.center}>
            <Image
              className={`p-1 ${styles.profile_photo}`}
              src={sheetingWithDesktop}
              alt="Profile photo"
              width={400}
              height={450}
              priority
            />
          </Col>
        </Row>
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
