// const input = [11, 2, -2, 8, 11, 7, 1, 7];
// function findSecondLargeVal(input) {
//   let res = [...new Set(input)].sort((a, b) => a - b);
//   return res[res.length - 2];
// }
// console.log("@SN ", findSecondLargeVal(input));
const input = [11, 2, -2, 8, 11, 7, 1, 7];
function findSecondLargeVal(input) {
  let arr = input.sort((a, b) => a - b);
  let res = arr[arr.length - 1];
  console.log("@SN ", res);
  for (let i = arr.length - 2; i >= 0; i--) {
    if (res != input[i]) {
      res = input[i];
      break;
    }
  }
  return res;
}
console.log("@SN ", findSecondLargeVal(input));
