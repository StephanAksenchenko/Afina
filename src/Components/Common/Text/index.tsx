import { ReactNode } from "react";
import css from "./index.module.scss";
import cn from "classnames";

type Size = "s" | "m" | "l";
type View = "primary" | "secondary";

export interface IProps {
  children: ReactNode;
  size?: Size;
  view?: View;
  italic?: boolean;
}

export const Text = ({
  children,
  size = "m",
  view = "primary",
  italic = false,
}: IProps) => {
  return (
    <p
      className={cn(
        css.text,
        css[`text_size_${size}`],
        css[`text_view_${view}`],
        { [css.text_italic]: italic }
      )}
    >
      {" "}
      {children}{" "}
    </p>
  );
};
