let root = document.querySelector("#root");
class Ava {
  constructor(img, name, surname, title) {
    this.img = img;
    this.name = name;
    this.surname = surname;
    this.title = title;
  }
  render(el) {
    const ava = document.createElement("div");
    ava.insertAdjacentHTML(
      "afterbegin",
      `
    <img src ="${this.img}" /> 
    <p> ${this.name}</p>  <p>  ${this.surname} </p>
    <p> ${this.title} </p>`
    );
    el.appendChild(ava);
  }
}

const ava = new Ava(
  "https://docs.python.org/3/_static/py.png",
  "Питон",
  "Питонов",
  " Язык змей"
);

ava.render(root);
