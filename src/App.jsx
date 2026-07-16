import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Challenge from './components/Challenge'
import Analysis from './components/Analysis'
import Conversion from './components/Conversion'
import Objectives from './components/Objectives'
import Strategy from './components/Strategy'
import Blueprint from './components/Blueprint'
import ContentArchitecture from './components/ContentArchitecture'
import DesignDecisions from './components/DesignDecisions'
import FinalExperience from './components/FinalExperience'
import Storyboard from './components/Storyboard'
import Evaluation from './components/Evaluation'
import Reflection from './components/Reflection'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'

export default function App() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero onImageClick={setLightbox} />
        <Challenge />
        <Analysis />
        <Conversion />
        <Objectives />
        <Strategy />
        <Blueprint />
        <ContentArchitecture onImageClick={setLightbox} />
        <DesignDecisions onImageClick={setLightbox} />
        <FinalExperience onImageClick={setLightbox} />
        <Storyboard onImageClick={setLightbox} />
        <Evaluation />
        <Reflection />
        <FinalCta />
      </main>
      <Footer />
      {lightbox && (
        <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  )
}
