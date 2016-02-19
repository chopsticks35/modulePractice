var fs = require('fs')

//can require instead of readFile
var data = require('./data1.json')

console.log(data.name)

fs.readFile('./data1.json', 'utf-8', function(err, data){
    
    //need to parse string to get to name
    data = JSON.parse(data)
    console.log(data.name)
})