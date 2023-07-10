const quickSort = (arr, start, end = arr.length - 1) => {
  const swaps = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  };

  let pivot = arr[start];
  let swapIndex = start;
  for (let i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swaps(arr, swapIndex, i);
    }
  }
  swaps(arr, start, swapIndex);
  return swapIndex;
};



