
// arr = [1,3,4,5]
// max = arr[0]
// check and compare every element of array
// update max
// return max if got max value


function findMaximum(arr) {
    let max = arr[0]

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
let nums = [1, 3, 4, 5];
console.log(findMaximum(nums));