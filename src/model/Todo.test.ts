import { Todo } from "./Todo";

describe("Todo", () => {
  it("has an id", () => {
    expect(new Todo("A description").id).not.toBeDefined();
  });

  it("is not complete by default", () => {
    expect(new Todo("A description").completed).toBe(false);
  });
});
