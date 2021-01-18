import React from "react";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Props, RemoveTodoButton } from "./RemoveTodoButton";

const meta: Meta = {
  title: "RemoveTodoButton",
  component: RemoveTodoButton,
};

export default meta;

const Template: Story<Props> = (args) => <RemoveTodoButton {...args} />;

const actionArgs = {
  onClick: action("onClick"),
};

export const Default = Template.bind({});

Default.args = {
  ...actionArgs,
};
