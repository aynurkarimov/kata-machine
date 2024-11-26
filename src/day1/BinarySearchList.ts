export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length;
    let low = 0;

    while (high > low) {
        let mid = Math.floor(low + (high - low) / 2);
        let value = haystack[mid];

        if (value === needle) {
            return true;
        } else if (needle > value) {
            low = mid + 1;
        } else if (needle < value) {
            high = mid;
        }
    }

    return false;
}
