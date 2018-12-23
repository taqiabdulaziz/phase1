function nestedArray2(arr) {
    var JSON = []
    var obj = {}

    for (let i = 1; i < arr.length; i++) {
        obj[arr[0][0]] = arr[i][0]
        obj[arr[0][1]] = arr[i][1]
        obj[arr[0][2]] = arr[i][2]
        obj[arr[0][3]] = arr[i][3]
        JSON.push(obj)
        obj = {}
    }

    return JSON
}

var roster = [
    ["number","Name","Position","Points per Game"],
    [12,"Taqi1","Center",[1,2]],
    [22,"Taqi2","Middle",[1,2]],
    [42,"Taqi3","Forward",[1,2,2]],
]

console.log(nestedArray2(roster));
