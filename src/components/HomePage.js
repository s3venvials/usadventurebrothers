import React from "react";
import Container from "@material-ui/core/Container";
import Main from "./HomeComponents/Main";
import FeaturedPosts from "./HomeComponents/FeaturedPosts";

export default () => {
    return (
        <Container>
            <Main />
            <FeaturedPosts />
        </Container>
    )
}