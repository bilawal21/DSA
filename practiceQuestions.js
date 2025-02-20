// check palindrome number
// let num = 121;
// let originalNum = num;
// let reversedNum = 0;

// if (num < 0) {
//     return false;
// }
// else {
//     while (num > 0) {
//         let lastDigit = num % 10;
    
//         reversedNum = reversedNum * 10 + lastDigit;
    
//         num = Math.floor(num / 10);
//     }
//     console.log(`Number is palindrome: ${reversedNum} === ${originalNum}`);
// }


// sum of even or odd numbers
// let total = 0;
// for (let i = 0; i <= 10; i++){
//     if (i % 2 === 0) {
//         total += i;
//         console.log(i)
//     }
// }
// console.log(total);


// revise - check palindrome number
// let num = 1221;
// let originalNum = num;
// let reversedNum = 0;

// if (num < 0) {
//     return false;
// }
// else{
//     while (num > 0) {
//         let lastDigit = num % 10;
//         reversedNum = reversedNum * 10 + lastDigit;
//         num = Math.floor(num / 10);
//     }
// }

// if (reversedNum === originalNum) {
//     console.log(`Number is palindrome`);
// }
// else {
//     console.log(`Number is not palindrome`);
// }

// reverse array
// let arr = [1, 2, 3, 4, 5];
// let start = 0;
// let end = arr.length - 1;

// for (let i = 0; i <= end / 2; i++){
//     start = arr[i];
//     arr[i] = arr[end - i];
//     arr[end - i] = start;
// }
// console.log(arr);

// reverse array using another array
// let arr = [1, 2, 3, 4, 5];
// let reversedArray = [];

// for (let i = arr.length - 1; i >= 0; i--){
//     reversedArray.push(arr[i]);
// }
// console.log(reversedArray);

// reverse string
// let string = "Hi my name is Bilawal";
// let split = string.split('');
// // console.log(split)
// let backwards = split.reverse().join('');
// console.log(backwards);

// 2nd method to reverse string
// let string = "Hi my name is bilawal";
// let backwards = [];
// let totalItems = string.length - 1;
// for (let i = totalItems; i >= 0; i--){
//     backwards.push(string[i]);
// }
// console.log(backwards.join(''));

// merge sorted arrays
// let mergedArray = [];
// let arr1 = [0, 3, 4, 31];
// let arr2 = [4, 6, 30];

// let array1Item = arr1[0];
// let array2Item = arr2[0];
// let i = 1;
// let j = 1;

// while (array1Item || array2Item) {
//     if (array2Item === undefined || array1Item < array2Item) {
//         mergedArray.push(array1Item);
//         array1Item = arr1[i];
//         i++;
//     }
//     else {
//         mergedArray.push(array2Item);
//         array2Item = arr2[j];
//         j++;
//     }
// }
// console.log(mergedArray);

// count number of occurance in sorted array
// let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
// let n = 2;
// let count = 0;

// for (let i = 0; i <= arr.length - 1; i++){
//     if (n == arr[i]) {
//         count++;
//     }
// }
// console.log(count);


// sum of elements
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i <= arr.length - 1; i++){
//     sum += arr[i];
// }
// console.log(sum)


// find maximum number
// let arr = [1, 2, 10, 3, 4, 5];
// let max = arr[0];

// for (let i = 0; i <= arr.length - 1; i++){
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     // console.log(arr[i])
// }
// console.log(max)

// find minimum number
// let arr = [12, 23, 10, 3, 4, 5];
// let min = arr[0];

// for (let i = 0; i <= arr.length - 1; i++){
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     // console.log(arr[i])
// }
// console.log(min);

// average of elements
// let arr = [1, 2, 3, 4, 5];
// let len = arr.length - 1;
// let sum = 0;

// for (let i = 0; i <= len; i++){
//     sum += arr[i];
//     var avg = Math.floor(sum / len);
// }
// console.log(avg);


// count occurance
// let arr = [1, 2, 2, 2, 2, 2, 3, 4, 5, 6, 6];
// let n = 6;
// let count = 0;

// for (let i = 0; i <= arr.length - 1; i++){
//     if (n === arr[i]) {
//         count++;
//     }
// }
// console.log(count)


// reverse array
// let arr = [2, 3, 4, 5, 1, 12];
// let start = 0;
// let end = arr.length - 1;

// for (let i = 0; i <= end / 2; i++){
//     start = arr[i];
//     arr[i] = arr[end - i];
//     arr[end - i] = start;
// }
// console.log(arr)

// 2nd method to reverse array
// let arr = [2, 3, 4, 5, 1, 12];
// let revArr = [];
// for (let i = arr.length - 1; i >= 0; i--){
//     revArr.push(arr[i]);
// }
// console.log(revArr)

// remove duplicates
// let arr = [1, 2, 2, 3, 2, 4, 4, 5, 5];
// let uniqueArr = [];

// for (let i = 0; i <= arr.length - 1; i++){
//     if (uniqueArr.indexOf(arr[i]) === -1) {
//         uniqueArr.push(arr[i]);
//     }
// }
// console.log(uniqueArr);

// check for sorted array
// let arr = [2, 3, 5, 1, 6, 4];
// for (let i = 0; i < arr.length - 1; i++){
//     if (arr[i] > arr[i + 1]) {
//         console.log('not sorted');
//     }
// }
// console.log('sorted');

// count even and odd numbers
// let arr = [2, 3, 5, 1, 6, 4, 7];
// let countEven = 0;
// let countOdd = 0;

// for (let i = 0; i <= arr.length - 1; i++){
//     if (arr[i] % 2 === 0) {
//         countEven++;
//     }
//     else {
//         countOdd++;
//     }
//     // console.log(arr[i])
// }
// console.log(countEven, countOdd);


// find second largest number
// let numbers = [10, 5, 20, 15, 30];
// numbers.sort((a, b) => b - a);
// let largest = numbers[0];
// let secondLargest = null;
// for (let i = 0; i <= numbers.length - 1; i++){
//     if (numbers[i] !== largest) {
//         secondLargest = numbers[i];
//         break;
//     }
// }
// console.log(secondLargest);

// let largest = -1;
// let secondLargest = -1;

// for (let i = 0; i <= numbers.length - 1; i++){
//     if (numbers[i] > largest) {
//         secondLargest = largest;
//         largest = numbers[i];
//     }
//     else if (numbers[i] > secondLargest && numbers[i] !== largest) {
//         secondLargest = numbers[i];
//     }
// }

// let result = (secondLargest === -1) ? null : secondLargest;
// console.log(result);


// sum of odd and even
// let numbers = [10, 5, 20, 15, 30];
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i <= numbers.length - 1; i++){
//     if (numbers[i] % 2 === 0) {
//         sumEven += numbers[i];
//     }
//     else {
//         sumOdd += numbers[i]
//     }
// }

// console.log(sumEven, sumOdd)

// occurance in string
// let str = "bilawal";
// let charCount = {};

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charCount[char]) {
//         charCount[char]++;
//     } else {
//         charCount[char] = 1;
//     }
// }

// console.log(charCount);


// occurance in array
let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let elementCount = {};

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (elementCount[element]) {
        elementCount[element]++;
    } else {
        elementCount[element] = 1;
    }
}

console.log(elementCount);


