import ClientLogin from "@components/authenticationForm/ClientLoginForm";
import ClientRegister from "@components/authenticationForm/ClientRegisterForm";
import AuthLayout from "@components/layout/AuthLayout";
import { useState } from "react";
import styles from "./clientAuth.module.scss";

const ClientAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <AuthLayout>
      <div className={styles.form}>
        {isLogin ? (
          <ClientLogin onRegisterClick={() => setIsLogin(false)} />
        ) : (
          <ClientRegister onLoginClick={() => setIsLogin(true)} />
        )}
      </div>
    </AuthLayout>
  );
};

export default ClientAuth;
