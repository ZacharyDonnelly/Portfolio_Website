import * as React from 'react'
import Hero from '../components/Hero'
import '../styles/index.scss'

const Homepage: React.FC = () => (
  <section>
    <div className="hero_border" />
    <Hero />
  </section>
)
export default Homepage
