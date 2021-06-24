import { ReactNode } from "react";
import styles from "./index.module.scss";
import cn from "classnames";

type Align = "left" | "center" | "right";

export interface IProps {
  children: ReactNode;
  align?: Align;
}

export const H1: React.FC<IProps> = ({ children, align = "left" }: IProps) => {
  return (
    <h1 className={cn(styles.hx, styles[`hx_align_${align}`], styles.h1)}>
      {children}
    </h1>
  );
};

export const H2: React.FC<IProps> = ({ children, align = "left" }: IProps) => {
  return (
    <h2 className={cn(styles.hx, styles[`hx_align_${align}`], styles.h2)}>
      {children}
    </h2>
  );
};

export const H3: React.FC<IProps> = ({ children, align = "left" }: IProps) => {
  return (
    <h3 className={cn(styles.hx, styles[`hx_align_${align}`], styles.h3)}>
      {children}
    </h3>
  );
};
