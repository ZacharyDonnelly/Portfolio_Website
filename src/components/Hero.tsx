import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import '../styles/hero.scss'

const Hero: React.FC = () => (
  <div className="homepage_hero">
    <StaticImage
      style={{
        gridArea: '1/1',
        width: '1750px',
        height: '100vh'
      }}
      layout="fullWidth"
      // This is a presentational image, so the alt should be an empty string
      alt=""
      src="../images/hero_4k.webp"
      formats={['auto', 'webp', 'avif']}
    />
    <div
      className="homepage_heroText"
      style={{
        gridArea: '1/1'
      }}
    >
      {/* Any content here will be centered in the component */}
      <h1>Hero text</h1>
    </div>
  </div>
)
export default Hero
