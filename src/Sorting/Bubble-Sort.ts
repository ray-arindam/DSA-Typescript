export function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

const arr = Array(20)
  .fill(null)
  .map((_) => Math.floor(Math.random() * 999));

console.time("bubbleSort");
bubbleSort(arr);
console.log("Array after bubble sort: ", arr);
console.timeEnd("bubbleSort");
