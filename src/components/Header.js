import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: "1em"
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item lg={4}></Grid>
        <Grid item lg={4}>
        <Typography variant="h5" style={{ lineHeight: "2.534" }}>U.S Adventure Brothers</Typography>
        </Grid>
        <Grid item lg={4}>
          <IconButton>
            <YouTubeIcon fontSize="large" style={{ color: "red" }} />
          </IconButton>
        </Grid>
      </Grid>

      <Divider />
    </Container>
  );
};
