// I'm creating a function to perform bubble sort
export function bubble_sort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        // this flag variable is to optimize the code 
        // in the best case the time complexity is o(n)
        // while the worst case is o(n^2)
        var flag = 0
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                flag = 1
            }
        }
        if (flag == 0) {
            return "array is sorted " + arr;
            break;
        }
    }
}

// This is to test the function
// let arr = [9, 3, 7, 4, 69, 420, 42];
// let sorted_array = bubble_sort(arr);
// console.log(sorted_array)