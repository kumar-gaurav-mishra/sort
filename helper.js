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
obj.getDight = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

obj.digitCount = num => {
  // return Math.abs(num).toString().length;//Can be one solution
  if (num === 0) return 1;
  return Math.ceil(Math.log10(Math.abs(num)));
};

obj.mostDigits = nums => {
  let max = 0;
  nums.forEach(num => (max = Math.max(max, obj.digitCount(num))));
  return max;
};

obj.merge = (arr1, arr2) => {
  let len1 = 0;
  let len2 = 0;
  const finalArray = [];
  while (finalArray.length < arr1.length + arr2.length) {
    if (len1 < arr1.length && arr1[len1] < arr2[len2]) {
      finalArray.push(arr1[len1]);
      len1++;
    } else if (len2 < arr2.length && arr2[len2] < arr1[len1]) {
      finalArray.push(arr2[len2]);
      len2++;
    } else {
      len1 < arr1.length ? finalArray.push(arr1[len1++]) : finalArray.push(arr2[len2++]);
    }
  }
  return finalArray;
};
module.exports = obj;
