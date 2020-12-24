import React from "react"
import { graphql, Link } from "gatsby"
import pinImg from "../images/pin.jpg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = props => {
  console.log(props)
  const pinImageFromGraphql = props.data.pinImage.childImageSharp.fluid.src
  const pinImageBase64FromGraphql =
    props.data.pinImage.childImageSharp.fluid.base64
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <img alt="image from static folder" src="images/image.gif" />
      <img alt="image from import" src={pinImg} style={{ width: 300 }} />
      <img
        alt="Pin image from graphql"
        src={pinImageFromGraphql}
        style={{ width: 300 }}
      />
      <img
        alt="Base 64 from graphql"
        src={pinImageBase64FromGraphql}
        style={{ width: 300 }}
      />
      <Img
        alt="image from Gatsby-image"
        fluid={props.data.pinImage.childImageSharp.fluid}
      />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query Home {
    pinImage: file(relativePath: { eq: "pin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
