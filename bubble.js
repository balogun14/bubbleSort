function bubble_sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var flag = 0;
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = 1;
            }
        }
        if (flag == 0) {
            return "array is sorted " + arr;
            break;
        }
    }
}
// This is to test the function
var arr = [9, 3, 7, 4, 69, 420, 42];
var sorted_array = bubble_sort(arr);
console.log(sorted_array);
