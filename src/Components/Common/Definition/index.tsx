import style from "./index.module.scss";

export interface IDefinition {
  termin: string;
  essence: string;
}

export const Definition = ({ termin, essence }: IDefinition) => {
  return (
    <div className={style.root}>
      <p>
        <span className={style.termin}> {termin}</span> - {essence}
      </p>
    </div>
  );
};
