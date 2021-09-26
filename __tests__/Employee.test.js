import { expect } from "@jest/globals";
import { test } from "picomatch";
import { exp } from "prelude-ls";
import Employee from "../lib/Employee";

test("creates employee object", () => {
  const employee = new Employee("Dave", 5, "dave@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(exployee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
