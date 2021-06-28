import { ReactNode } from "react";
import styles from "./index.module.scss";
import cn from "classnames";

type ColGap = "s" | "m" | "l";
type RowGap = "s" | "m" | "l";

interface IProps {
  children: ReactNode;
  cols: number; //columns
  colGap?: ColGap;
  rowGap?: RowGap;
}

export const Grid = ({
  children,
  cols,
  colGap = "m",
  rowGap = "m",
}: IProps) => {
  return (
    <div
      className={cn(
        styles.grid,
        styles[`grid_cols_${cols}`],
        styles[`grid_col-gap_${colGap}`],
        styles[`grid_row-gap_${rowGap}`]
      )}
    >
      {children}
    </div>
  );
};
