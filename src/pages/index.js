import React from "react"
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Paper,
  Typography,
  Box,
  Container,
  Grid,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(2),
  },
}))

export default function Home() {
  const styles = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6">Jay Kesner - Game Design</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Typography variant="h1" align="center">
          Hello!
        </Typography>
        <Typography variant="h5" align="center">
          I'm a North Carolina based game designer
        </Typography>
        <Grid container spacing={2} className={styles.grid}>
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" square>
              <Typography variant="h5">Content</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" square>
              <Typography variant="h5">Content</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" square>
              <Typography variant="h5">Content</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" square>
              <Typography variant="h5">Content</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" square>
              <Typography variant="h5">Content</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" square>
              <Typography variant="h5">Content</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
