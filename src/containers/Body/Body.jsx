import React from 'react'
import "./Body.scss"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Body({ children }) {
  return (
    <div>
        <Header />
            <main>
                {children}
            </main>
        <Footer />
    </div>
  )
}

export default Body