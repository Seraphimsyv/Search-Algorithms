function binary_search(arr, needle) {
  let firstInx = 0;
  let lastInx = arr.length-1;
  let middle;

  while(firstInx <= lastInx) {
    middle = Math.round((firstInx + lastInx) / 2);

    if(arr[middle] == needle) return middle;
    if(arr[middle] > needle) lastInx = middle-1;
    if(arr[middle] < needle) firstInx = middle+1;
  }

  return false;
}