let index = 0;

let periodicIterator = function (array, time) {
  console.log(array[index]);
  index++;
  if (index < array.length) {
      setTimeout(periodicIterator, time, array, time);
  }
}

periodicIterator([3,2,4], 2000);
