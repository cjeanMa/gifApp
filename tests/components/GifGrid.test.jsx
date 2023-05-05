import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFechGifs";

jest.mock("../../src/hooks/useFechGifs");

describe("Test GifGrid", () => {
  const category = "climbs";

  test("it should show the loading message", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("..Cargando")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("it should show items", () => {
    useFetchGifs.mockReturnValue({
      gifs: [
        {
          id: "123",
          title: "climbs two",
          url: "https://localhost/climbs-two.jpg",
        },
      ],
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(1);
  });
});
