import React from "react"
import Layout from "../components/layout"
import { Container, Box, Typography } from "@material-ui/core"
import myPhoto from "../img/me.png"

export default function AboutMe() {
  return (
    <Layout hasBackButton header1="About Me">
      <Container maxWidth="md">
        <Box textAlign="center" m={4}>
          <img
            src={myPhoto}
            alt="Jay Kesner"
            style={{ width: "100%", maxWidth: "276px", height: "auto" }}
          />
        </Box>
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              Hi! I'm Jay Kesner. I grew up in the small town of Clearfield
              Pennsylvania, where my love of games began as well as enjoying
              music, playing guitar in multiple bands throughout high school.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              I graduated from the University of Pittsburgh in 2011 with a BS in
              Information Science, with a focus in human-centered design.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              After working for a few years as a programmer in the mining
              industry I knew I wanted to do more with games. After a weekend
              spent theory-crafting a wizarding duel game with a pixel artist
              friend, we began our game development journey.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              I jumped into learning Unity and C# scripting since the engine was
              free to start with, and C# scripting was close to the Java
              programming I learned at Pitt. We started a company, 43K Studios,
              and released our first game Mogul Mountain for iOS.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              Shortly after releasing Mogul Mountain I became very interested in
              learning Unreal Engine due to the engine's 3D quality and solid
              tools. Epic Games was working with the Unreal Tournament community
              to openly develop the next Unreal Tournament game. I loved the
              community interaction and looked for a way to join in, learning
              Unreal's C++ to submit a pull request for a UI feature, which
              earned a couple months of subscription time for the engine.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              I've since moved to coastal North Carolina with my partner and
              have been growing 43K Studios full time as a now solo developer.
              I've developed more games for iOS, game jams, and game development
              assets, as well as taking on freelance opportunities.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              My favorite games right now are Fortnite, Valorant, Clash Royale,
              Dead Cells, and NHL 20.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              In my free time I love spending time at the beach, playing with
              our dog Piper, playing guitar and learning music production,
              cooking, and supporting Pittsburgh Penguins hockey.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
