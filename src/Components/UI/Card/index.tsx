import { ReactNode } from "react";
import styles from "./index.module.scss";

export interface IProps {
  children: ReactNode;
}

export const Card: React.FC<IProps> = ({ children }: IProps) => {
  return <div className={styles.card}>{children}</div>;
};
