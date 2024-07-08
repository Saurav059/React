import styles from './HeroStyles.module.css';
import HeroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';


function Hero() {
  return (
  <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img 
      className={styles.hero} 
      src={HeroImg} 
      alt="PP of Saurav Devkota" 
      />
      <img 
      className={styles.colorMode}
      src={themeIcon} 
      alt="Color Mode icon" 
      />
    </div>

    <div className={styles.info}>
      <h1>Saurav <br/> 
      Devkota</h1>
      <h2>Frontend Developer</h2>
      <span>
        <a href="https://x.com/SauravDevk19669" target='blank'>
        <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a href="https://www.github.com/Saurav059" target='blank'>
        <img src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/saurav059" target='blank'>
        <img src={linkedinIcon} alt="Linkedin icon" />
        </a>
      </span>
    </div>
  </section>
  );
}

export default Hero;