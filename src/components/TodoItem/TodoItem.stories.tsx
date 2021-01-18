import React from "react";
import { Story, Meta } from "@storybook/react";
import { TodoMock } from "../../model/TodoMock";
import { action } from "@storybook/addon-actions";
import { Props, TodoItem } from "./TodoItem";

const meta: Meta = {
  title: "TodoItem",
  component: TodoItem,
};

export default meta;

const Template: Story<Props> = (args) => <TodoItem {...args} />;

const actionArgs = {
  onComplete: action("onComplete"),
  onRemove: action("onRemove"),
};

export const ShortText = Template.bind({});
ShortText.args = {
  ...actionArgs,
  todo: new TodoMock({
    completed: false,
    description: "Write a short todo description",
  }),
};

export const LongText = Template.bind({});
LongText.args = {
  ...actionArgs,
  todo: new TodoMock({
    completed: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper eleifend risus, a varius sapien ornare sit amet. Aliquam a accumsan nisl.",
  }),
};

export const Completed = Template.bind({});
Completed.args = {
  ...actionArgs,
  todo: new TodoMock({
    completed: true,
    description: "Write a short todo description",
  }),
};
