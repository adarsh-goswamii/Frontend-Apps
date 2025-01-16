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

type ClientRegisterProps = {
  onLoginClick: () => void;
};

const ClientRegister = ({ onLoginClick }: ClientRegisterProps) => {
  const [name, setName] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
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
        label="Organisation Name"
        value={name}
        variant="filled"
        onChange={(e) => setName(e?.target?.value)}
        size="small"
      />

      <TextField
        label="Organisation Domain"
        value={domain}
        variant="filled"
        onChange={(e) => setDomain(e?.target?.value)}
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
        Already have an account ?
        <Typography
          color="info.main"
          onClick={onLoginClick}
          className={styles.form__clickable}
        >
          Register
        </Typography>
      </Typography>
    </div>
  );
};

export default ClientRegister;
