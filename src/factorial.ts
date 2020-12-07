export class Factorial {

  factorial(n: number): number {
    if (n===1) {
      // if n is 1, return 1
      return 1;
    }
    return n * this.factorial(n-1);
  }
}
