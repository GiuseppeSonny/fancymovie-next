import Carousel from "./components/Carousel/Carousel";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import styles from "./page.module.scss";
import { v4 as uuidv4 } from "uuid";

const popMovie = Array.from({ length: 10 }, (_, i) => {
  return {
    id: uuidv4(),
    title: "Titanic",
    imageUrl: "https://picsum.photos/seed/picsum/200/300",
  };
});
const homeData = {
  filmOfTheWeek: [],
};
export default function Home() {
  return (
    <main>
      <HeroComponent />
      <section className={styles.carouselSection}>
        <Carousel movies={homeData} />
      </section>
    </main>
  );
}
