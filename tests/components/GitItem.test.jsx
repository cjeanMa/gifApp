import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test component GifItem", () => {
  const title = "Canon";
  const url = "https://facebook.com/profile.jpg";
  test("test snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("it should show the image with url and alt indicated", () => {
    render(<GifItem title={title} url={url} />);
    // expect(screen.getByRole("img").src).toBe(url);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("it should show the title", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
