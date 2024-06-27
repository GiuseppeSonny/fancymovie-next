import styles from "./moviecard.module.scss";

const MovieCard = () => {
  return (
    <>
      <div className={styles.movieCard}>
        <img
          src={"https://picsum.photos/seed/picsum/200/300"}
          alt="movie-card-img"
        />
        <p>titolo film</p>
      </div>
    </>
  );
};

export default MovieCard;
