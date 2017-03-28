/*
 * @Author:    Anas Aboureada
 * @Date:      Mon Mar 27 2017 17:2:36
 * @Email:     me@anasaboureada.com
 * @License:   MIT License
 * @Copyright: Copyright (c) 2017 Anas Aboureada
 * 
 * @problem_link: https://www.codewars.com/kata/closest-and-smallest/train/javascript
 */

var assert = require('chai').assert;
require('console.table');

function getNoArrWithWeights(inStr) {
  var numObjects = [];

  // getting weights
  inStr.trim().split(' ').map(function (num, index) {
    var numObj = { str: num.trim(), index: index };
    var weight = num.trim().split('').reduce(function (pass, curr) { return pass + +curr; }, 0);
    numObj.weight = weight;
    numObjects.push(numObj);
  });

  return numObjects;
}

function getMinSpaceSortedArr(arr){
  var minDiff = Number.MAX_SAFE_INTEGER;

  for (var i = 0, length = arr.length; i < length - 1; i ++){
    var diff = arr[i + 1].weight - arr[i].weight;
    if (diff < minDiff) {minDiff = diff;};
  }
  return minDiff;
}

function getAllClosestItemsSortedArr(diff, arr) {
  var closestItems = [];
  
  for (var i = 0, length = arr.length; i < length - 1; i++) {
    if (arr[i + 1].weight - arr[i].weight === diff){
      closestItems.push(arr[i + 1]);
      closestItems.push(arr[i]);
    }
  }
  return Array.from(new Set(closestItems));
}

function customSort(a, b) {
  if (a.weight !== b.weight) { return a.weight - b.weight; }
  return a.index - b.index;
}

function closest(inStr) {
  if (inStr.length == 0) return [];

  //Get numbers with weights
  var numObjects = getNoArrWithWeights(inStr);

  // Sorting by weight
  var weightSorted = numObjects.sort(function (a, b) {return a.weight - b.weight;});
  console.table(weightSorted);

  // Calculate weight difference
  var minDiff = getMinSpaceSortedArr(weightSorted);
  console.log(minDiff);

  // Get closest pairs
  var closestItems = getAllClosestItemsSortedArr(minDiff, weightSorted);
  console.log(closestItems);

  // Sort by weight and index 
  var closestItemsSorted = closestItems.sort(customSort);


  var result = [ [closestItemsSorted[0].weight, closestItemsSorted[0].index, +closestItemsSorted[0].str],
    [closestItemsSorted[1].weight, closestItemsSorted[1].index, +closestItemsSorted[1].str] ];

  return result;
}

function testing(actual, expected) {
  assert.deepEqual(actual, expected);
}

describe("Basic tests", function () {
  it("closest", function () {
    testing(closest(""), []);
    testing(closest("456899 50 11992 176 272293 163 389128 96 290193 85 52"), [
      [13, 9, 85],
      [14, 3, 176]
    ]);
    testing(closest("239382 162 254765 182 485944 134 468751 62 49780 108 54"), [
      [8, 5, 134],
      [8, 7, 62]
    ]);
    testing(closest("241259 154 155206 194 180502 147 300751 200 406683 37 57"), [
      [10, 1, 154],
      [10, 9, 37]
    ]);
    testing(closest("89998 187 126159 175 338292 89 39962 145 394230 167 1"), [
      [13, 3, 175],
      [14, 9, 167]
    ]);
    testing(closest("462835 148 467467 128 183193 139 220167 116 263183 41 52"), [
      [13, 1, 148],
      [13, 5, 139]
    ]);

    testing(closest("403749 18 278325 97 304194 119 58359 165 144403 128 38"), [
      [11, 5, 119],
      [11, 9, 128]
    ]);
    testing(closest("28706 196 419018 130 49183 124 421208 174 404307 60 24"), [
      [6, 9, 60],
      [6, 10, 24]
    ]);
    testing(closest("189437 110 263080 175 55764 13 257647 53 486111 27 66"), [
      [8, 7, 53],
      [9, 9, 27]
    ]);
    testing(closest("79257 160 44641 146 386224 147 313622 117 259947 155 58"), [
      [11, 3, 146],
      [11, 9, 155]
    ]);
    testing(closest("315411 165 53195 87 318638 107 416122 121 375312 193 59"), [
      [15, 0, 315411],
      [15, 3, 87]
    ]);
    testing(closest("3448232 113 120948 193 172526 151 448128 135 274117 126 36"), [
      [9, 7, 135],
      [9, 9, 126]]);
  });
});