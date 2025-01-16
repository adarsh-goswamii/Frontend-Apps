import PasswordField from "@atoms/passwordField";
import Typography from "@atoms/typography/Typography";
import { Button, TextField } from "@mui/material";
import {
  H4,
  WEIGHT_LIGHT,
  WEIGHT_SEMI_BOLD,
} from "@shared/constants/material-ui";
import { useState } from "react";
import styles from "./clientLoginForm.module.scss";

type UserLoginProps = {
  onRegisterClick: () => void;
};

const UserLogin = ({ onRegisterClick }: UserLoginProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles.form}>
      <Typography
        variant={H4}
        fontWeight={WEIGHT_SEMI_BOLD}
        align="center"
        className={styles.form__heading}
      >
        Secure ID
      </Typography>

      <TextField
        label="email"
        value={email}
        variant="filled"
        onChange={(e) => setEmail(e?.target?.value)}
        size="small"
      />

      <PasswordField
        value={password}
        setValue={setPassword}
        label="Password"
        variant="filled"
      />

      <Button variant="contained">Login</Button>

      <Typography
        fontWeight={WEIGHT_LIGHT}
        className={styles.form__registerText}
      >
        Don't have an account ?
        <Typography
          color="info.main"
          onClick={onRegisterClick}
          className={styles.form__clickable}
        >
          Register
        </Typography>
      </Typography>
    </div>
  );
};

export default UserLogin;
