let arr = [1, 2, 3, 4];
let start = 0;
let end = arr.length - 1;

for (let i = 0; i <= end/2; i++){
    start = arr[i];
    arr[i] = arr[end-i];
    arr[end-i] = start;
}
console.log(arr[end])
console.log(arr)