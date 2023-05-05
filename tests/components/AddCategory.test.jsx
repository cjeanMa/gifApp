import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/addCategory";

describe("test AddCategory", () => {
  test("it should change the box values", () => {
    render(<AddCategory addCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "trains" } });
    // screen.debug();
    expect(input.value).toBe("trains");
  });

  test("after push submit form, the value should be empty", () => {
    const category = "Beaches";

    const addCategory = jest.fn();

    render(<AddCategory addCategory={addCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(addCategory).toHaveBeenCalled();
    expect(addCategory).toHaveBeenCalledWith(category);
  });

  test("not called addCategeory if input is empty", () => {
    const addCategory = jest.fn();

    render(<AddCategory addCategory={addCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(addCategory).not.toHaveBeenCalled();
  });
});
