const fs = require('fs');
const path = require('path');


if(process.argv.length == 2) {
  console.error('Usage: node pets.js [read | create | update | destroy]');
  process.exit(1);
}

if(process.argv[2] == 'read') {
  if(process.argv.length == 3) {
    fs.readFile('./pets.json', function(err, data) {
      if(err) {
        throw errl;
      }
      let pets = JSON.parse(data);
      console.log(pets);
      process.exit();
    });
  }

  if(process.argv.length == 4) {
    let index = process.argv[3];
    fs.readFile('./pets.json', function(err, data) {
      if(err) {
        throw err;
      }
      let content = JSON.parse(data.toString());
      if(index > content.length-1 || index < 0) {
        console.error('Usage: node pets.js read INDEX');
        process.exit(1);
      } else {
        console.log(content[index]);
      }
    });
  }
}

if(process.argv[2] == 'create') {
  if(process.argv.length == 6) {
    fs.readFile('./pets.json', function(err, data) {
      if(err) {
        throw err;
      }
      let parsed = JSON.parse(data);
      let newPet = {};

        newPet["age"] = Number.parseInt(process.argv[3]);
        newPet["kind"] = process.argv[4].toString();
        newPet["name"] = process.argv[5].toString();

      parsed.push(newPet);
      console.log(newPet);



      fs.writeFile('./pets.json', JSON.stringify(parsed), function(){

      });
    });
  }
  else {
    console.error(`Usage: ${path.basename(process.argv[0])} ${path.basename(process.argv[1])} ${process.argv[2]} AGE KIND NAME`);
    process.exit(1);
  }
}
