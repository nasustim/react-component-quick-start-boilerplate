import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Component from ".";

export default {
  title: "Component",
  component: Component,
} as ComponentMeta<typeof Component>;

export const Normal: ComponentStory<typeof Component> = () => <Component />;
