import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Kilt from "../components/image/kilt"

const IndexPage = () => (
  <Layout>
    <SEO title="BOTlabs" />
    <div className="main-container">
      <div className="kilt-plug">
        <p className="plug-text">The Company behind Kilt</p>
        <a
          className="kilt-link"
          target="_blank"
          rel="noopener"
          href="https://www.kilt.io/"
        >
          <Kilt />
        </a>
      </div>
    </div>
    <div className="imprint-container">
      <h4 className="imprint-title">imprint</h4>
      <div className="imprint">
        <p style={{ fontWeight: "bold" }}>BOTlabs</p>
        <p>Keithsraße 2-4</p>
        <p>10787 Berlin</p>
        <a target="_blank" rel="noopener" href="mailto:info@botlabs.org">
          {" "}
          info@botlabs.org
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
