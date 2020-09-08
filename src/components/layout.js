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
  Tooltip,
} from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import primaryColor from "@material-ui/core/colors/red"
import secondaryColor from "@material-ui/core/colors/green"
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded"
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor[800],
    },
    secondary: {
      main: secondaryColor["A400"],
    },
    type: "dark",
  },
  typography: {
    fontFamily: "Poppins",
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
  },
})

export default function Layout(props) {
  const { children, header1, header2, hasBackButton, hasEmailButton } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <title>Jay Kesner - {header1}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
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
          <Typography variant="subtitle2">{header1}</Typography>
          <Box flexGrow={1} />
          {hasEmailButton ? (
            <Tooltip title="Email me!" arrow>
              <IconButton
                color="inherit"
                component={MaterialLink}
                href="mailto:jaykesner@gmail.com"
              >
                <MailOutlineRoundedIcon />
              </IconButton>
            </Tooltip>
          ) : null}
          <Typography align="right" variant="subtitle2">
            {header2}
          </Typography>
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
