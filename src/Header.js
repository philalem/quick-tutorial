import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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

export default function Header(props) {
  const classes = useStyles();
  const { handleDrawerToggle, displayDrawerHeader } = props;
  const isDefaultDrawerHeader = displayDrawerHeader || true;

  const renderMenuIcon = (isDefaultDrawerHeader) => {
    if (isDefaultDrawerHeader) {
      return (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      );
    }
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {renderMenuIcon(isDefaultDrawerHeader)}
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
