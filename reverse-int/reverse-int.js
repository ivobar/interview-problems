function revInt(number) {
    let str = number
        .toString()
        .split('')
        .filter(e => e !== '-')
        .reverse()
        .join('');

    return Number(str)*Math.sign(number);
}

function revInt2(number) {
    let str = number
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(str)*Math.sign(number);
}

console.log(revInt(15));
console.log(revInt(981));
console.log(revInt(500));
console.log(revInt(-15));
console.log(revInt(-90));

console.log(revInt2(15));
console.log(revInt2(981));
console.log(revInt2(500));
console.log(revInt2(-15));
console.log(revInt2(-90));