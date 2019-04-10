import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import ButtonLink from "../components/styled/buttonLink"
import { GridContainer } from "../components/styled/sharedComponents"

const SprinklerPage = () => (
  <Layout>
    <SEO title="Location" />

    <GridContainer>
      <Header icon="chevron-left" title="Sprinkler Type - (step 3/3)" />

      <Box mb={1}>
        <Typography variant="h4" gutterBottom>
          Sprinkler Type
        </Typography>

        <Typography paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          aliquid vel perspiciatis nesciunt laudantium exercitationem sunt
          tempora amet incidunt distinctio quae, possimus est perferendis atque
          mollitia! Id dolorum excepturi soluta!
        </Typography>
      </Box>

      <Box mx={-2} height="80px">
        <ButtonLink to="/lawn" variant="contained" color="primary">
          Create Entry
        </ButtonLink>
      </Box>
    </GridContainer>
  </Layout>
)

export default SprinklerPage
