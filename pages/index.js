import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "Nextjs is a React framework for production and is the only one that is available to be there to build the apps that are production ready.",
    date: "2023-03-10",
  },
  {
    slug: "getting-started-with-nextjs-2",
    title: "Getting Started with NextJS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "Nextjs is a React framework for production and is the only one that is available to be there to build the apps that are production ready.",
    date: "2023-03-10",
  },
  {
    slug: "getting-started-with-nextjs-3",
    title: "Getting Started with NextJS",
    image: "getting-started-with-nextjs-3.png",
    excerpt:
      "Nextjs is a React framework for production and is the only one that is available to be there to build the apps that are production ready.",
    date: "2023-03-10",
  },
  {
    slug: "getting-started-with-nextjs-4",
    title: "Getting Started with NextJS",
    image: "getting-started-with-nextjs-4.png",
    excerpt:
      "Nextjs is a React framework for production and is the only one that is available to be there to build the apps that are production ready.",
    date: "2023-03-10",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default Home;
