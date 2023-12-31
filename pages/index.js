import Head from "next/head";
import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Vaibhav's Blog</title>
        <meta name="description" content="a blog of a web developer" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 10000000000000000000,
  };
};

export default Home;
