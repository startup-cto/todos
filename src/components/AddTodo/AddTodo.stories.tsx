import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AddTodo, Props } from "./AddTodo";

const meta: Meta = {
  title: "AddTodo",
  component: AddTodo,
};

export default meta;

const Template: Story<Props> = (args) => <AddTodo {...args} />;

const actionArgs = {
  onAdd: action("onAdd"),
};

export const Default = Template.bind({});

Default.args = {
  ...actionArgs,
};
