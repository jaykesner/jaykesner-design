import React from "react"
import Layout from "../components/layout"
import { Container, Typography, Box, Link } from "@material-ui/core"

import raceKitSplashImage from "../img/racekit-splash.png"
import raceKitCoreBlueprints from "../img/racekit-coreblueprints.png"
import raceKitCompare from "../img/racekit-compare.png"
import raceKitSort from "../img/racekit-sort.png"
import raceKitComponent from "../img/racekit-component.png"
import raceKitDistance from "../img/racekit-distance.png"
import raceKitDot from "../img/racekit-dot.png"
import raceKitPlane from "../img/racekit-plane.png"
import raceKitMultiplayer from "../img/racekit-multiplayer.png"

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
            scripting for the Unreal Engine 4 marketplace. As soon as I played
            with the sample vehicle in UE4, I knew an asset for racing games
            would be a valuable resource for the incredible UE4 community. I
            aimed to provide a system that is easy to understand, flexible,
            accurate, and works with multiplayer.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={raceKitSplashImage}
              alt="Race Kit splash"
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            />
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
            I knew Race Kit needed to be easy to understand and implement in any
            project, being valuable as a time saver for experienced users as
            well as easily accessible for those new to scripting.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The system I designed requires only 3 blueprints users need to
            implement in their game. A manager actor blueprint placed in the
            level per race to keep track of the race data and settings, a check
            point trigger box actor blueprint placed along the race path to
            understand where the racers are, and a component blueprint to
            automatically register any pawns participating in the race with the
            manager.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={raceKitCoreBlueprints}
              alt="Race Kit core blueprints"
              style={{ width: "100%", maxWidth: "267px", height: "auto" }}
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                The core blueprints needed for a race.
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" gutterBottom>
            Sorting positions
          </Typography>
          <Typography variant="body1" gutterBottom>
            The first major challenge was figuring out how the manager object
            will keep track of racer positions. When the race starts the manager
            needs to constantly update with current racer information, sorting
            the array of Race Kit components into their correct placement.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The first step of the solution was to create a blueprint interface
            that will be used to compare objects. An interface is great because
            it seperates the logic of comparing objects from the implementation,
            which is somewhat complex for the race data. The interface inputs
            the other object and returns an integer, -1 if it's less than the
            other object, 1 if it's more, and 0 if it's even.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={raceKitCompare}
              alt="Race Kit compare interface"
              style={{ width: "100%", maxWidth: "439px", height: "auto" }}
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                The compare to interface.
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            The next step was to create an array sort function. I implemented a
            sorting algorithm into a blueprint function library so it can be
            used anywhere in the project. The function takes in an array of
            objects and returns the sorted array. It utilizes the compare to
            interface to generically compare objects without the need to know
            how exactly the objects are compared.
          </Typography>
          <Box textAlign="center" m={4}>
            <Link href={raceKitSort}>
              <img
                src={raceKitSort}
                alt="Race Kit sort blueprint"
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
              />
            </Link>
            <Box mx="auto">
              <Typography variant="caption" align="center">
                The sorting algorithm made in blueprints. Click to view larger.
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            Next I implemented the compare to interface in the Race Kit
            component, comparing Race Kit components by current lap, current
            checkpoint, or distance to the next check point. Now the Race Kit
            manager blueprint can call the sort function an array of Race Kit
            components, placing them in the correct order! Since the sort
            function is not directly tied to a specific object, it has the added
            benefit of being able to be implemented with the Race Kit check
            points as well. Users can add or remove checkpoints and the manager
            will automatically keep them stored in order.
          </Typography>
          <Box textAlign="center" m={4}>
            <Link href={raceKitComponent}>
              <img
                src={raceKitComponent}
                alt="Race Kit component"
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
              />
            </Link>
            <Box mx="auto">
              <Typography variant="caption" align="center">
                The compare to interface implemented on the Race Kit component.
                Click to view larger.
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
          <Typography variant="body1" gutterBottom>
            I started out by calculating a value on the Race Kit component of
            the distance between the racer and the check point, but this creates
            some inaccuracies.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={raceKitDistance}
              alt="racer distance problem"
              style={{ width: "100%", maxWidth: "460px", height: "auto" }}
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                Issue with using a simple distance calcuation.
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            This illustration demonstrates the issue with a raw distance value.
            The B triangle is clearly closer to the red box than the A triangle,
            but because it's not at the center line of the box it's distance
            value will be larger, causing it to be placed behind the A triangle.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The solution uses the magic of dot product. In Race Kit, the dot
            product of the difference between the front point of the racer and
            difference between the front of the racer and the direction the
            check point points results in a number that accurately calculates
            which racer is closest to the check point. Notice how in the
            following image, even with different vector lengths the dot product
            is the same. Now, wherever the racer is on the track, the distance
            to the next check point will be accurate.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={raceKitDot}
              alt="Dot product"
              style={{ width: "100%", maxWidth: "439px", height: "auto" }}
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                Dot product visualized from{" "}
                <Link href="https://www.falstad.com/dotproduct/">
                  falstad.com
                </Link>
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" gutterBottom>
            Flexible, expanded use cases
          </Typography>
          <Typography variant="body1" gutterBottom>
            Creating Race Kit using an actor blueprint in the level and an actor
            component enables a flexible implementation. It means that any type
            of player pawn can be used with the system, not just vehicles.
            There's no interference with established game design and be dropped
            in to any existing game. Race Kit allows for multiple races in a
            single level. Just as easy as the system can be used in a typical
            racing game, it can be used in a character controlled action game as
            a side mission or quest.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={raceKitPlane}
              alt="Race Kit flying saucer"
              style={{ width: "100%", maxWidth: "460px", height: "auto" }}
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                Race Kit example using a flying saucer.
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" gutterBottom>
            Finishing touches
          </Typography>
          <Typography variant="body1" gutterBottom>
            The final pieces of creating Race Kit involved making a sample level
            to demonstrate and explain the functionality. I also created a UI
            using UMG widgets to demonstrate the placements and data Race Kit
            can provide.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Race Kit is also set up for multiplayer support using the
            replication features of Unreal Engine 4. Multiplayer is more
            important now than ever, and a user of Race Kit can be racing
            against their friends immediately after implementing the asset.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={raceKitMultiplayer}
              alt="Race Kit multiplayer"
              style={{ width: "100%", maxWidth: "460px", height: "auto" }}
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                Race Kit example of multiplayer.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
