export default function bubble_sort(arr: number[]): void {
    let i = 0;
    let high = arr.length;

    do {
        if (i - 1 === high) {
            i = 0;
            high -= 1;

            continue;
        }

        if (arr[i] > arr[i + 1]) {
            const bigger = arr[i];

            arr[i] = arr[i + 1];
            arr[i + 1] = bigger;
        }

        i++;
    } while (high !== 1);
}
