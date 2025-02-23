class Fetch {
  constructor(private target: string) {}

  async fetchTarget() {
    const responce = await fetch(this.target);
    return responce.json();
  }
}

class CatDecorator<
  T extends { fetchTarget: () => Promise<{ fact: string; length: number }> }
> {
  constructor(private classCat: T) {}

  async fetchTarget() {
    const data = await this.classCat.fetchTarget();
    return Object.assign(data, { testFields: "Кошки больше молчат" });
  }
}

const testResponce = await new Fetch(
  "https://catfact.ninja/fact"
).fetchTarget();

console.log(testResponce);

const testDecoratorResponce = await new CatDecorator(
  new Fetch("https://catfact.ninja/fact")
).fetchTarget();

console.log(testDecoratorResponce);

export {};
