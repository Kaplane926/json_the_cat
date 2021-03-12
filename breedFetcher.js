const request = require('request');

const breed = process.argv[2];

const fetchBreedDescription =  (breed, callback) => {
  /*if (error !== undefined) {
    console.log(`error:`, error);
  } */
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        error = `the cat breed you're searching for doesn't seem to exist`
        callback(error, null)
      } 
      else{
    callback(error, data[0].description)
      }
});
};


module.exports = { fetchBreedDescription };



