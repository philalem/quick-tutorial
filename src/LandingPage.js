import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FeedSection from "./FeedSection";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <SideBar isOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <FeedSection />
      <Footer />
    </div>
  );
}
