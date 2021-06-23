import React from "react";
import { Text } from "./index";
export default {
  component: Text,
  title: "Common/Text",
};

const Template = (args) => <Text {...args}> Hello world </Text>;

export const Primary = Template.bind({});
