const request = require('request');
const args = process.argv[2];
const fetchBreedDescription = function(args) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (err,res,body) => {
    if (err) {
      console.error('request failed to get details');
    } else {
      let data = JSON.parse(body);
      if (data) {
        console.log(data[0].description);
      } else {
        console.log('breed not found');
      }

      
      
    }

  });
};

fetchBreedDescription(args);