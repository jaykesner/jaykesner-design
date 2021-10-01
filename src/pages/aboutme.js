import React from "react"
import Layout from "../components/layout"
import { Container, Box, Typography } from "@material-ui/core"
import myPhoto from "../img/me.png"

export default function AboutMe() {
  return (
    <Layout hasBackButton header1="About Me">
      <Container maxWidth="md">
        <Box display="flex" alignItems="center" mt={4}>
          <img
            src={myPhoto}
            alt="Jay Kesner"
            style={{ width: "100%", maxWidth: "120px", height: "auto" }}
          />
          <Box ml={4}>
            <Typography variant="h3" gutterBottom>
              About Me
            </Typography>
          </Box>
        </Box>
        <Box my={4}>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              Hello! I'm Jay Kesner. I'm a North Carolina based independent game
              developer. Originally from Pennsylvania, I graduated from the
              University of Pittsburgh in 2011 with a focus in human-centered
              design.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              After a few years working as a programmer analyst I began
              developing games using Unity. I started out with C# scripting for
              gameplay, learning the Unity scene and asset pipelines, and
              implementing the final touches for what a complete game requires.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              Interested in mobile games, and with some help, I eventually
              shipped 3 titles for iOS on the App Store. I also became
              interested in Unreal Engine by participating in the community
              development of Unreal Tournament, joining some game jams, and
              releasing an asset pack on the Unreal Marketplace.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              In my free time I enjoy spending time with my partner and our dog
              Piper, going to the beach, playing music, cooking new things,
              checking out crafts, and supporting Pittsburgh Penguins hockey.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
