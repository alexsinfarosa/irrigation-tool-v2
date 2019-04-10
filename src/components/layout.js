import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Container from "@material-ui/core/Container"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Container maxWidth="sm">{children}</Container>}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
