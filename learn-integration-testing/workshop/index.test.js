// test("multiplication", () => {
//   const result = calculate(2, "*", 3);
//   const expected = 6;
//   equal(result, expected);
// });
// test("addition", () => {
//   const result = calculate(2, "+", 3);
//   const expected = 5;
//   equal(result, expected);
// });
// test("division", () => {
//   const result = calculate(9, "/", 3);
//   const expected = 3;
//   equal(result, expected);
// });
// test("subtraction", () => {
//   const result = calculate(2, "-", 3);
//   const expected = -1;
//   equal(result, expected);
// });
// test("subtraction with strings", () => {
//   const result = calculate(1, "-", "3");
//   const expected = -2;
//   equal(result, expected);
// });
// test("multiplication with strings", () => {
//   const result = calculate("11", "*", "10");
//   const expected = 110;
//   equal(result, expected);
// });
// test("division with strings", () => {
//   const result = calculate("9", "/", "3");
//   const expected = 3;
//   equal(result, expected);
// });
// test("addition with strings", () => {
//   const result = calculate("2", "+", "3");
//   const expected = 5;
//   equal(result, expected);
// });

test("check calculator DOM function", () => {
  const num1 = document.getElementById("a");
  const num2 = document.getElementById("b");
  num1.value = 5;
  num2.value = 7;
  const select = document.getElementById("sign");
  select.value = "*";
  const result = document.getElementById("result");
  const submitBtn = document.querySelector("button");
  submitBtn.click();
  equal(result.textContent, "35");
});
