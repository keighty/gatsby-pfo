import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="https://s.gravatar.com/avatar/1b886ea5ee853d841586edd42b4a8dc0?s=80"
        style={{ marginRight: "8px" }}
      />
      <h1>Hello, my name is Katie</h1>
    </div>
    <p>I write code, and I've been doing it a while.</p>
    <p>
      I love solving problems for users, and will work wherever people care
      about the same thing.
    </p>
  </Layout>
)

export default IndexPage
