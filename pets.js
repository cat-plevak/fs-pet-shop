const fs = require('fs');
const path = require('path');


if(process.argv.length == 2) {
  console.error('Usage: node pets.js [read | create | update | destroy]');
  process.exit(1);
};

if(process.argv[2] == 'read') {
  if(process.argv.length == 3) {
    fs.readFile('./pets.json', function(err, data) {
      if(err) {
        throw err
      }
      let pets = JSON.parse(data)
      console.log(pets)
      process.exit()
    })
  }

  if(process.argv.length == 4) {
    let index = process.argv[3];
    fs.readFile('./pets.json', function(err, data) {
      if(err) {
        throw err
      }
      let content = JSON.parse(data.toString())
      if(index > content.length-1 || index < 0) {
        console.error('Usage: node pets.js read INDEX')
        process.exit(1)
      } else {
        console.log(content[index])
      }
    })
  }
}
