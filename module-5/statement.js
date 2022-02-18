// if(){}else{}
// if... else if
// if... else if ... else
// switch statement
// conditional ternary
// operators relational, logical(&&, ||), binary(+, -, *, /, %), assignment, bitwise (|, <<, >>)

// flow - loop itteration statement
// for, for..in, for..of, while, do..while, control flow statement break, continue

// TODO
// name -  input field
// email -  input field
// gender -  input field
// dob -  input field

// submit - button - type = button
// clear all the field

// js - you need to create array[{name: "Mantu", email:"mantupani17@gmail.com", gender:'Male', dob:'11-05-1992'}]
// render the data in tabular form

// falsy values in javascript
/**
 * false
 * 0
 * undefined
 * null
 * ""
 */
var x = undefined;
x = 0;
x = null; 
x = false;
x = "";
x = 'This'
x = 9
if(!x) {
    console.log('Value is false...')
} else if (isNaN(x)) {
    console.log('Hello this is having truth')
} else {
    console.log('String value required')
}

// switch statement
function returnString(num){
    switch(num){
        case 0: console.log('Zero');
            break;
        case 1: console.log('One');
            break;
        case 2: console.log('Two');
            break;
        case 3: console.log('Three');
            break;
        case 4: console.log('Four');
            break;
        case 5: console.log('Five');
            break;
        case 6: console.log('Six');
            break;
        case 7: console.log('Seven');
            break;
        case 8: console.log('Eight');
            break;
        case 9: console.log('Nine');
            break;
        case 10: console.log('Ten');
            break;
        default: console.log('Not in the range');
    }

}

// returnString(10);

// for loop
var x = [1, 2, 3, 4, 5, 6, 7, 0, 10];
// for (let index = 0; index < x.length; index++) {
//     const element = x[index];
//     console.log(element)
// }

// for (const iterator of x) {
//     console.log(iterator)
// }

// for (const key in x) {
//     if (Object.hasOwnProperty.call(x, key)) {
//         const element = x[key];
//         console.log(element)
//     }
// }

// var i = x.length-1; 
// break
// while(true) {
//     if (i > x.length-1) {
//         break
//     }
//     console.log(x[i])
//     i++;
// }

// do {
//     // i++;
//     console.log(x[i])
// } while (i--);

// Continue
// for (let index = 0; index < x.length; index++) {
//     const element = x[index];
//     if (element%2 == 0) {
//         continue;
//     }
//     console.log('Odd')
// }