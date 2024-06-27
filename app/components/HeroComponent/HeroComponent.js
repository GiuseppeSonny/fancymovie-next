import styles from "./hero.module.scss";

const HeroComponent = ({ movie }) => {
  return (
    <div className={styles.heroContainer}>
      <h2></h2>
      <img src={movie} alt="hero-img" />
      <button className={styles.heroBtn}>Discover more</button>
    </div>
  );
};

export default HeroComponent;
