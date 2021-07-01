import React from "react";
import { Ol } from "./index";
export default {
  component: Ol,
  title: "Common/Ol",
};

export const Base = () => <Ol list={["point1", "point2", "point3"]} />;
