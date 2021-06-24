import { ReactNode } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

export interface ButtonLinkProps {
  children: ReactNode;
  href: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.buttonLink}>{children}</a>
    </Link>
  );
};
