export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            let beg = arr.slice(0, i);
            let end = arr.slice(i+1, -1);
            let newArray = beg.concat(i+1, i, end);
        }
    }
}