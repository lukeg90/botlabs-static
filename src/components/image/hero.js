import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default function Hero({ children }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
      title="hero"
      alt="hero"
      className="hero"
    >
      {children}
    </BackgroundImage>
  )
}
