const x = 0;
console.log(Boolean(String(Boolean(x))));//true

const x = 0;
console.log(Boolean(+(Boolean(x))));//false

const x = 1;
console.log(Boolean(+(Boolean(x))));//true

const x = 0;
console.log(Boolean(+(Boolean(x))))

const x = 0;
const x1 = Boolean(x);
const x2 = +(x1);
const x3 = Boolean(x2);
console.log(x1,x2,x3);