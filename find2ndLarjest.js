const x = [67, 34, 22, 1, 78, 54]

const findSecondLargest = (arr) => {
    let max = arr[0]
    let max2 = arr[0]
    for (let i=1; i < arr.length; i++ ) {
        if (max <= arr[i]) {
            max = arr[i]
        }
        if (arr[i] < max2 && max != max2) {
            max2 = arr[i]
        }
    }
    return {max, max2}
}

console.log(findSecondLargest(x))

// const reg = new RegExp('vali', 'ig')

// const str = 'Data vali, v '
// const search = (s) => {
//     const reg = new RegExp(s, 'ig')
//     return reg.test(str)
// }


// NaN


// const numStr = '456abc'

// console.log(parseInt(numStr)) // NaN