import styles from "./index.module.scss";
import cn from "classnames";

export interface IProps {
  className?: string;
}

export const Header: React.FC<IProps> = ({ className }: IProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <Logo />
      <Links />
    </header>
  );
};

const Logo: React.FC = () => {
  return <span className={styles.logo}> LOGO </span>;
};

const Links: React.FC = () => {
  return (
    <ul className={styles.links}>
      <li> home </li>
      <li> contacts</li>
    </ul>
  );
};
