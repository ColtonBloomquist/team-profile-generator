import { expect } from "@jest/globals";
import exp from "constants";
import Intern from "../lib/Intern";

test("creates employee object", () => {
  const intern = new Intern("Dave", 5, "dave@gmail.com", "UofU");

  expect(intern.school).toEqual(expect.any(String));
});
