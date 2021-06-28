import React from "react";
import cn from "classnames";
import styles from "./index.module.scss";

type JustifyContent = "start" | "center" | "space-between";
type AlignItems = "flex-start" | "center";
type FlexDirection = "column" | "row";

export interface IProps {
  children: React.ReactNode;
  style?: object;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flexDirection?: FlexDirection;
}

export const Flexbox: React.FC<IProps> = ({
  children,
  justifyContent = "start",
  alignItems = "flex-start",
  flexDirection = "column",
  style,
}: IProps) => {
  return (
    <div
      style={style}
      className={cn(
        styles.flexbox,
        styles[`flexbox_justify-content_${justifyContent}`],
        styles[`flexbox_align-items_${alignItems}`],
        styles[`flexbox_flex-direction_${flexDirection}`]
      )}
    >
      {children}
    </div>
  );
};
