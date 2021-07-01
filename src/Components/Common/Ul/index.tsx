import style from "./index.module.scss";
import cn from "classnames";

type Size = "s" | "m" | "l";

export interface IList {
  list: string[];
  size?: Size;
}

export const Ul = ({ list, size = "m" }: IList) => {
  return (
    <ul className={cn(style.list, style[`list_size_${size}`])}>
      {list.map((elem, i) => (
        <li className={style.item} key={i}>
          {" "}
          {elem}
        </li>
      ))}
    </ul>
  );
};
