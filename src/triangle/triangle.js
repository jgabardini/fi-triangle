 class Triangle {
  constructor(algorithm) {
    this.algorithm = algorithm;
  }
  classify(a, b, c) {
    return this.algorithm ==1 ? 
      this.classify1(a, b, c) :
      this.classify2(a, b, c)
      ;
  }
  classify1(a, b, c) {
    if (a == b && b == c)
      return "equilatero"
    if (a == b || b == c)
      return "isosceles"
    return "escaleno"  
  }
  classify2(a, b, c) {
    const sides = [a, b, c].sort()
    if (sides[0] == sides[2])
      return "equilatero";
    if (sides[0] == sides[1] || sides[1] == sides[2])
      return "isoseles"
    return "escaleno"
  }
}
export default Triangle