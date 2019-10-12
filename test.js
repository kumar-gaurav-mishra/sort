'use strict';
const chai = require('chai');
chai.should();
let { quickSort, selectionSort, bubbleSort, radixSort, mergeSort, insertionSort } = require('./index');
describe('Javascript Sortings', () => {
  describe('Quick Sort', () => {
    it('returns the sorted array', () => {
      let str = quickSort([5, 4, 3, 2, 1]).toString();
      str.should.be.equals('1,2,3,4,5');
    });
    it('Throws error if no input array is provided', () => {
      try {
        quickSort();
      } catch (err) {
        (typeof err).should.be.equals('object');
        (typeof err.message).should.be.equals('string');
        err.message.should.be.equals('Array input is required');
      }
    });
  });
  describe('Selection Sort', () => {
    it('returns the sorted array', () => {
      let str = selectionSort([1, 3, 2, 4, 5, 6, 9, 5, 4, 10, 11, 12, 13]).toString();
      str.should.be.equals('1,2,3,4,4,5,5,6,9,10,11,12,13');
    });
    it('Throws error if no input array is provided', () => {
      try {
        selectionSort();
      } catch (err) {
        (typeof err).should.be.equals('object');
        (typeof err.message).should.be.equals('string');
        err.message.should.be.equals('Array input is required');
      }
    });
  });

  describe('Bubble Sort', () => {
    it('returns the sorted array', () => {
      let str = bubbleSort([1, 3, 2, 4, 5, 6, 9, 5, 4, 10, 11, 12, 13]).toString();
      str.should.be.equals('1,2,3,4,4,5,5,6,9,10,11,12,13');
    });
    it('Throws error if no input array is provided', () => {
      try {
        bubbleSort();
      } catch (err) {
        (typeof err).should.be.equals('object');
        (typeof err.message).should.be.equals('string');
        err.message.should.be.equals('Array input is required');
      }
    });
  });

  describe('Radix Sort', () => {
    it('returns the sorted array', () => {
      let str = radixSort([1, 3, 2, 4, 5, 6, 9, 5, 4, 10, 11, 12, 13, 0]).toString();
      str.should.be.equals('0,1,2,3,4,4,5,5,6,9,10,11,12,13');
    });
    it('Throws error if no input array is provided', () => {
      try {
        radixSort();
      } catch (err) {
        (typeof err).should.be.equals('object');
        (typeof err.message).should.be.equals('string');
        err.message.should.be.equals('Array input is required');
      }
    });
  });
  describe('Merge Sort', () => {
    it('returns the sorted array', () => {
      let str = mergeSort([1, 3, 2, 4, 5, 6, 9, 5, 4, 10, 11, 12, 13, 0]).toString();
      str.should.be.equals('0,1,2,3,4,4,5,5,6,9,10,11,12,13');
    });
    it('Throws error if no input array is provided', () => {
      try {
        mergeSort();
      } catch (err) {
        (typeof err).should.be.equals('object');
        (typeof err.message).should.be.equals('string');
        err.message.should.be.equals('Array input is required');
      }
    });
    it('returns the sorted array for reverse case as well', () => {
      let str = mergeSort([1, 2, 3, 4, 5]).toString();
      str.should.be.equals('1,2,3,4,5');
    });
  });

  describe('Insertion Sort', () => {
    it('returns the sorted array', () => {
      let str = insertionSort([1, 3, 2, 4, 5, 6, 9, 5, 4, 10, 11, 12, 13, 0]).toString();
      str.should.be.equals('0,1,2,3,4,4,5,5,6,9,10,11,12,13');
    });
    it('Throws error if no input array is provided', () => {
      try {
        insertionSort();
      } catch (err) {
        (typeof err).should.be.equals('object');
        (typeof err.message).should.be.equals('string');
        err.message.should.be.equals('Array input is required');
      }
    });
  });
});
