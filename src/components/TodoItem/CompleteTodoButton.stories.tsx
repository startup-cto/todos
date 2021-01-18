import React from "react";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { CompleteTodoButton, Props } from "./CompleteTodoButton";

const meta: Meta = {
  title: "CompleteTodoButton",
  component: CompleteTodoButton,
};

export default meta;

const Template: Story<Props> = (args) => <CompleteTodoButton {...args} />;

const actionArgs = {
  onClick: action("onClick"),
};

export const Default = Template.bind({});

Default.args = {
  ...actionArgs,
};
