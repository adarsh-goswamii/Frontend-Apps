import Typography from "@atoms/typography/Typography";
import styles from "./logo.module.scss";
import LogoIcon from "@assets/img/logo.svg";
import {
  COLOR_WHITE,
  SUBTITLE,
  WEIGHT_MEDIUM,
} from "@shared/constants/material-ui";
import Image from "@atoms/image/Image";

export interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`${styles.logo} ${className}`}>
      <Image src={LogoIcon} />

      <Typography
        fontWeight={WEIGHT_MEDIUM}
        variant={SUBTITLE}
        color={COLOR_WHITE}
        className={styles.logo__text}
      >
        Eagle Cup
      </Typography>
    </div>
  );
};

export default Logo;
