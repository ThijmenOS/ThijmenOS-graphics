import { CreateElementFromString } from "../src/CreateElementFromString";

test("", () => {
  const input = "<p>test</p>";

  const result = CreateElementFromString<HTMLParagraphElement>(input);
  const expected = "test";

  expect(result.innerHTML).toBe(expected);
});
