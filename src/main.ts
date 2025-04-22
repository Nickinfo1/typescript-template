import { Decor } from "./decor";

function myFunc<T>(num: T): void {
  console.log(num);
}

interface Car {
  model: string;
}

class Volvo<T extends Car> {
  model: string;
  constructor(m: T) {
    this.model = m.model;
  }
}

const cars = new Volvo<Car>({ model: "Suboto" });
console.log(cars.model);

const dec = new Decor();
