const numbers = [1, 3, 5, 7, 9, 11, 13];

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return middle;
    }

    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch(numbers, 9)); // 4
