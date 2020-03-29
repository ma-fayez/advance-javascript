const number = [4, 5, 9, 12];
const output = [];

// for (let i = 0; i < number.length; i++) {
//     const Element = number[i];
//     const result = Element * Element;
//     output.push(result);
// }

// Map function

// function square(element) {
//     return element * element;
// }
// number.map(function(element, index, array) {
//     console.log(element, index, array);
// })


// 1line function declaration by map method in js. it's noted that it's only applied on array function
// Map ekta full array ber kore dibe, R filter O array ber kore dibe kintu condition er vitore jee gulo pabe sudu se gulo ke output dibe
const result = number.map(function(element) {
    return element * element;
})

// find sudu matro ektu element ber kore dibe.............
const findNumber = number.find(x => x > 5);
console.log(findNumber);