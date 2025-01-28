// for3
// let narx = 5000;
// for (let i = 1; i <= 10; i++) {
//   console.log(`konfet narxi:${i * narx} so'm`);
// }
// For4
// let a = 5;
// for (let i = 12; i <= 20; i += 2) {
//   console.log((i / 10) * a);
// }

// For5
// let a = 3;
// let b = 7;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   sum += i;
// }
// console.log(sum);

// For6
// let a = 3;
// let b = 5;
// let c = 1;

// for (let i = a; i <= b; i++) {
//   c *= i;
// }
// console.log(c);

// For7
// let a = 2;
// let b = 4;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   sum += i * i;
// }
// console.log(sum);

// For8
// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += 1 / i;
// }
// console.log(sum);

// For9
// let n = 5;
// let x = 1;
// for (let i = 1; i <= n; i++) {
//   x *= 1 + i / 10;
// }
// console.log(x);

// For11
// let a;
// let n;
// let power = 1;
// a = 3;
// n = 4;
// for (let i = 0; i < n; i++) {
//     power *= a;
// }
// console.log(power);

// For12
// let a;
// let n;
// let x = 1;
// a = 2;
// n = 5;
// for (let i = 1; i <= n; i++) {
//   x *= a;
//   console.log(x);
// }

// For13
// let a;
// let n;
// let sum = 1;
// let sum1 = 1;
// a = 2;
// n = 4;
// for (let i = 1; i <= n; i++) {
//   sum1 *= a;
//   sum += sum1;
// }
// console.log(sum);

// For14
// let n;
// let x = 1;
// let sum = 0;
// n = 5;
// for (let i = 1; i <= n; i++) {
//   x *= i;
//   sum += x;
// }
// console.log(sum);

// For15
// let N;
// let K;
// let sum = 0;
// N = 3;
// K = 3;
// for (let i = 1; i <= N; i++) {
//   let power4 = 1;
//   for (let j = 0; j < K; j++) {
//     power4 *= i;
//   }
//   sum += power4;
// }
// console.log(sum);

// For16
// let n;
// let sum = 0;
// n = 4;
// for (let i = 1; i <= n; i++) {
//   let x = 1;
//   for (let j = 0; j < i; j++) {
//     x *= i;
//   }
//   sum += x;
// }
// console.log(sum);

// For17
// let A;
// let B;
// A = 2;
// B = 5;
// for (let i = A; i <= B; i++) {
//   for (let j = 0; j < i - A + 1; j++) {
//     console.log(i);
//   }
// }

// While1
// let A = 17;
// let B = 5;
// let remaining = A;
// while (remaining >= B) {
//   remaining -= B;
// }
// console.log(remaining);

// While2
// let a = 17;
// let b = 5;
// let count = 0;
// while (a >= b) {
//   a -= b;
//   count++;
// }
// console.log(count);

// While3
// let n = 27;
// let x = 1;
// while (x < n) {
//   x *= 3;
// }
// if (x === n) {
//   console.log("3 - ning darajasi");
// } else {
//   console.log("3 - ning darajasi emas");
// }

// While4
// let n = 17;
// let m = 5;
// let x = 0;
// while (n >= m) {
//   n -= m;
//   x++;
// }
// console.log("butun qismi", x);
// console.log("qoldiq qism", n);

// While5
// let num = 12345;
// let sum = 0;
// while (num > 0) {
//   sum = sum * 10 + (num % 10);
//   num = (num - (num % 10)) / 10;
// }
// console.log(sum);

// While6
// let num = 12345;
// let sum = 0;
// let count = 0;
// while (num > 0) {
//   sum += num % 10;
//   count++;
//   num = (num - (num % 10)) / 10;
// }
// console.log(sum);
// console.log(count);
