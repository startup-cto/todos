import React from "react";
import { Meta, Story } from "@storybook/react";
import { NoTodos } from "./NoTodos";

const meta: Meta = {
  title: "NoTodos",
  component: NoTodos,
};

export default meta;

const Template: Story = (args) => <NoTodos {...args} />;

export const Default = Template.bind({});
