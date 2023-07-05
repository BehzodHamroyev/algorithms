// Optimized BubbleSort with swaps

function bubbleSort(arr) {
  let swaps;
  for (var i = arr.length; i > 0; i--) {
    swaps = false;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swaps = true;
      }
    }
    if (!swaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  console.log(arr);
}
selectionSort([1, 2, 30, 4, 5, 6, 7]);
