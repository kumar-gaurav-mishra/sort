'use strict';
const obj = {};
obj.pivot = (arr, start) => {
  'use strict';
  let pivotIndex = start;
  let currentPivotElement = arr[start];
  for (let i = start + 1; i < arr.length; i++) {
    if (currentPivotElement > arr[i]) {
      pivotIndex++;
      let temp = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = temp;
    }
  }
  let temp = arr[start];
  arr[start] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  return pivotIndex;
};

module.exports = obj;
