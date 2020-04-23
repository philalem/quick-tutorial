import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Favorite from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import FeedSection from "./FeedSection";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    height: 140,
    width: 100,
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    marginTop: 100,
  },
}));

export default function PageLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <FeedSection />
      <Grid container className={classes.footer} justify="center" spacing={10}>
        <Typography>
          © {new Date().getFullYear()} Quick Tutorial Crafted with <Favorite />{" "}
          by{" "}
          <a
            href="https://github.com/philalem"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phillip
          </a>
        </Typography>
      </Grid>
    </div>
  );
}
