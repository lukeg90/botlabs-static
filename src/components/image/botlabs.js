import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default function Botlabs() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "botlabs_white.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Image fluid={data.file.childImageSharp.fluid} className="botlabs-logo" />
  )
}
