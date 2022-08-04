const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err,res,body) => {
    if (err) {
      callback('request failed to get details');
    } else {
      let data = JSON.parse(body);
      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback('breed not found');
      }

      
      
    }

  });
}


module.exports = { fetchBreedDescription };