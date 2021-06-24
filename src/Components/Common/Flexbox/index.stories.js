import React from "react";
import { Flexbox } from "./index";
export default {
  component: Flexbox,
  title: "Common/Flexbox",
};

const Template = (args) => <Flexbox {...args}> Hello world </Flexbox>;

export const Primary = Template.bind({});
