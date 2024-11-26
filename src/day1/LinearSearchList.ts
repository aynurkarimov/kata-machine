export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    let isExist = false;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle) {
            isExist = true;
            break;
        }
    }

    return isExist;
}
