import React from "react";
import { ButtonLink } from "./index";
export default {
  component: ButtonLink,
  title: "Common/Button",
};

export const ButtonAsLink = () => (
  <ButtonLink href="/"> Hello world </ButtonLink>
);
