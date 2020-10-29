class User {
  constructor(name) {
    this.name = name;
  }
  static multiply() {
    return x * x;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }
}

console.log(User.multiply(4))
