export default function two_crystal_balls(breaks: boolean[]): number {
    const sqrt = Math.floor(Math.sqrt(breaks.length));
    let step = 1;
    let index = -1;

    while (sqrt * step < breaks.length && index === -1) {
        if (breaks[sqrt * step] === true) {
            for (let i = sqrt * (step - 1); i <= sqrt * step; i++) {
                if (breaks[i] === true) {
                    index = i;
                    break;
                }
            }
        } else {
            step += 1;
        }
    }

    return index;
}
