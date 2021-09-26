import { expect } from "@jest/globals";
import exp from "constants";
import Engineer from "../lib/Engineer";

test("creates employee object", () => {
  const engineer = new Engineer(
    "Dave",
    5,
    "dave.miller@gmail.com",
    "dave.miller"
  );

  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});
