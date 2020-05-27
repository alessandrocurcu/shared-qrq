import { dropWhileQRQ } from "../main";

describe("Drop while", () => {
  test("dovrebbe ritornare certi elementi finché la condizione non è vera", () => {
    const input = [2, 4, 5, 6, 7, 8, 9];
    const output = [5, 6, 7, 8, 9];
    expect(
      dropWhileQRQ(input, (x) => {
        return x % 2 === 1;
      })
    ).toEqual(output);
  });
});
