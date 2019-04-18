import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { window } from "browser-monads"

import CompaniesLogos from "../components/companiesLogos"
// import RoundedButton from "../components/styled/roundedButton"
import Loading from "../components/loading"
import AppContext from "../appContext"
import { StyledLink } from "../components/styled/sharedComponents"

export default function App() {
  const { loading } = React.useContext(AppContext)

  if (loading) return <Loading />

  return (
    <Container maxWidth="sm" style={{ padding: 0 }}>
      <Box my={4} display="flex" flexDirection="column" alignItems="center">
        <CompaniesLogos />

        <Box display="flex" justifyContent="center" my={4}>
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              Lawn...
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom>
              Irrigation
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom>
              Tool
            </Typography>
          </Box>
        </Box>

        <Box mb={4}>
          <Typography color="error">- ßeta Release -</Typography>
        </Box>

        <Box bgcolor="primary.main" mb={8} p={2} px={4} color="white">
          <Typography align="center">
            You can find out your watering needs for today and the next two days
          </Typography>
        </Box>

        <StyledLink to="/location/">Get Started</StyledLink>
      </Box>
    </Container>
  )
}
