
// arr = [1,2,3,4,5]
// sum all nums of arr
// divide by total elements
// return average

function averageOfElements(arr) {
    // let sum = 0
    // for (let i = 0; i < arr.length; i++){
    //     sum += arr[i]
    // }
    let sum = arr.reduce((acc, num) => acc + num, 0);

    return sum / arr.length
}

let nums = [1, 2, 3, 4];
console.log(averageOfElements(nums))