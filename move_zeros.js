/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/
//MY S:
function moveZeros(arr) {
  let zeros = [];
  let finalArr = [];
  arr.map(el => (el === 0 ? zeros.push(el) : finalArr.push(el)));
  return finalArr.concat(zeros);
}
//S2:
var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}
//S3:
var moveZeros = function (arr) {
  return arr.filter(el=> el !== 0).concat(arr.filter(el=>el === 0));
}
