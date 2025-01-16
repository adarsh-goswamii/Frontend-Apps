import React from "react";
import styles from "./layout.module.scss";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles.authLayout}>
      {children}
      <span className={styles.authLayout__circle} />
    </div>
  );
};

export default AuthLayout;
