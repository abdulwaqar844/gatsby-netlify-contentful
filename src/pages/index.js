import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    ...
    <Link to="/blog/">Visit the Blog Homepage</Link>
    <h1>Welcome To Gatsby Blogsite</h1>
  </Layout>
)

export default IndexPage
