

// function reverse(str) {
//     const myArray = str.split("");
//     // console.log(myArray)
//     myArray.reverse()
//     // console.log(myArray)
//     let text = myArray.join("");
//     return text;
//     // return str.split('').reverse().join('');
// }

function reverse(str) {
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);        
    }
    // console.log(backwards);
    return backwards.join("");
}

console.log(reverse("Hi My name is Bilawal."));