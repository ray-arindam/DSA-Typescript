export function quickSort(arr: number[], low: number, high: number) {
  if (low < high) {
    const partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

export function partition(arr: number[], low: number, high: number) {
  let [i, j] = [low, high];
  const pivot = arr[low];

  while (i < j) {
    while (arr[i] <= pivot && i < high) {
      i++;
    }
    while (arr[j] > pivot && j > low) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

const arr = Array(10)
  .fill(null)
  .map((_) => Math.floor(Math.random() * 99));
// const arr = [1,2,4,5,6]
console.time("quickSort");
quickSort(arr, 0, arr.length - 1);
console.log("Array after quick sort: ", arr);
console.timeEnd("quickSort");
