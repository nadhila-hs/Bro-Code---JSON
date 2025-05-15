// fetch()
// Mengambil data dari server (API) melalui HTTP request.
// Digunakan untuk mengirim permintaan ke server (GET, POST, dll.) dan mengambil respons-nya, biasanya dalam bentuk JSON.

fetch("names.json")
  .then(response => response.json())
  .then(value => console.log(value))

fetch("person.json")
  .then(response => response.json())
  .then(value => console.log(value))

  fetch("people.json")
  .then(response => response.json())
  .then(value => console.log(value))
  .catch(error => console.error(error))

  fetch("people.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value)))
  .catch(error => console.error(error))

  fetch("people.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value.name)))
  .catch(error => console.error(error))