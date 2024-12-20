function findMinIndex(arr) {
  
  let min = Infinity;
  let minIdx = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    
    let num = arr[idx];

    if (num < min) {
      min = num;
      minIdx = idx;
    }
  }

  return minIdx;
}

function selectionSort(arr) {

  // Copy the original array
  let arrCopy = arr.slice();

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (arrCopy.length > 0) {

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = findMinIndex(arrCopy);
    // Save and remove the value at the min index
    let minVal = arrCopy.splice(minIndex, 1)[0];

    // Add the min value to the end of the sorted array
    sorted.push(minVal);
  }

  return sorted;

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let idx = 0;

  while (idx < arr.length - 1) {
    
    console.log(arr.join(","));

    let divider = idx;
    let minIdx = idx;

    for (let jdx = idx + 1; jdx < arr.length; jdx++) {
      if (arr[jdx] < arr[minIdx]) {
        minIdx = jdx;
      }
    }

    if (minIdx !== divider) {
      [arr[divider], arr[minIdx]] = [arr[minIdx], arr[divider]];
    }

    idx++;
  }

  return arr;

}


module.exports = [selectionSort, selectionSortInPlace];
