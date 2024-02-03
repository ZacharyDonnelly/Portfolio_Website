import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import '../styles/hero.scss'

const Hero: React.FC = () => (
  <div className="homepage_hero">
    <StaticImage
      style={{
        gridArea: '1/1',
        width: '1800px',
        height: '95.5vh'
      }}
      layout="fullWidth"
      alt=""
      src="../images/hero_4k.webp"
      formats={['auto', 'webp', 'avif']}
    />
    <div
      className="homepage_heroText"
      style={{
        gridArea: '1/1',
        alignContent: 'center'
      }}
    >
      <h1>Zach Donnelly</h1>
    </div>
  </div>
)
export default Hero
