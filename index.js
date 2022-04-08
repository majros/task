'use strict';

const chooseOptimalDistance = (174, 3, [51, 56, 58, 59, 61]) => {
    if (t < 0) throw 't must be >= 0';
    if (k < 1) throw 'K must be >= 1';
    if (ls.length === 0) throw 'Array ls must contain 1 element';
    ls.forEach((i) => {if (i < 1) throw `${i} element of array must be >= 0`});

    const lsn = ls.length;
    const sum = [];
    for (let n = 0; n < lsn; n++) {
        const a = ls.slice();
        a.splice(n, 1);
        console.log(n, a);
        for (let i = 0; i < lsn-1; i++) {
            const b = a.slice();
            b.splice(i, 1);
            sum.push(b.reduce((a,b) => {return(a+b)}));
            console.log(`i=${i}, b=[${b}], sum=${sum}`)
        }
    }
    console.log(sum.sort().filter((i, n) => !sum.includes(i, n + 1)));
};


try {
    chooseOptimalDistance(t, k, ls)
} catch (e) {
        console.error(e)
}