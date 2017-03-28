var CustomArray = new Array();

CustomArray.prototype.getFirst = function(){
  return this[0]
}

var test = new CustomArray();

test[0] = 1;
test[1] = 2;

console.assert(test.getFirst() === 1, 'getFirst');


