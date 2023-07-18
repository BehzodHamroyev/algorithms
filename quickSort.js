const pivotHelper = (arr, start, end) => {
  function swap(arr, i, j) {
    // [333, 423, 121, 42, 12, 432, 22], 1, 2
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      //4
      //6
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([333, 423, 121, 42, 12, 432, 22], 0, 7));
