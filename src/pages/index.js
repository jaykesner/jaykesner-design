import React from "react"
import {
  Paper,
  Typography,
  Box,
  Container,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  Fab,
  Link,
  Fade,
  GridList,
  GridListTile,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Grow,
  GridListTileBar,
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
    <Layout header1="Jay Kesner" header2="Game Design Portfolio">
      <Container maxWidth="md">
        <Box my={4}>
          <Grid container>
            <Fade in timeout={1000}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h2">Hi! I'm Jay,</Typography>
                <Typography variant="h5">
                  a game designer and developer
                </Typography>
              </Grid>
            </Fade>
            <Fade in timeout={1650}>
              <Grid item xs={12} sm={6}>
                <Box py={1}>
                  <Typography variant="subtitle1" gutterBottom>
                    I'm a North Carolina based independent game designer and
                    developer. <strong>Pragmatic</strong> and{" "}
                    <strong>solutions-oriented </strong>
                    with a passion for <strong>scripting</strong> and{" "}
                    <strong>game engines</strong>.
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    I love to learn new ways of combining programming, art, and
                    sound to create the next great experience, realizing
                    projects from idea to implementation.
                  </Typography>
                  <Typography variant="subtitle1">
                    I'm currently working as a solo developer for the company I
                    helped create,{" "}
                    <Link href="http://43kstudios.com/">43K Studios.</Link>
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
            Released Projects
          </Typography>
        </Fade>
        <Grid container spacing={2}>
          <Grow in timeout={1250}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardActionArea
                  component={Link}
                  href="https://www.unrealengine.com/marketplace/en-US/product/race-kit"
                >
                  <CardMedia
                    image={racekitSplashImage}
                    title="race kit splash"
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography variant="h5">Race Kit</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description goes here. Description goes here. Description
                      goes here. Description goes here. Description goes here.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing={true}>
                  <Box width={30} mx={1}>
                    <img src={unrealIcon} alt="unreal icon" />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in timeout={1500}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardActionArea>
                  <CardMedia
                    image={darksectorSplashImage}
                    title="dark sector splash"
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography variant="h5">Dark Sector</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description goes here. Description goes here. Description
                      goes here. Description goes here. Description goes here.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing={true}>
                  <Box width={30} mx={1}>
                    <img src={unrealIcon} alt="unreal icon" />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in timeout={1750}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardActionArea>
                  <CardMedia
                    image={nuclearWinterSplashImage}
                    title="nuclear winter splash"
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography variant="h5">Nuclear Winter</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description goes here. Description goes here. Description
                      goes here. Description goes here. Description goes here.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing={true}>
                  <Box width={30} mx={1}>
                    <img src={unrealIcon} alt="unreal icon" />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in timeout={1250}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardActionArea
                  component={Link}
                  href="https://apps.apple.com/us/app/baseballoons/id1245697230?ls=1"
                >
                  <CardMedia
                    image={baseballoonsSplashImage}
                    title="baseballoons splash"
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography variant="h5">Baseballoons</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description goes here. Description goes here. Description
                      goes here. Description goes here. Description goes here.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing={true}>
                  <Box width={30} mx={1}>
                    <img src={appleIcon} alt="apple icon" />
                  </Box>
                  <Box width={30} mx={1}>
                    <img src={unityIcon} alt="unity icon" />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in timeout={1500}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardActionArea>
                  <CardMedia
                    image={mogulmountainSplashImage}
                    title="mogul mountain splash"
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography variant="h5">Mogul Mountain</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description goes here. Description goes here. Description
                      goes here. Description goes here. Description goes here.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing={true}>
                  <Box width={30} mx={1}>
                    <img src={appleIcon} alt="apple icon" />
                  </Box>
                  <Box width={30} mx={1}>
                    <img src={unityIcon} alt="unity icon" />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
          <Grow in timeout={1750}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" square>
                <CardActionArea>
                  <CardMedia
                    image={springshapesSplashImage}
                    title="spring shapes splash"
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography variant="h5">Spring Shapes</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description goes here. Description goes here. Description
                      goes here. Description goes here. Description goes here.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing={true}>
                  <Box width={30} mx={1}>
                    <img src={appleIcon} alt="apple icon" />
                  </Box>
                  <Box width={30} mx={1}>
                    <img src={unityIcon} alt="unity icon" />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grow>
        </Grid>
      </Container>
      {/* 
      <Container maxWidth="sm">
        <Typography variant="h6" align="center" gutterBottom>
          Quick Facts
        </Typography>
        <Grid container spacing={2}>
          <Fade in timeout={1000}>
            <Grid item xs={6}>
              <Paper variant="outlined" square>
                <Box display="flex" justifyContent="center" my={2}>
                  <Box width={40}>
                    <img src={unrealIcon} alt="unreal icon" />
                  </Box>
                </Box>
                <Typography variant="subtitle2" align="center" gutterBottom>
                  Released Unreal Engine projects
                </Typography>
                <Box px={1}>
                  <Divider />
                </Box>
                <List>
                  <ListItem>
                    <ListItemText
                      align="center"
                      primary="Race Kit"
                      secondary="Marketplace Asset"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      align="center"
                      primary="Dark Sector"
                      secondary="UE4 Mega Jam Entry"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      align="center"
                      primary="Nuclear Winter"
                      secondary="Winter UE4 Jam Entry"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Fade>
          <Fade in timeout={1000}>
            <Grid item xs={6}>
              <Paper variant="outlined" square>
                <Box display="flex" justifyContent="center" my={2}>
                  <Box width={40} mx={1}>
                    <img src={appleIcon} alt="apple icon" />
                  </Box>
                  <Box width={40} mx={1}>
                    <img src={unityIcon} alt="apple icon" />
                  </Box>
                </Box>
                <Typography variant="subtitle2" align="center" gutterBottom>
                  Shipped iOS projects
                </Typography>
                <Box px={1}>
                  <Divider />
                </Box>
                <List>
                  <ListItem
                    button
                    component={Link}
                    href="https://apps.apple.com/us/app/baseballoons/id1245697230?ls=1"
                  >
                    <ListItemText
                      align="center"
                      primary="Baseballoons"
                      secondary="3D Home Run Contest"
                    />
                  </ListItem>
                  <ListItem button>
                    <ListItemText
                      align="center"
                      primary="Spring Shapes"
                      secondary="Endless Springy Course"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      align="center"
                      primary="Mogul Mountain"
                      secondary="Frantic Downhill Ski"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Fade>
        </Grid>
      </Container>
      */}
      <Box bgcolor="primary.light" p={5} mt={2}>
        <Container maxWidth="sm">
          <Grid container direction="row-reverse">
            <Grid item xs={12} sm={6}>
              <Box textAlign="center" px={5} py={2}>
                <img src={raceKitImage} width="150" alt="race kit" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box color="common.white">
                <Typography variant="h5">Race Kit Design</Typography>
                <Typography variant="body1" gutterBottom>
                  Check out how I used Blueprint Visual Scripting in Unreal
                  Engine 4 to create a
                </Typography>
              </Box>
              <Box mt={5}>
                <Fab
                  color="secondary"
                  variant="extended"
                  component={GatsbyLink}
                  to="/racekit/"
                >
                  Read Case Study
                </Fab>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor="primary.main" p={5}>
        <Container maxWidth="sm">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center" py={2}>
                <img src={baseballoonsImage} alt="baseballoons" width="150" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box color="common.white">
                <Typography variant="h5">Baseballoons Design</Typography>
                <Typography variant="body1" gutterBottom>
                  Find out how inspiration from a physical arcade game fueled
                  the creation of Baseballoons
                </Typography>
              </Box>
              <Box mt={5}>
                <Fab
                  color="secondary"
                  variant="extended"
                  component={GatsbyLink}
                  to="/baseballoons/"
                >
                  Read Case Study
                </Fab>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box my={2}>
        <Container maxWidth="sm">
          <Typography variant="h5" gutterBottom>
            Prototypes
          </Typography>
          <Typography variant="subtitle2">
            Not every idea makes it, but something is always learned!
          </Typography>
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
