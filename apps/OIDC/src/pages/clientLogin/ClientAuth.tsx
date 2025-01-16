import AuthLayout from "@components/layout/AuthLayout";
import { useState } from "react";
import styles from "./clientAuth.module.scss";
import ClientLogin from "@components/authenticationForm/ClientLoginForm";

const ClientAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <AuthLayout>
      <div className={styles.form}>
        <ClientLogin />
      </div>
    </AuthLayout>
  );
};

export default ClientAuth;
