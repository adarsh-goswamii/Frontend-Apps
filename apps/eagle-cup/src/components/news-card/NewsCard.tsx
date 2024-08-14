import Image from "@atoms/image/Image";
import Typography from "@atoms/typography/Typography";
import styles from "./newsCard.module.scss";
import { CAPTION, COLOR_WHITE, WEIGHT_SEMI_BOLD } from "@shared/constants/material-ui";

interface CardProps {
  news: string;
  title: string;
  img: string;
  subtitle?: string;
}

const Card = ({ news, title, img, subtitle }: CardProps) => {
  return (
    <div className={styles.card}>
      <Image src={img} className={styles.card__bg} />
      <Typography
        className={styles.card__text}
        color={COLOR_WHITE}
        variant={CAPTION}
      >
        {title?.toUpperCase()}
      </Typography>
      <Typography className={styles.card__text} color={COLOR_WHITE} fontWeight={WEIGHT_SEMI_BOLD}>
        {news}
      </Typography>
      <Typography className={styles.card__text} color={COLOR_WHITE} variant={CAPTION}>
        {subtitle}
      </Typography>
    </div>
  );
};

export default Card;
