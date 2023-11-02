import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const Home = (props) => {
  return (
    <>
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
