import UserLogin from "@components/authenticationForm/UserLoginForm";
import UserRegister from "@components/authenticationForm/UserRegisterForm";
import AuthLayout from "@components/layout/AuthLayout";
import { useState } from "react";
import styles from "./userAuth.module.scss";

const UserAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <AuthLayout>
      <div className={styles.form}>
        {isLogin ? (
          <UserLogin onRegisterClick={() => setIsLogin(false)} />
        ) : (
          <UserRegister onLoginClick={() => setIsLogin(true)} />
        )}
      </div>
    </AuthLayout>
  );
};

export default UserAuth;
