// JSON.stringify()
// mengubah data javascript menjadi string format json
// Digunakan saat kamu ingin mengirim data ke server, atau menyimpan data di localStorage.

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
console.log(names);

const jsonString1 = JSON.stringify(names);
console.log(jsonString1);

const person = {
  "name": "Spongebob",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}
console.log(person);

const jsonString2 = JSON.stringify(person);
console.log(jsonString2);

const people = [
  {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
  },
  {
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
  },
  {
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
  },
  {
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
  }
];
console.log(people);

const jsonString3 = JSON.stringify(people);
console.log(jsonString3);
