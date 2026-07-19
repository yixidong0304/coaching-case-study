import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Challenge from './components/Challenge'
import Analysis from './components/Analysis'
import Approach from './components/Approach'
import Objectives from './components/Objectives'
import DesignDecisions from './components/DesignDecisions'
import Evaluation from './components/Evaluation'
import Reflection from './components/Reflection'
import Footer from './components/Footer'

export default function App() {
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
        <Hero />
        <Challenge />
        <Analysis />
        <Objectives />
        <Approach />
        <DesignDecisions />
        <Evaluation />
        <Reflection />
      </main>
      <Footer />
    </>
  )
}
