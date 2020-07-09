import React from "react"
import Layout from "../components/layout"
import { Container, Typography, Box } from "@material-ui/core"

import raceKitSplashImage from "../img/racekit-splash.png"
import raceKitCoreBlueprints from "../img/racekit-coreblueprints.png"

export default function RaceKit() {
  return (
    <Layout header1="Race Kit Case Study" hasBackButton>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Brief
          </Typography>
          <Typography variant="body1" gutterBottom>
            Race Kit is a positional tracking system made using Blueprint visual
            scripting for the Unreal Engine 4 marketplace. The asset aims to
            provide a system that is easy to understand, flexible, and works
            with multiplayer.
          </Typography>
          <Box textAlign="center" m={4}>
            <img src={raceKitSplashImage} alt="race kit splash" width="400" />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                Race Kit promotional image.
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" gutterBottom>
            Keeping things simple
          </Typography>
          <Typography variant="body1" gutterBottom>
            Off the bat I knew Race Kit needed to be easy to understand and
            implement in any project, being valuable as a time saver for
            experienced users as well as easily accessible for those new to
            scripting.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I arrived on a system that would require only 3 blueprints users
            need to implement in their game. A manager actor blueprint placed in
            the level per race to keep track of the race data and settings, a
            check point trigger box actor blueprint placed along the race path
            to understand where the racers are, and a component blueprint to
            register any pawns participating in the race with the manager.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={raceKitCoreBlueprints}
              alt="race kit core blueprints"
              width="267"
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                The core blueprints needed for a race.
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" gutterBottom>
            An accurate race
          </Typography>
          <Typography variant="body1" gutterBottom>
            Some cases are easy to understand for how the manager blueprint will
            know what positions a racer is in. If they are ahead a lap, or ahead
            a checkpoint, they're ahead. What about when racers are fighting for
            position side by side? The system must be accurate and responsive to
            the current status of the racers down to the millisecond.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Flexibility
          </Typography>
          <Typography variant="body1" gutterBottom>
            Talk about how the component can be dropped on any type of player,
            new or existing, and there can be many races per level.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Usability
          </Typography>
          <Typography variant="body1" gutterBottom>
            Talk about how the kit includes a sample level with a UI demoing the
            race data and the spline racer to roughly test it out.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Multiplayer
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
