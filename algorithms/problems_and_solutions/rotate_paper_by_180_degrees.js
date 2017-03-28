/*
 * @Author:    Anas Aboureada
 * @Date:      Sun Mar 26 2017 8:34:58
 * @Email:     me@anasaboureada.com
 * @License:   MIT License
 * @Copyright: Copyright (c) 2017 Anas Aboureada
 * @Problem_link: https://www.codewars.com/kata/simple-fun-number-156-rotate-paper-by-180-degrees/train/javascript
 */

var assert = require('assert');

function rotatePaper(number) {
  var flipPair = {'0': '0', '2': '2', '5': '5', '6': '9', '8': '8', '9': '6'};
  numberArr = number.split("");

  if (numberArr.filter(function (item, pos, arr) {return Object.keys(flipPair).indexOf(item) === -1;}).length !== 0) return false;

  for(var i = 0, length = numberArr.length; i < length/2; i++){
    if (numberArr[length - 1 - i] !== flipPair[numberArr[i]]) return false;
  }
  return true;
}


describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {

  assert.equal(rotatePaper("000"), true);

  assert.equal(rotatePaper("1"), false);

  assert.equal(rotatePaper("96"), true);

  assert.equal(rotatePaper("689"), true);

  assert.equal(rotatePaper("56789"), false);

  });
});