import React from 'react'
import Body from '../../containers/Body/Body'
import Hero from '../../containers/Hero/Hero'
import About from '../../containers/About/About'
import Gallery from '../../containers/Gallery/Gallery'
import Contact from '../../containers/Contact/Contact'

function Home() {
  return (
    <Body>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </Body>
  )
}

export default Home