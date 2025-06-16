import React from 'react'
import AboutPdp from '../../components/AboutPdp/AboutPdp'
import AboutTxt from '../../components/AboutTxt/AboutTxt'
import './About.scss'

function About() {
  return (
    <section className='about' id='about'>
        <AboutPdp />
        <AboutTxt />
    </section>
  )
}

export default About