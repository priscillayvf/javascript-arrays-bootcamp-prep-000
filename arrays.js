var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"]

function addElementToBeginningOfArray() {
  const myArray = [1]
  myArray.unshift("foo")
  return myArray
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray() {
  const myArray = [1]
  myArray.push("foo")
  return myArray
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  var array = [1, 2, 3];
  return array[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  const numb = [1, 2, 3]
  numb.shift()
  return numb
}