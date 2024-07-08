import styles from './HeroStyles.module.css';
import HeroImg from '../../assets/hero-img.png';
function Hero() {
  return <section id="hero">
    <div>
      <img src={HeroImg} alt="Myimg" />
    </div>
  </section>;
  
}

export default Hero;