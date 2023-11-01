abstract class Human {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract greet(): void;

  getAge(): number {
    return this.age;
  }

  getName() {
    return this.name;
  }
}

class Heart extends Human {
  private beatsPerMinute: number;

  constructor(name: string, age: number, beatsPerMinute: number) {
    super(name, age);

    this.beatsPerMinute = beatsPerMinute;
  }

  greet(): void {
    console.log(
      `Hi, I'm ${super.getName()}.My age is ${super.getAge()} My heart beats at ${
        this.beatsPerMinute
      } bpm.`
    );
  }

  getBeatsPerMinute(): number {
    return this.beatsPerMinute;
  }
}

class Brain extends Human {
  private IQ: number;

  constructor(name: string, age: number, IQ: number) {
    super(name, age);

    this.IQ = IQ;
  }

  greet(): void {
    console.log(`Hi, I'm ${super.getName()}.My age is ${super.getAge()}. My IQ is ${this.IQ}.`);
  }

  // Encapsulated method to get IQ
  getIQ(): number {
    return this.IQ;
  }
}

const heart = new Heart("Gautam", 30, 70);
const brain = new Brain("Harsh", 25, 120);

// Demonstrate abstraction and encapsulation
heart.greet();
console.log(`Age: ${heart.getAge()}`);
console.log(`Beats per Minute: ${heart.getBeatsPerMinute()}`);

brain.greet();
console.log(`Age: ${brain.getAge()}`);
console.log(`IQ: ${brain.getIQ()}`);
