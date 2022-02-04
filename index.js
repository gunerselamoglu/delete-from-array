/**
 * Delete from array 
 *
 * @function deleteFromArray
 * @param {Array<*>} array The target array
 * @param {Array} items The values to be deleted
 */

module.exports= (array, items) => {
  let _array = array;
  let _items = items;
  let _exportArray = [];
  
  if((_array && Array.isArray(_array)) && (_array && Array.isArray(_items))) {
      _array.forEach(item => {
        _items.includes(item) ? '' : _exportArray.push(item) 
      });   
      return (_exportArray);
  }

  else return('You should use two arrays as parameters');
}