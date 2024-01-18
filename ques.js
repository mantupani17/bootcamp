const { type } = require("os")

const str = 'This is a string x'
// in - str , int  - 12

const strRemoveStringWithOffset = (str, offset) => {
    if(!str) throw new Error('Invlid String')
    if(offset < 0 || offset > str.length) throw new Error('Invalid Offset')
    const c = str.charAt(offset)
    if (!c) return ' '
    if (str.charAt(offset+1) == ' ' && str.charAt(offset-1) == ' ') return c
    let i = offset - 1
    let j = offset + 1
    let flag = true
    while(flag) {
        if (str.charAt(i) != ' ' && i != -1) {
            i--
            continue
        }
        if (str.charAt(j) != ' ' && j != str.length) {
            j++
            continue
        }
        flag = false
    }
    return str.substr(i+1, j-i-1)
}

let res = ''
// strRemoveStringWithOffset('This is a string', 100)
// console.log('H', res, 'I')

// res = strRemoveStringWithOffset('', 10)
// console.log('H', res, 'I')

// res = strRemoveStringWithOffset('This is a string', -1)
// console.log('H', res, 'I')

// res = strRemoveStringWithOffset('This is a string', 10)
// console.log('H', res, 'I')


// cars -> mfdate, name, companyName
// car_details -> carId, carType (color), value (black)

// swift 
// inputs - _id and type (color) 
// 1. carname , typename, count of type

// db.cars.aggregate([
//     {
//         $match: {
//             _id: ObjectId(_id),
//         }
//     },
//     {
//         $lookup: {
//             from: 'car_details',
//             foreignField: 'carId',
//             localField: '_id',
//             as: 'carDetails'
//         }
//     },
//     {
//         $match: {
//             "carDetails.carType": type
//         }
//     },
//     {
//         $group: {
//             _id: "$carDetails.value",
//             count: {$sum: 1},
//             carname: {$first:"$name"},
//             typename: {$first:"$carType"}
//         }
//     }
// ])
// 3.30 = 180+30 = 210
// 12 - 90deg
// 3 -  180deg
// 6 -  240deg
// 9 -  360deg
// 360 / 4 = 90 * 3 + 30 = 300Deg
function hoursToDegree(hr, m) {
    return (360 / 4) * hr + m 
}

console.log(hoursToDegree(12, 30))