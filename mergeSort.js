const merege = (arr1, arr2) => {
  var results = [];
  var i = 0;
  var j = 0;
  var count = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
      count++;
    } else {
      results.push(arr1[i]);
      i++;
      count++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
    count++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
    count++;
  }
  console.log(count);
  return results;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merege(left, right);
};

console.log(mergeSort([2, 1, 6, 7, 2, 55, 21, 60, 25, 17]));

































