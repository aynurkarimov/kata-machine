// export default function bubble_sort(arr: number[]): void {
//     let i = 0;
//     let high = arr.length;

//     do {
//         if (i - 1 === high) {
//             i = 0;
//             high -= 1;

//             continue;
//         }

//         if (arr[i] > arr[i + 1]) {
//             const bigger = arr[i];

//             arr[i] = arr[i + 1];
//             arr[i + 1] = bigger;
//         }

//         i++;
//     } while (high !== 1);
// }
//

export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const bigger = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = bigger;
            }
        }
    }
}
