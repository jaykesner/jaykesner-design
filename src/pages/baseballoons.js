import React from "react"
import Layout from "../components/layout"
import { Container, Box, Typography, Link } from "@material-ui/core"

import baseballoonsPro from "../img/baseballoons-pro.png"
import baseballoonsProto from "../img/baseballoons-proto.gif"
import baseballoonsChars from "../img/baseballoons-characters.png"
import baseballoonsScreenshot from "../img/baseballoons-screenshot.png"

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
            design inspiration came from a local arcade game called Baseball
            Pro. Which is the name of the Unity project! The game immediately
            jumped out to me because I am a sucker for simple yet difficult
            skill based games. While the physicality of an arcade experience was
            very fun, I thought a video game version could be even better. The
            game design needed to adjust the main swinging mechanic for mobile
            devices, replace the ticket rewards, and ease up on the difficulty.
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
            The Baseball Pro arcade game works by pulling back a big physical
            baseball bat to hit the ball, which is really fun! But when getting
            to work on the prototype for my version, it became apparent that
            style wouldn't work great on a mobile device. Pulling back on the 3D
            model of a baseball bat just isn't the same. It felt inconsistent,
            and the available screen space to try to control the swing was
            limited. A single touch hold to pull back and let go, with a slower
            bat pull back speed was immediately more controllable, and more fun.
            After a ball is hit in the original arcade game, the targets are
            simply holes for the ball to fall into. I wanted something to
            actually hit the ball into and created a balloon model with a
            scrollable texture to show it’s base value, and a bit of vertical
            movement to encourage timing. Also there’s a bomb to avoid, because
            what signifies an out better than hitting missing a lovely balloon
            and hitting a scary bomb.
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
            New rewards
          </Typography>
          <Typography variant="body1" gutterBottom>
            Rewards are where I thought the mobile design could really shine.
            Arcade games of course reward with tickets which can be redeemed for
            different trinkets. For the reward design in Baseballoons I thought
            a big cast of fun and wonky unlockable figurines would be great. In
            the Baseball Pro arcade game, hitting singles or doubles results in
            a light on the play area blinking to move around. In Baseballoons,
            you can watch your unlockable figurines bounce around the bases.
            After accumulating enough coins a new character can be unlocked and
            selected from a scrollable list of unlocked characters.
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
            Revisiting difficulty
          </Typography>
          <Typography variant="body1" gutterBottom>
            After sharing builds around to different play testers, the
            difficulty was a recurring piece of feedback. The game was just too
            difficult, even with making the bat swing slower and easier to
            control. The arcade game was of course very difficult with many
            swings blasting the ball all around the machine only to find an out,
            and misses were instant outs as well.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I decided to let clear misses simply not count for anything, play
            on! Only hitting the out bombs would count as an out. This of course
            created much longer play sessions, but that just means more coins
            and more rewards, why not? Players found the game to be more fun and
            accessible, and I think a wider audience was able to enjoy the game.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={baseballoonsScreenshot}
              alt="Baseballoons screenshot"
              style={{ width: "100%", maxWidth: "200px", height: "auto" }}
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                Screenshot of the final game.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
