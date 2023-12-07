// test.js
import { Selector } from "testcafe";

fixture("My First Fixture").page("https://github.com/login");

test("My First Test", async (t) => {
  await t.typeText("#login_field", "john.doe");
  await t.typeText("#password", "test123");
  await t.wait(2000);
});
