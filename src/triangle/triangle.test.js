import Triangle from "./triangle";

describe("Triangle", () => {
  it("Equilatero", () => {
    const triangle = new Triangle(1);

    expect(triangle.classify(3, 3, 3)).toEqual("equilatero");
  });
});
