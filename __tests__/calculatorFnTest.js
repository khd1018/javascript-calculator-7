import Calculator from "../src/Calculator";

describe("문자열 계산기 함수 테스트", () => {
  const calculator = new Calculator();

  test("커스텀 구분자를 문자열로부터 구분할 수 있다.", () => {
    const inputs = ["//;\\n12345", "//.\\n12345", "//-\\n12345", "12345k", ";\\n1234"];
    const outputs = [";", ".", "-", 0, 0];

    outputs.forEach((output, index) => {
      expect(calculator.getSeperatorFrom(inputs[index])).toBe(output);
    });
  });

  test("숫자로 이루어진 배열의 합을 구할 수 있다.", () => {
    const inputs = [
      [1, 2, 3],
      [2, 4, 6],
    ];
    const outputs = [6, 12];

    outputs.forEach((output, index) => {
      expect(calculator.getSumOf(inputs[index])).toBe(output);
    });
  });

  test("숫자를 담은 배열의 각 원소가 양수인지 확인할 수 있다.", () => {
    const inputs = [
      [1, 2, 3],
      [-2, 4, 6],
      [NaN, 2, 4],
    ];
    const outputs = [true, false, false];

    outputs.forEach((output, index) => {
      expect(calculator.isPositive(inputs[index])).toBe(output);
    });
  });
});
