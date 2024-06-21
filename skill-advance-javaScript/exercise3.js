// Factory function example in JavaScript

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(
        'Hello, my name is ' +
          this.name +
          ' and I am ' +
          this.age +
          ' years old.'
      );
    },
  };
}

// Usage
const person1 = createPerson('Alice', 30);
person1.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.

const person2 = createPerson('Bob', 25);
person2.greet(); // Outputs: Hello, my name is Bob and I am 25 years old.
