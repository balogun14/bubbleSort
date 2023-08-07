def bubble_sort(arr):
    for i in range(len(arr)):
        # This flag variable is to optimize the code 
        # In the best case, the time complexity is O(n)
        # While the worst case is O(n^2)
        flag = 0
        for j in range(len(arr) - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]  # Swap elements
                flag = 1
        if flag == 0:
            return "Array is sorted: " + str(arr)
    return arr



# Example usage
my_array = [64, 34, 25, 12, 22, 11, 90]
sorted_array = bubble_sort(my_array)
print(sorted_array)
