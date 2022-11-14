export default function two_crystal_balls(breaks: boolean[]): number {
    
    // set the jump amount to square root of array length
    const jumpAmt: number = Math.floor(Math.sqrt(breaks.length));
    
    let i: number = jumpAmt;
    for (; i < breaks.length; i += jumpAmt) {
        if (breaks[i]) {
            break;
        }
    }

    // walk back to previous jump amount since the
    // most recent jump returned a true value
    i -= jumpAmt;

    for (let j = 0; j < jumpAmt && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    
    return -1;
}