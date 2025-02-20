let arr = [1, 2, 3, 4, 5, 6];
// let i = 0;
// let j = arr.length - 1;

for (let k = 0; k <= Math.floor((arr.length-1)/2); k++){
    let l = arr[k];
    arr[k] = arr[arr.length - 1 - k];
    arr[arr.length - 1 - k] = l;
}

console.log(arr);