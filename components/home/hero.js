import classes from "./hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/corporate-guy-profile-image.avif"
          alt="An Image showing Me"
          width={360}
          height={360}
        />
      </div>
      <h1>Hi, I am Vaibhav</h1>
      <p>
        I specialize in web development, focusing on frontend frameworks such
        as Next.js and React.js, in addition to utilizing JavaScript, HTML, CSS,
        and more.
      </p>
    </section>
  );
};

export default Hero;
