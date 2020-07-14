import React from "react"
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Divider,
  Link as MaterialLink,
} from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import primaryColor from "@material-ui/core/colors/red"
import secondaryColor from "@material-ui/core/colors/blue"
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded"
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor[900],
    },
    secondary: {
      main: secondaryColor[700],
    },
    type: "dark",
  },
})

export default function Layout(props) {
  const { children, header1, header2, hasBackButton, hasEmailButton } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <title>Jay Kesner - {header1}</title>
      </Helmet>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {hasBackButton ? (
            <Box mr={2}>
              <IconButton edge="start" color="inherit" component={Link} to="/">
                <KeyboardBackspaceRoundedIcon />
              </IconButton>
            </Box>
          ) : null}
          <Typography variant="h6">{header1}</Typography>
          <Box flexGrow={1} />
          {hasEmailButton ? (
            <IconButton
              color="inherit"
              component={MaterialLink}
              href="mailto:jaykesner@gmail.com"
            >
              <MailOutlineRoundedIcon />
            </IconButton>
          ) : null}
          <Typography variant="h6">{header2}</Typography>
        </Toolbar>
      </AppBar>
      {children}
      <Box mt={10} mb={6}>
        <Box pt={5} pb={2} px={5}>
          <Divider />
        </Box>
        <Typography variant="body2" align="center">
          Copyright Jay Kesner 2020
        </Typography>
      </Box>
    </ThemeProvider>
  )
}
