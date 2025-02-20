
// my 1st solution

// function mergeSortedArrays(arr1, arr2) {
//     for (let i = 0; i < arr2.length; i++){
//         arr1.push(arr2[i]);
//     }
//     console.log(arr1.sort(function(a, b){return a - b}))
// }

// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);


function mergeSortedArrays(arr1, arr2) { 
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;

    // input check
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    while (array1Item || array2Item) {
        // console.log(array1Item,array2Item)
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        }
        else {
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));