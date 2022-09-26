function linear_search(arr, needle, recursive = false) {

  if(recursive) {

    for(let i = arr.length-1; i > 0; i--) {
      if(arr[i] == needle) return i;
    }

  } else {

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == needle) return i;
    }

  }
  
  return false;
}