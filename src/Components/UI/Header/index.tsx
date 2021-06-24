import styles from "./index.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
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
