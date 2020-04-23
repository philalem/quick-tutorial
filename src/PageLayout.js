import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Favorite from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import FeedSection from "./FeedSection";
import SideBar from "./SideBar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  appBar: {
    minWidth: "100%",
    zIndex: 1400,
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
}));

export default function PageLayout() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <SideBar isOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
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
