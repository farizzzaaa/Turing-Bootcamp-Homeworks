//1.

let obj = {
    a: 1,
    b: 2,
    c: 3,
}

function name(obj) {
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}
name(obj);


//3.

let arr1 = ['true'];
let arr2 = ['false']
let arr3 = ['JavaScript']

let map = new Map()

map.set(arr1, 'string');
map.set(arr2, 'string2');
map.set(arr3, 'string3');
console.log(map);

//4.

const map1 = new Map([
    ['array1'],
    ['array2'],
    ['array3']
])

const arrKey = map1.keys();
console.log(arrKey);

for (let arr of map1.keys()) {
    console.log(arr);
}

// 5.

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);


// 6.

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet);
console.log(mySet.has(3));
console.log(mySet.has(4));

// 7.

let myArray = ['a', 1, 'b', 2, '1'];

let newArray = [...new Set(myArray)];
console.log(newArray);

// 8.

let month = new Map()
month.set('Monday', 'Понедельник');
month.set('Tuesday', 'Вторник');
month.set('Wednesday', 'Среда');
console.log(month);