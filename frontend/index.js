/**
 * EXAMPLE ONLY
 * Needs a frontend library or postman to run
 */
const endpoint = 'http://localhost:4000';

const query =  `
  query {
    totalDays
  }
`

const options = {
  method: "POST",
  headers: {"Content-Type": 'application/json'},
  body: JSON.stringify({query})
}

fetch(endpoint, options)
  .then(res => res.json())
  .then(({data}) => `totalDays:${data.totalDays}`)
  .then(console.log)
  .catch(console.error);

