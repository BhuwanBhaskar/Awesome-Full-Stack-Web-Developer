/*
 * @Author:    Anas Aboureada
 * @Date:      Sat Mar 25 2017 10:45:40
 * @Email:     me@anasaboureada.com
 * @License:   MIT License
 * @Copyright: Copyright (c) 2017 Anas Aboureada
 * 
 * @problem_link: https: //www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
 */

var assert = require('assert');


// Basic solution
function longest(s1, s2) {
  return s1.split("").concat(s2.split("")).sort().filter(function (item, pos, ary) {
    return item != ary[pos - 1];
  }).join("");
}

// Better solution

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

describe("longest", function () {
  it("Basic tests", function () {
    assert.equal(longest("aretheyhere", "yestheyarehere"), "aehrsty");
    assert.equal(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
    assert.equal(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
  });
});
