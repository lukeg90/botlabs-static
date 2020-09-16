import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default function Kilt() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kilt.png" }) {
        childImageSharp {
          fluid(quality: 99, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Image fluid={data.file.childImageSharp.fluid} className="kilt-logo" />
}
