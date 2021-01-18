import React from "react";
import { Story, Meta } from "@storybook/react";
import App from "./App";

const meta: Meta = {
  title: "App",
  component: App,
};

export default meta;

const Template: Story = (args) => <App {...args} />;

export const Default = Template.bind({});
