export function insertionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
}

const arr = Array(99)
  .fill(null)
  .map((_) => Math.floor(Math.random() * 999));

console.time("insertionSort");
insertionSort(arr);
console.log("Array after insertion sort: ", arr);
console.timeEnd("insertionSort");
