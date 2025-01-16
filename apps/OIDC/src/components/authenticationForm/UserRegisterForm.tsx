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

type UserRegisterProps = {
  onLoginClick: () => void;
};

const UserRegister = ({ onLoginClick }: UserRegisterProps) => {
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
        label="Name"
        value={name}
        variant="filled"
        onChange={(e) => setName(e?.target?.value)}
        size="small"
      />

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

      <Button variant="contained">Register</Button>

      <Typography
        fontWeight={WEIGHT_LIGHT}
        className={styles.form__registerText}
      >
        Already have an account ?
        <Typography
          color="info.main"
          onClick={onLoginClick}
          className={styles.form__clickable}
        >
          Login
        </Typography>
      </Typography>
    </div>
  );
};

export default UserRegister;
