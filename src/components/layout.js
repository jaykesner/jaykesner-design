import React from "react"
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@material-ui/core"
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded"
import { Link } from "gatsby"

export default function Layout(props) {
  const { children, header1, header2, hasBackButton } = props
  return (
    <>
      <CssBaseline />
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
    </>
  )
}
