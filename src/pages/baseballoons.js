import React from "react"
import Layout from "../components/layout"
import { Container, Box, Typography, Link } from "@material-ui/core"

import baseballoonsPro from "../img/baseballoons-pro.png"
import baseballoonsProto from "../img/baseballoons-proto.gif"
import baseballoonsChars from "../img/baseballoons-characters.png"

export default function Baseballoons() {
  return (
    <Layout header1="Baseballoons Case Study" hasBackButton>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Brief
          </Typography>
          <Typography variant="body1" gutterBottom>
            Baseballoons is a home run contest game I developed for iOS. The
            inspiration for the game came from playing a game at our local
            arcade called Baseball Pro. The game immediately jumped out at me as
            being perfect for a mobile game. The mobile design needed to adjust
            the main swinging mechanic for mobile devices, replace the ticket
            rewards, and ease up on the difficulty.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={baseballoonsPro}
              alt="Baseball Pro"
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                The arcade game Baseball Pro, image from{" "}
                <Link href="https://www.youtube.com/watch?v=b6Iv7WmDL7I">
                  youtube
                </Link>
                .
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" gutterBottom>
            Adapting the main mechanic
          </Typography>
          <Typography variant="body1" gutterBottom>
            The Ballball Pro arcade game works by pulling back a big physical
            baseball bat to hit the ball, which is really fun! But when getting
            to work on the prototype for my version, it became apparent that
            style wouldn't work great on a mobile device. Pulling back on the
            graphic of a baseball bat just isn't the same. It felt inconsistent,
            and the available screen space to try to control the swing was
            limited. A single touch hold to pull back and let go, with a slower
            bat pull back speed had was immediately more controllable, and more
            fun.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={baseballoonsProto}
              alt="Baseballoons prototype"
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                Early Baseballoons prototype.
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" gutterBottom>
            Title
          </Typography>
          <Typography variant="body1" gutterBottom>
            Body
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={baseballoonsChars}
              alt="Baseballoons characters"
              style={{ width: "100%", maxWidth: "280px", height: "auto" }}
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                Sample of Baseballoons unlockable figurines.
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" gutterBottom>
            Title
          </Typography>
          <Typography variant="body1" gutterBottom>
            Body
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}
