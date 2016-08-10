/* var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];

var myVar = monthNames.toString(); // assigns 'Jan,Feb,Mar,Apr' to myVar.12

console.log(myVar);

var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]

console.log(arr);

/* var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

console.log(fruits);
console.log(citrus);
fruits[2] = 'Grapefruit';
console.log(fruits);
console.log(citrus); 

var b = [2, 5, 8, 1, 4];
var c = [12, 5, 8, 1, 4];

function isBiggerThan10(element, index, array) {
  return element > 10;
}
console.log(b.some(isBiggerThan10));  // false
console.log(c.some(isBiggerThan10)); // true


var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 2, 21]; 
scores.sort(); // [1, 10, 2, 21]
// Watch out that 10 comes before 2,
// because '10' comes before '2' in Unicode code point order.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.

console.log(fruit, scores, things); */


var spliceExample = [1, 10, 2, 21, 7, 5];

console.log(spliceExample);

var removed = spliceExample.splice(2, 0, 15);

console.log(spliceExample);
console.log(removed);

function f() {
	return Array.from(arguments);
};

var x = f(2,4,7);
console.log(x);