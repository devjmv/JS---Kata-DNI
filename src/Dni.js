const letterDni = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

export class Dni {
  constructor(num) {
    if (!Number.isInteger(num) || num < 0 || num > 99999999) {
      throw new Error("The information entered is incorrect");
    }
    this.num = num;
  }
  calculateLetter() {
    const rest = this.num % 23;
    console.log(
      `Número: ${this.num}, Resto: ${rest}, Letra: ${letterDni[rest]}`
    );
    return letterDni[rest];
  }
}
