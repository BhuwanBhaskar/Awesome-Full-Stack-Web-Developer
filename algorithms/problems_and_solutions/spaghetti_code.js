/*
 * @Author:    Anas Aboureada
 * @Date:      Sat Mar 25 2017 17:59:3
 * @Email:     me@anasaboureada.com
 * @License:   MIT License
 * @Copyright: Copyright (c) 2017 Anas Aboureada
 * 
 * @problem_link: https://www.codewars.com/kata/spaghetti-code-number-1-easy/train/javascript
 */

var assert = require('assert');


// Easy Solition
var spaghettiCode = function (plate) {
  var maxKey,
    spagittiCounter = {},
    maxKeyCounter = 0;

  for (var i = 0, length = plate.length; i < length; i++) {
    for (var j = 0, jLength = plate[i].length; j < jLength; j++) {
      if (plate[i][j].match(/[A-Z]/g)) {
        spagittiCounter[plate[i][j]] = spagittiCounter[plate[i][j]] > 0 ? spagittiCounter[plate[i][j]] += 1 : 1;
      }
    }
  }

  if (Object.keys(spagittiCounter).length === 0) return "";

  for (var k = 0, kLength = Object.keys(spagittiCounter).length; k < kLength; k++) {
    if (spagittiCounter[Object.keys(spagittiCounter)[k]] > maxKeyCounter) {
      maxKey = Object.keys(spagittiCounter)[k];
      maxKeyCounter = spagittiCounter[Object.keys(spagittiCounter)[k]];
    }
  }
  return maxKey;
};


//Better Solution
var spaghettiCode = function (plate) {
  var count = {};
  plate.forEach(function(line){ line.forEach(el => /[A-Z]/.test(el) && (count[el] = (count[el] || 0) + 1))});
  var keys = Object.keys(count);
  return keys.length > 0 ? keys.reduce((max, key) => count[max] < count[key] ? key : max) : '';
}

describe("ExampleTests", function () {

  it("ex1", function () {
    var plate = [
      'AAAAAAAA____'.split(''),
      '____________'.split(''),
      'BBBBBBBBBBB_'.split(''),
      '____________'.split(''),
      'CCCCCC______'.split('')
    ];
    var info = { data: plate, count: 3, longest: 11, longestIDs: 'B' };
    var got = spaghettiCode(plate);
    assert.equal(got, info.longestIDs);
  });

  it("ex2", function () {
    var plate = [
      'AAAAAAAAA      '.split(''),
      '________A__CCC_'.split(''),
      ' B   C  A    C '.split(''),
      '_B___C__A____C_'.split(''),
      ' B   C       C '.split(''),
      '_B___CCCCCCCCC_'.split('')
    ];
    var info = { data: plate, count: 3, longest: 18, longestIDs: 'C' };
    var got = spaghettiCode(plate);
    assert.equal(got, info.longestIDs);
  });

});