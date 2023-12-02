export function mergeSort(arr: number[], start: number, end: number) {
  if (start >= end) return;

  const mid = start + Math.floor((end - start) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(start, mid, end, arr);
}

function merge(left: number, mid: number, right: number, arr: number[]) {
  const temp = [];
  let i = left,
    j = mid + 1;

  while (i <= mid || j <= right) {
    if (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) temp.push(arr[i++]);
      else temp.push(arr[j++]);
    } else if (i <= mid) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
  }

  for (let index = left; index <= right; index++) {
    arr[index] = temp[index - left];
  }
}

const arr = Array(999)
  .fill(null)
  .map((_) => Math.floor(Math.random() * 999));

console.time("mergeSort");
mergeSort(arr, 0, arr.length - 1);
console.log("Array after bubble sort: ", arr);
console.timeEnd("mergeSort");
