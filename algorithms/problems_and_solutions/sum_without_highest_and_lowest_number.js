/*
 * @Author:    Anas Aboureada
 * @Date:      Sat Mar 25 2017 11:51:11
 * @Email:     me@anasaboureada.com
 * @License:   MIT License
 * @Copyright: Copyright (c) 2017 Anas Aboureada
 * 
 * @problem_link: https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/javascript
 */

var assert = require('assert');

function sortArr(a, b) { return a - b; }

function sumArray(array) {
  if (!array || array.length < 2) return 0;
  return array.sort(sortArr).slice(1, array.length - 1).reduce(function (curr, past) { return curr + past; }, 0);
}

assert.equal(sumArray([6, 2, 1, 8, 10]), 16);