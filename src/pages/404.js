import React from "react"
import Layout from "../components/layout"
import { Container, Typography, Box } from "@material-ui/core"

export default function NotFound() {
  return (
    <Layout header1="Page Not Found" hasBackButton={true}>
      <Container maxWidth="sm">
        <Box my={10}>
          <Typography variant="h4" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body1">
            Oops! The page you are looking for has been removed or relocated.
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}
