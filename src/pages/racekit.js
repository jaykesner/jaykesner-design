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
            <img src={raceKitSplashImage} alt="Race Kit splash" width="400" />
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
              width="267"
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
            The first step of the solution is to create a blueprint interface
            that will be used to compare objects. An interface is great because
            it seperates the logic of comparing objects from the implementation,
            which is somewhat complex for our race data. It inputs the other
            object and returns an integer, -1 if it's less than the other
            object, 1 if it's more, and 0 if it's even.
          </Typography>
          <Box textAlign="center" m={4}>
            <img
              src={raceKitCompare}
              alt="Race Kit compare interface"
              width="439"
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                The compare to interface.
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            The next step is to create an array sort function. I implemented a
            sorting algorithm into a blueprint function library so it can be
            used anywhere in the project. This function will take in an array of
            objects and return the sorted array. It uses the compare to
            interface to compare objects without the need to know how exactly
            the objects are compared.
          </Typography>
          <Box textAlign="center" m={4}>
            <Link href={raceKitSort}>
              <img
                src={raceKitSort}
                alt="Race Kit sort blueprint"
                width="400"
              />
            </Link>
            <Box mx="auto">
              <Typography variant="caption" align="center">
                The sorting algorithm made in blueprints. Click to view larger.
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            Now the Race Kit component can implement the compare to interface,
            and the manager blueprint can call the sort function an array of
            Race Kit components! Since the sort function is not directly tied to
            a specific object, it has the added benefit of being able to be
            implemented with the Race Kit check points as well. Users can add or
            remove checkpoints and the manager will automatically keep them
            stored in order.
          </Typography>
          <Box textAlign="center" m={4}>
            <Link href={raceKitComponent}>
              <img
                src={raceKitComponent}
                alt="Race Kit component"
                width="400"
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
              alt="initial racer distance"
              width="460"
            />
            <Box mx="auto">
              <Typography variant="caption" align="center">
                Issue with using a simple distance calcuation.
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            This illustration demonstrates the issue with a raw distance value.
            The B racer is clearly closer to the check point than the A racer,
            but because it's not at the center line of the check point it's
            distance value will be larger, causing it to be placed behind the A
            racer.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The solution uses the magic of dot product. In Race Kit, the dot
            product of the difference between the front point of the racer and
            difference between the front of the racer and the direction the
            check point points results in a number that accurately calculates
            which racer is closest to the check point. Notice how in the
            following image, even with different vector lengths the dot product
            is the same.
          </Typography>
          <Box textAlign="center" m={4}>
            <img src={raceKitDot} alt="Dot product" width="439" />
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
