// JSON.parse()
// mengubah string json menjadi object javascript
// Digunakan saat kamu menerima data dari server atau membaca dari localStorage.

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
console.log(jsonNames);

const parsedData1 = JSON.parse(jsonNames);
console.log(parsedData1);

const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
console.log(jsonPerson);

const parsedData2 = JSON.parse(jsonPerson);
console.log(parsedData2);

const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
{"name": "Patrick", "age": 34, "isEmployed": false},
{"name": "Squidward", "age": 50, "isEmployed": true},
{"name": "Sandy", "age": 27, "isEmployed": false}]`;
console.log(jsonPeople);

const parsedData3 = JSON.parse(jsonPeople);
console.log(parsedData3);