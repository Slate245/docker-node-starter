import { main } from "../src/index";
describe("Main file", () => {
  it("should have a dummy test", () => {
    expect(main()).toBe(true);
  });
});
