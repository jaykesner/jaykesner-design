import React from "react"
import Layout from "../components/layout"
import { Container, Typography, Box } from "@material-ui/core"

export default function RaceKit() {
  return (
    <Layout header1="Race Kit Case Study">
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Brief
          </Typography>
          <Typography variant="body1" gutterBottom>
            Description goes here. Description goes here. Description goes here.
            Description goes here. Description goes here. Description goes here.
            Description goes here.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Topic 1
          </Typography>
          <Typography variant="body1" gutterBottom>
            Description goes here. Description goes here. Description goes here.
            Description goes here. Description goes here. Description goes here.
            Description goes here.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Topic 2
          </Typography>
          <Typography variant="body1" gutterBottom>
            Description goes here. Description goes here. Description goes here.
            Description goes here. Description goes here. Description goes here.
            Description goes here.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Topic 3
          </Typography>
          <Typography variant="body1" gutterBottom>
            Description goes here. Description goes here. Description goes here.
            Description goes here. Description goes here. Description goes here.
            Description goes here.
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}
