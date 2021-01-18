import React from "react";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, ButtonColor, Props } from "./Button";

const meta: Meta = {
  title: "Button",
  component: Button,
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

const actionArgs = {
  onClick: action("onClick"),
};

export const Default = Template.bind({});

Default.args = {
  ...actionArgs,
  children: "Click me!",
  color: ButtonColor.Success,
};
