import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 100,
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.footer} justify="center" spacing={10}>
      <Typography>
        © {new Date().getFullYear()} Quick Tutorial Crafted with <Favorite /> by{" "}
        <a
          href="https://github.com/philalem"
          target="_blank"
          rel="noopener noreferrer"
        >
          Phillip
        </a>
      </Typography>
    </Grid>
  );
}
