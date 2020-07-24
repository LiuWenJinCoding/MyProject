var fs = require("fs");

//非阻塞
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

//阻塞
fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
})

console.log('end');