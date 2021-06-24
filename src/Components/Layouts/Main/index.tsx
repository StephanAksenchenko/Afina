import { ReactNode } from "react";
import { Header } from "../../UI/Header";
import styles from "./index.module.scss";

export interface IProps {
  children: ReactNode;
}

export const Main: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <div>
      <Header className={styles.nav} />
      {children}
    </div>
  );
};
