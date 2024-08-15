import Typography from "@atoms/typography/Typography";
import styles from "./home.module.scss";
import {
  COLOR_WHITE,
  H3,
  WEIGHT_MEDIUM,
  WEIGHT_SEMI_BOLD,
} from "@shared/constants/material-ui";
import Card from "@components/news-card/NewsCard";
import Card1BG from '@assets/img/card1-bg.jpg';

const Home = () => {
  return (
    <div className={styles.page}>
      <section className={styles.page__hero}>
        <Typography
          fontWeight={WEIGHT_MEDIUM}
          color={COLOR_WHITE}
          className={styles.page__heading}
        >
          NEWS
        </Typography>
        <Typography
          fontWeight={WEIGHT_SEMI_BOLD}
          color={COLOR_WHITE}
          className={styles.page__heading}
          variant={H3}
        >
          Team Raees Clinches First Eagle Cup Victory in Thrilling Decider!
        </Typography>
      </section>

      <section className={styles.page__news}>
        <Card
          title="Highest Scorer"
          news="Vishal's Stellar Performance Can't Save Team from Eagle Cup Defeat!"
          subtitle="AVG: 10.50 | SR: 53.85"
          img={Card1BG}
        />
      </section>
    </div>
  );
};

export default Home;
