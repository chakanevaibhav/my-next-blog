import React from "react";
import classes from "./featured-posts.module.scss";
import PostsGrid from "../posts/posts-grid";

const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
