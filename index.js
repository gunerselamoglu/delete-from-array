module.exports= (array, items) => {
  let _array = []
  
  if((array && Array.isArray(array)) && (array && Array.isArray(items))) {
        array.forEach(item => {
         items.includes(item) ? '' : _array.push(item) 
          
      });   
      return (_array)  
  }
  
  else return('You should use two arrays as parameters');
}