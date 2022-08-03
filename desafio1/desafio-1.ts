// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {
  code: 10,
  name: "John",
};

interface Employee {
  code: number,
  name: string,
}

let employee2: Employee = {
  code: 13,
  name: "Sabrina"
}

let employee3: (code: number, name: string) => {
  code: 15,
  name: "Maria",
}