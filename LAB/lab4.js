// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng
function getFirstLast(array) {
  if (array.length === 0) return []; 
  return [array[0], array[array.length - 1]];
}

console.log("Bài 1:");
console.log(getFirstLast([1, 2, 3, 4])); 
console.log(getFirstLast(["a", "b", "c"]));
console.log(getFirstLast([]));


// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng
function swapElements(arr) {
  if (arr.length < 4) return arr; 
  [arr[1], arr[3]] = [arr[3], arr[1]];
  return arr;
}

console.log("\nBài 2:");
console.log(swapElements([1, 2, 3, 4, 5]));
console.log(swapElements(["a", "b", "c", "d"])); 
console.log(swapElements([10, 20, 30])); 
