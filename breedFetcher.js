const request = require('request');

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error !== null) {
    console.log(`error:`, error);
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(`The breed you're looking for doesn't exist! Perhaps it was misspelled?`);
    } else {
      console.log(data[0].description);
    }
  }
});
