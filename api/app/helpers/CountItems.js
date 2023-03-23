  //function that count n count of elements in an array
export const countItems = (itemsArray) =>{
  //return and object with the count of items
  const count = itemsArray.reduce ( ( acc, el) => (acc [el] ? acc[el] += 1 : acc[el] = 1 , acc) , {});

  return count
}