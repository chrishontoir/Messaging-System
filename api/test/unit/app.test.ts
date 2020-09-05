import { assertStrictEquals } from "https://deno.land/std@0.67.0/testing/asserts.ts";

Deno.test({
  name: "app()",
  fn: () => {
    const x = 1 + 2;
    assertStrictEquals(x, 3);
  },
});
