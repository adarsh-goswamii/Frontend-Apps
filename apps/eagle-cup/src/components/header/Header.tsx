import Logo from '@components/logo/Logo';
import HamburgerIcon from '@assets/img/hamburger.svg';
import styles from './header.module.scss';
import Image from '@atoms/image/Image';

export interface HeaderProps {

};

const Header = ({

}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Logo className={styles.header__icon} />
      <Image src={HamburgerIcon} />
    </header>
  )
};

export default Header;