import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFechGifs";

describe("test hook useFectGifs", () => {
  test("it should return the initial value", () => {
    const { result } = renderHook(() => useFetchGifs("Volcans"));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("it shoul return gifs and isLoading false", async () => {
    const { result } = renderHook(() => useFetchGifs("Volcans"));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
