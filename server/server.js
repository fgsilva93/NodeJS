var path = require('path');
var fs =require('fs');
// const request = require('request');

let dataPath = path.join(__dirname, '../chirps.json');

fs.readFile(dataPath,{  
        encoding: "UTF-8"
    }, (err, chirps) => {

        var person = JSON.parse(chirps);

        // for(var i=0;i < person.chirps.length; i++) {
        //     var chirps = person.chirps[i];
        //     console.log(chirps.name);
        //     console.log(chirps.message);
        // }

        person.chirps.forEach(chirps => {
            console.log(chirps.name);
            console.log(chirps.message);
        });



        // console.log(chirps);
    });