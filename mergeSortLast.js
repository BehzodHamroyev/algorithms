const merge = (arr1, arr2) => {
  let i = 0,
    j = 0,
    result = [];
  while (i < arr1.length  && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
    else {
      result.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
//   console.log(left,'sw');
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([2, 1, 6, 7, 2, 55, 21, 60, 25, 17]));
