import classes from './hero.module.scss'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/corporate-guy-profile-image.avif" alt="An Image showing Me" width={360} height={360} />
        </div>
        <h1>Hi, I am Vaibhav</h1>
        <p>
            I am a web developer specialized in web development using frontend framework like next.js, react.js along with Javascript, HTML, CSS etc.
        </p>
    </section>
  )
}

export default Hero