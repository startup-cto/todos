import React from "react";
import { Story, Meta } from "@storybook/react";
import { Props, TodoList } from "./TodoList";
import { TodoMock } from "../../model/TodoMock";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "TodoList",
  component: TodoList,
};

export default meta;

const Template: Story<Props> = (args) => <TodoList {...args} />;

const actionArgs = {
  completeTodo: action("completeTodo"),
  deleteTodo: action("deleteTodo"),
};

export const WithoutTodos = Template.bind({});
WithoutTodos.args = {
  ...actionArgs,
  todos: [],
};

export const WithTodos = Template.bind({});
WithTodos.args = {
  ...actionArgs,
  todos: [new TodoMock(), new TodoMock(), new TodoMock()],
};

export const WithALongTodo = Template.bind({});
WithALongTodo.args = {
  ...actionArgs,
  todos: [
    new TodoMock({
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper eleifend risus, a varius sapien ornare sit amet. 
        Aliquam a accumsan nisl, vel rhoncus libero. Ut laoreet massa et velit finibus, vel pretium nulla iaculis. Etiam a eros eget eros euismod rhoncus at vitae felis. Proin molestie vel dui sit amet venenatis. Nunc quis fringilla dolor. Cras ullamcorper justo massa, id vehicula sem aliquam vel. Nunc nec ex vitae turpis convallis hendrerit et et nulla. Vestibulum laoreet nisi id sagittis iaculis. Donec et efficitur nunc. Cras sagittis ipsum sit amet libero tincidunt, eu consequat arcu dapibus. Duis lacinia magna vitae tincidunt blandit. Nam tempus nibh nisl, non aliquet neque hendrerit vel.`,
    }),
  ],
};
