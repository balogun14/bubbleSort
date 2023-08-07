void main() {
  List<int> myArray = [64, 34, 25, 12, 22, 11, 90];
  List<int> sortedArray = bubbleSort(myArray);
  
  print(sortedArray);
}

List<int> bubbleSort(List<int> arr) {
  for (int i = 0; i < arr.length; i++) {
    // This flag variable is to optimize the code 
    // In the best case, the time complexity is O(n)
    // While the worst case is O(n^2)
    int flag = 0;
    for (int j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = 1;
      }
    }
    if (flag == 0) {
      return arr;
    }
  }
  return arr;
}
