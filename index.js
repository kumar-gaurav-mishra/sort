const helpers = require('./helper.js');
function quickSort(arr, left = 0, right = arr ? arr.length - 1 : 0) {
  if (!arr) throw { message: 'Array input is required' };
  if (left < right) {
    let index = helpers.pivot(arr, left);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }
  return arr;
}
function selectionSort(arr) {
  if (!arr) throw { message: 'Array input is required' };
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
function bubbleSort(arr) {
  if (!arr) throw { message: 'Array input is required' };
  let swap = false;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (swap) {
      swap = false;
    } else {
      break;
    }
  }
  return arr;
}

function radixSort(arr) {
  if (!arr) throw { message: 'Array input is required' };
  let maxDigits = helpers.mostDigits(arr);
  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = helpers.getDight(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

function mergeSort(arr) {
  if (!arr) throw { message: 'Array input is required' };
  if (arr.length <= 1) return arr;
  return helpers.merge(mergeSort(arr.slice(0, arr.length / 2)), mergeSort(arr.slice(arr.length / 2)));
}

function insertionSort(arr) {
  if (!arr) throw { message: 'Array input is required' };
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let currentVal = arr[i];
    for (; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
module.exports = { quickSort, selectionSort, bubbleSort, radixSort, mergeSort, insertionSort };
