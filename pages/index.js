//LIBS
import Head from 'next/head'
import styles from '../styles/Home.module.css'


//COMPONENTS
import Navigation from '../components/navigation'
import Intro from '../components/intro'
import Aboutme from '../components/aboutme'
import Resume from '../components/resume'
import Project from '../components/projects'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Dhruv Rishi</title>
        <meta name="Resume Styled Portfolio" content="Developed by @dazzlerkumar" />
        <link rel="icon" href="/indian-man.png" />
      </Head>
      <Intro/>
      <Aboutme/>
      <Resume/>
      <Project/>
        

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
