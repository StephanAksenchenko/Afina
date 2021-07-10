import { ButtonLink } from "../../Common/Button";
import style from "./BackButton.module.scss";

export const BackButton = () => {
  return (
    <ButtonLink classNames={style.button} href="/lessons/">
      Back
    </ButtonLink>
  );
};
