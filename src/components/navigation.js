import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    "& > * + *": {
      marginLeft: theme.spacing(20),
      padding: "1em"
    },
    marginTop: "2em",
    marginBottom: "2em"
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Link href="#">Test</Link>
      <Link href="#">Test</Link>
      <Link href="#">Test</Link>
      <Link href="#">Test</Link>
      <Link href="#">Test</Link>
      <Link href="#">Test</Link>
    </Container>
  );
};
