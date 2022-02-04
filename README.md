# delete-from-array

>You can delete any element from the array

## Install

```
    npm install delete-from-array --save
```

## usage

```javascript
import deleteFromArray from 'delete-from-array'

const deleteFromArray = require('delete-from-array'); // Nodejs

const targetArray = [8,4,'g','n','r'] // Target array <Array>

const deletedValues = ['r',8] // Values to be deleted <Array>

const newArray = deleteFromArray(targetArray, deletedValues);

console.log(newArray); // [4, g, n]

deleteFromArray(targetArray, deletedValues); // [4, g, n]

```

## License

MIT (c) Güner Selamoğlu