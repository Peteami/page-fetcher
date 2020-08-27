const request = require('request');
const fs = require('fs');


const args = process.argv.slice(2);

address = args[0];
saveDirectory = args[1]

let reqUrl = function(cb) {
  request(address, (error, response, body) => {
    if (error) {
      return error;
    } else {
      cb(body);
    }
  })
}


saveContent((body) => {
  fs.writeFile(`${saveDirectory}`, body, function(err) {
    if (error) {
      return error;
    } else {
      console.log(`Downloaded and saved 1235 bytes to ${saveDirectory}`)
    }
  })
});

