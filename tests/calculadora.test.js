const { somar, subtrair } = require("../src/calculadora");

describe("Funções da Calculadora", () => {
  test("Deve somar dois números corretamente", () => {
    expect(somar(2, 3)).toBe(5);
  });

  test("Deve lançar erro se argumentos não forem números", () => {
    expect(() => somar(2, "a")).toThrow("Os argumentos devem ser números.");
  });

  test("Deve subtrair dois números corretamente", () => {
    expect(subtrair(5, 3)).toBe(2);
  });
});
