import getGifs from "../../src/clients/getGifs";

describe("tes getGifs", () => {
  test("it should return an array of gifs", async () => {
    const gifs = await getGifs("South");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
