const fs = require(`fs`)

let data = fs.readFileSync(`movies.json`, `utf8`)
data = JSON.parse(data)

data.forEach(element => {
    element.updatedAt = new Date()
});
console.log(data);


