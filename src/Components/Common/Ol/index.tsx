import style from "./index.module.scss";
import cn from "classnames";

type Size = "s" | "m" | "l";

export interface IOl {
  list: string[];
  size?: Size;
}

export const Ol = ({ list, size = "m" }: IOl) => {
  return (
    <ol className={cn(style.list, style[`list_size_${size}`])}>
      {list.map((elem, i) => (
        <li key={i}> {elem}</li>
      ))}
    </ol>
  );
};
