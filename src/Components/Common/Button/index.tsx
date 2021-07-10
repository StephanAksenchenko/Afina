import { ReactNode } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import cn from "classnames";

export interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  classNames?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  href,
  classNames = "",
}) => {
  return (
    <Link href={href}>
      <a className={cn(styles.buttonLink, classNames)}>{children}</a>
    </Link>
  );
};
