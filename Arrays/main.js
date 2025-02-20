const strings = ['a', 'b', 'c', 'd'];

// push
strings.push('e'); // O(1) operation

// pop
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

strings.shift('x'); // O(n)

// splice
strings.splice(2, 0, 'alien') // O(n)

console.log(strings);
