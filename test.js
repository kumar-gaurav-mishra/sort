'use strict';
const chai = require('chai');
chai.should();
let { quickSort, selectionSort, bubbleSort } = require('./index');
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
});
