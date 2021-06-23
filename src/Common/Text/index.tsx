import { ReactNode } from "react";
import css from "./index.module.scss";
import cn from "classnames";

type Size = "s" | "m" | "l";
type View = "primary" | "secondary";

export interface IProps {
  children: ReactNode;
  size: Size;
  view: View;
}

export const Text: React.FC<IProps> = ({
  children,
  size = "m",
  view = "primary",
}: IProps) => {
  return (
    <p
      className={cn(
        css.text,
        css[`text_size_${size}`],
        css[`text_view_${view}`]
      )}
    >
      {" "}
      {children}{" "}
    </p>
  );
};
