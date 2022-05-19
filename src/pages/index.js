import React from "react"
import {
  Typography,
  Box,
  Container,
  Grid,
  Fab,
  Fade,
  GridList,
  GridListTile,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grow,
  Button,
} from "@material-ui/core"
import Layout from "../components/layout"
import { Link as GatsbyLink } from "gatsby"
import appleIcon from "../svg/apple.svg"
import unityIcon from "../svg/unity.svg"
import unrealIcon from "../svg/unrealengine.svg"
import racekitSplashImage from "../img/racekit-splash.png"
import darksectorSplashImage from "../img/darksector-splash.png"
import nuclearWinterSplashImage from "../img/nuclearwinter-splash.png"
import baseballoonsSplashImage from "../img/baseballoons-splash.png"
import springshapesSplashImage from "../img/springshapes-splash.png"
import mogulmountainSplashImage from "../img/mogulmountain-splash.png"
import raceKitImage from "../img/racekit.png"
import baseballoonsImage from "../img/baseballoons.png"
import prototypeData from "../img/prototypeData"

export default function Home() {
  return (
    <Layout
      header1="Game Development Portfolio"
      header2="Jay Kesner"
      hasEmailButton
    >
      <Container maxWidth="md">
        <Box my={4}>
          <Grid container>
            <Fade in timeout={1000}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h2">Hi! I'm Jay,</Typography>
                <Typography variant="h5">
                  a game designer and developer
                </Typography>
                <Box my={4}>
                  <Fab
                    variant="extended"
                    color="primary"
                    component={GatsbyLink}
                    to="/aboutme/"
                  >
                    About Me
                  </Fab>
                </Box>
              </Grid>
            </Fade>
            <Fade in timeout={1650}>
              <Grid item xs={12} sm={6}>
                <Box my={1}>
                  <Typography variant="subtitle1" gutterBottom>
                    I'm a North Carolina based independent game designer and
                    developer. I enjoy all aspects of the game creation process,
                    from concept and asset creation to technical tools and
                    programming iteration.
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    I enjoy learing new and creative ways of combining
                    programming, art, and sound to make the next great
                    experience, realizing projects from ideas to implementation.
                  </Typography>
                </Box>
              </Grid>
            </Fade>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Fade in timeout={1000}>
          <Typography variant="h5" gutterBottom>
            Released Mobile Projects
          </Typography>
        </Fade>
        <Grid container spacing={2}>
          <Grow in timeout={1250}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardMedia
                  image={baseballoonsSplashImage}
                  title="baseballoons splash"
                  style={{ height: 200 }}
                />
                <CardContent style={{ height: 120 }}>
                  <Typography variant="h5">Baseballoons</Typography>
                  <Typography variant="caption" color="textSecondary">
                    Design, Programming, Art
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Colorful 3D home run contest made for the Apple App Store.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Box width={30} mx={1}>
                    <img src={appleIcon} alt="apple icon" />
                  </Box>
                  <Box width={30} mx={1}>
                    <img src={unityIcon} alt="unity icon" />
                  </Box>
                  <Box flexGrow={1} />
                  <Button size="small">App Store</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in timeout={1500}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardMedia
                  image={mogulmountainSplashImage}
                  title="mogul mountain splash"
                  style={{ height: 200 }}
                />
                <CardContent style={{ height: 120 }}>
                  <Typography variant="h5">Mogul Mountain</Typography>
                  <Typography variant="caption" color="textSecondary">
                    Design & Programming
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    2D pixel art mogul ski challenge made for the Apple App
                    Store.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Box width={30} mx={1}>
                    <img src={appleIcon} alt="apple icon" />
                  </Box>
                  <Box width={30} mx={1}>
                    <img src={unityIcon} alt="unity icon" />
                  </Box>
                  <Box flexGrow={1} />
                  <Button
                    size="small"
                    href="https://apps.apple.com/us/app/mogul-mountain/id870263234"
                  >
                    App Store
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in timeout={1750}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardMedia
                  image={springshapesSplashImage}
                  title="spring shapes splash"
                  style={{ height: 200 }}
                />
                <CardContent style={{ height: 120 }}>
                  <Typography variant="h5">Spring Shapes</Typography>
                  <Typography variant="caption" color="textSecondary">
                    Design, Programming, Art
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Flingy 2D tapping challenge course made for the Apple App
                    Store.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Box width={30} mx={1}>
                    <img src={appleIcon} alt="apple icon" />
                  </Box>
                  <Box width={30} mx={1}>
                    <img src={unityIcon} alt="unity icon" />
                  </Box>
                  <Box flexGrow={1} />
                  <Button size="small">App Store</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
        </Grid>
        <Fade in timeout={1000}>
          <Box pt={2}>
            <Typography variant="h5" gutterBottom>
              Released PC Projects
            </Typography>
          </Box>
        </Fade>
        <Grid container spacing={2}>
          <Grow in timeout={1250}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardMedia
                  image={racekitSplashImage}
                  title="race kit splash"
                  style={{ height: 200 }}
                />
                <CardContent style={{ height: 140 }}>
                  <Typography variant="h5">Race Kit</Typography>
                  <Typography variant="caption" color="textSecondary">
                    Design & Programming
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Positional racing system created using Blueprints for the
                    Unreal Engine 4 Marketplace.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Box width={30} mx={1}>
                    <img src={unrealIcon} alt="unreal icon" />
                  </Box>
                  <Box flexGrow={1} />
                  <Button
                    size="small"
                    href="https://www.unrealengine.com/marketplace/en-US/product/race-kit"
                  >
                    UE4 Marketplace
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in timeout={1500}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardMedia
                  image={darksectorSplashImage}
                  title="dark sector splash"
                  style={{ height: 200 }}
                />
                <CardContent style={{ height: 140 }}>
                  <Typography variant="h5">Dark Sector</Typography>
                  <Typography variant="caption" color="textSecondary">
                    Design, Programming, Art
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    3D first person shooter made for an Unreal Engine 4 mega
                    jam.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Box width={30} mx={1}>
                    <img src={unrealIcon} alt="unreal icon" />
                  </Box>
                  <Box flexGrow={1} />
                  <Button
                    size="small"
                    href="https://drive.google.com/file/d/13D469q7vsWBwr76AEA80yFDTwabdXCxs/view"
                  >
                    Google Drive
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in timeout={1750}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardMedia
                  image={nuclearWinterSplashImage}
                  title="nuclear winter splash"
                  style={{ height: 200 }}
                />
                <CardContent style={{ height: 140 }}>
                  <Typography variant="h5">Nuclear Winter</Typography>
                  <Typography variant="caption" color="textSecondary">
                    Design, Programming, Art
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Top down 2D pixel art action game made for an Unreal Engine
                    4 game jam.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Box width={30} mx={1}>
                    <img src={unrealIcon} alt="unreal icon" />
                  </Box>
                  <Box flexGrow={1} />
                  <Button
                    size="small"
                    href="https://43k.itch.io/nuclear-winter"
                  >
                    Itch.io
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
        </Grid>
      </Container>
      <Box bgcolor="primary.light" p={5} mt={2}>
        <Container maxWidth="sm">
          <Grid container direction="row-reverse">
            <Fade in timeout={1100}>
              <Grid item xs={12} sm={6}>
                <Box textAlign="center" mx={10} my={2}>
                  <img src={raceKitImage} width="150" alt="race kit" />
                </Box>
              </Grid>
            </Fade>
            <Fade in timeout={1250}>
              <Grid item xs={12} sm={6}>
                <Box color="common.white">
                  <Typography variant="h3" gutterBottom>
                    Race Kit Development
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Check out how I used Blueprint visual scripting in Unreal
                    Engine 4 to create an asset for the UE4 marketplace.
                  </Typography>
                </Box>
                <Box mt={5}>
                  <Fab
                    color="secondary"
                    variant="extended"
                    component={GatsbyLink}
                    to="/racekit/"
                  >
                    Read More
                  </Fab>
                </Box>
              </Grid>
            </Fade>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor="primary.main" p={5}>
        <Container maxWidth="sm">
          <Grid container>
            <Fade in timeout={1500}>
              <Grid item xs={12} sm={6}>
                <Box textAlign="center" py={2}>
                  <img src={baseballoonsImage} alt="baseballoons" width="150" />
                </Box>
              </Grid>
            </Fade>
            <Fade in timeout={1750}>
              <Grid item xs={12} sm={6}>
                <Box color="common.white">
                  <Typography variant="h3" gutterBottom>
                    Baseballoons Design
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Find out how inspiration from a local arcade game fueled the
                    creation of Baseballoons.
                  </Typography>
                </Box>
                <Box mt={5}>
                  <Fab
                    color="secondary"
                    variant="extended"
                    component={GatsbyLink}
                    to="/baseballoons/"
                  >
                    Read More
                  </Fab>
                </Box>
              </Grid>
            </Fade>
          </Grid>
        </Container>
      </Box>
      <Box my={2}>
        <Container maxWidth="sm">
          <Fade in timeout={1200}>
            <Typography variant="h5" gutterBottom>
              Prototypes
            </Typography>
          </Fade>
        </Container>
      </Box>
      <Container maxWidth="sm">
        <GridList cellHeight={160} cols={3}>
          {prototypeData.map(tile => (
            <GridListTile
              key={tile.title}
              cols={tile.cols || 1}
              rows={tile.rows || 1}
            >
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </Layout>
  )
}
