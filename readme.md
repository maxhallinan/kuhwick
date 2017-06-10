# kuhwick

Simple quick sort.


## Install

```
$ npm install --save kuhwick
```


## Usage

```js
const kuhwick = require('kuhwick');

kuhwick([ 9, 7, 4, 2, 1, 3, 8, 6, 5, ]);
//=> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ]

kuhwick([ 9, 7, 4, 2, 1, 3, 8, 6, 5, ], (a ,b) => b - a);
//=> [ 9, 8, 7, 6, 5, 4, 3, 2, 1, ]
```


## API

### kuhwick(arr, compare)

Sorts `arr` and returns a new array.

#### arr

Type: `Array`

The array to sort.

#### compare(a, b)

Type: `Function`</br>
Default: `(a, b) => a - b`

A function that takes two elements of `arr` and returns a number. The elements
are sorted according to this number:

- `compare(a, b) < 0`: `a` is sorted lower than `b`;
- `compare(a, b) > 0`: `b` is sorted lower than `a`;
- `compare(a, b) === 0`: `a` and `b` retain their relative positions.


## License

MIT © [Max Hallinan](https://github.com/maxhallinan)
