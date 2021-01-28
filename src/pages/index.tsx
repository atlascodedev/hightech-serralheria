import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

interface IndexProps {
  testMe: Array<string>
  onceAgain: boolean
}

export type MenuItem = {
  menuName: string
  reference: React.RefObject<HTMLElement> | null
}

const IndexPage: React.FC<IndexProps> = ({ testMe, onceAgain }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>
      This is Atlas Code's Gatsby starter adaptation for developing using Gatsby
      + Netlify CMS + Firebase + Github Actions + Cloud Functions for a fully
      functional, dynamic, fully featured, progressive web application that can
      do anything whilst being blazing fast 🚀🚀🚀🔥🔥🔥.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
