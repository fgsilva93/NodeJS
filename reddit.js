const rp = require('request-promise');
var path = require('path');
var fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, '../popular-article.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    
    let array = [];

    JSON.parse(body).data.children.forEach(item => {
        array.push({
            title: item.data.title,
            author: item.data.author,
            url: item.data.url,
         })
        //  console.log(array)
    });

    let articles = JSON.stringify(array)
    fs.writeFileSync('popular-article.json', articles)

})


    // .catch(function (err) {

    // })