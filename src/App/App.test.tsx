import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { en } from "../locale";

function addTodo(todoDescription: string) {
  const todoInput = screen.getByLabelText(en.newTodo);
  userEvent.type(todoInput, todoDescription);
  const addTodoButton = screen.getByText(en.addTodo);
  userEvent.click(addTodoButton);
}

function wait(waitTimeInMS: number) {
  return new Promise((resolve) => setTimeout(resolve, waitTimeInMS));
}

describe("TodoApp", () => {
  it('renders "No todos" by default', () => {
    render(<App />);
    expect(screen.getByText(en.noTodos)).toBeInTheDocument();
  });

  it("shows an added todo", async () => {
    render(<App />);
    const todoDescription = "My new todo";
    addTodo(todoDescription);
    expect(await screen.findByText(todoDescription)).toBeInTheDocument();
  });

  it("does not show a removed todo", async () => {
    render(<App />);
    const todoDescription = "My new todo";
    addTodo(todoDescription);
    const removeButton = await screen.findByText(en.removeTodo);
    userEvent.click(removeButton);
    await wait(50);
    expect(screen.queryByText(todoDescription)).not.toBeInTheDocument();
  });

  it("marks a completed todo as complete", async () => {
    render(<App />);
    const todoDescription = "My new todo";
    addTodo(todoDescription);
    const completeButton = await screen.findByText(en.markTodoAsCompleted);
    userEvent.click(completeButton);
    expect(await screen.findByText(en.todoCompleted)).toBeInTheDocument();
  });
});
