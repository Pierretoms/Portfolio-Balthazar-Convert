import React from 'react'
import Body from '../../containers/Body/Body'
import Hero from '../../containers/Hero/Hero'
import About from '../../containers/About/About'
import Gallery from '../../containers/Gallery/Gallery'

function Home() {
  return (
    <Body>
      <Hero />
      <About />
      <Gallery />
    </Body>
  )
}

export default Home