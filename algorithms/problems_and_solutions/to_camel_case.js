/*
 * @Author:    Anas Aboureada
 * @Date:      Sun Mar 26 2017 9:23:0
 * @Email:     me@anasaboureada.com
 * @License:   MIT License
 * @Copyright: Copyright (c) 2017 Anas Aboureada
 * 
 * @problem_link: https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript
 */

var assert = require('assert');

// Normal Solution
function toCamelCase(str) {
  var strArr = str.split('');

  for (var i = 1, length = strArr.length; i < length; i++){
    if (strArr[i - 1] === '_' || strArr[i - 1] === '-'){ 
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr.filter(function (item, pos, arr) { return (item !== '_' && item !== '-'); }).join('');
}

//Clever Solution

function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

describe("Solution", function () {
  it("Should test toCamelCase", function () {
    assert.equal('testThatSen', toCamelCase('test_that_sen'));
  });
});