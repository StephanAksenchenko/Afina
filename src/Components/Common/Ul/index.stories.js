import React from "react";
import { Ul } from "./index";
export default {
  component: Ul,
  title: "Common/Ul",
};

export const Base = () => <Ul list={["point1", "point2", "point3"]} />;
