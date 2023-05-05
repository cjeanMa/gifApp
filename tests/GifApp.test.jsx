import { fireEvent, render, screen } from "@testing-library/react";
import GifApp from "../src/GifApp";

describe("Test GifApp", () => {
  const initialValue = "Mountains";
  const appName = "GifApp";
  test("it should show the app name and value by default", () => {
    render(<GifApp />);
    screen.debug();
    expect(screen.getByText(initialValue)).toBeTruthy();
    expect(screen.getByText(appName)).toBeTruthy();
  });

  test("it should not allow to look for the same word", () => {
    render(<GifApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: initialValue } });
    fireEvent.submit(form);

    expect(screen.getAllByText(initialValue).length).toBe(1)
  });
  test("it should add a new category", () => {
    const newCat = "Peach";
    render(<GifApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: newCat } });
    fireEvent.submit(form);

    expect(screen.getByText(newCat)).toBeTruthy();
  });
});
