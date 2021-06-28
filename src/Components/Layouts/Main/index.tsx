import { ReactNode } from "react";
import { Header } from "../../UI/Header";
import styles from "./index.module.scss";

export interface IProps {
  children: ReactNode;
}

export const Main: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.navigation}>
        <Header />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
