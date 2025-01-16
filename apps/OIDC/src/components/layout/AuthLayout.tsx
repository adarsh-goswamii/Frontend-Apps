import { Box } from "@mui/material";
import React from "react";
import styles from "./layout.module.scss";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Box sx={{ bgcolor: "background.default" }} className={styles.authLayout}>
      {children}
      <Box
        className={styles.authLayout__circle}
        sx={{ bgcolor: "background.white" }}
      />
    </Box>
  );
};

export default AuthLayout;
