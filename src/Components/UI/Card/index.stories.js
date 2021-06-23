import React from "react";
import { Card } from "./index";
export default {
  component: Card,
  title: "UI/Card",
};

const Template = (args) => (
  <Card {...args}>
    {" "}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo
    ullamcorper. In egestas erat imperdiet sed euismod nisi porta lorem mollis.
    Ac feugiat sed lectus vestibulum. Non curabitur gravida arcu ac tortor
    dignissim convallis. Morbi non arcu risus quis varius.{" "}
  </Card>
);

export const Primary = Template.bind({});
