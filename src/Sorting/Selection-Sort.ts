export function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the indices
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

const arr = Array(99)
  .fill(null)
  .map((_) => Math.floor(Math.random() * 999));

console.time("selectionSort");
selectionSort(arr);
console.log("Array after selection sort: ", arr);
console.timeEnd("selectionSort");
