import React from "react";
import { Main } from "./index";
export default {
  component: Main,
  title: "Layouts/Main",
};

const Template = (args) => <Main {...args}> Hello world </Main>;

export const Primary = Template.bind({});
