import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "100%",
      height: "40vh",
      display: "flex",
      flexWrap: "wrap",
      boxSizing: "border-box",
      marginBottom: "25vh"
    }
  }));

export default () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} >
            <img src="https://res.cloudinary.com/frontndev/image/upload/v1603070119/tommy-lisbin-2DH-qMX6M4E-unsplash_kfwy8t.jpg" alt="logo" width="100%" height="400vh" />
        </Container>
    )
}