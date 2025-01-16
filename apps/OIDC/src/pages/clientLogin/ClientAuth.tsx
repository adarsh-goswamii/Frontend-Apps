import AuthLayout from "@components/layout/AuthLayout";
import styles from "./clientAuth.module.scss";
import { useState } from "react";

const ClientAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <AuthLayout>
      <div className={styles.form}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit
        fugit ullam accusamus corrupti! Accusamus adipisci obcaecati, earum hic
        praesentium neque itaque sapiente dolorum dicta, eveniet, voluptatem
        assumenda architecto magni.
      </div>
    </AuthLayout>
  );
};

export default ClientAuth;
