import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/ikostadinov.png'
          alt='Image showing Ivan'
          width={380}
          height={380}
        />
      </div>
      <h1>Hello, I'm Ivan.</h1>
      <p>
        My blog is about Web Development - especially Front End Frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
