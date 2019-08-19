const insertionSort = arr => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let element = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > element; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1 ] = element;
  }
  return arr;
}

console.log(insertionSort([5,3,1,4,6]))

//Output is [ 1, 3, 4, 5, 6 ]