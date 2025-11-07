// Function 1
const multiply = (a, b) => a * b;
console.log(multiply());

// Function 2
const isPositive = Number => Number >= 0;
console.log(isPositive());

// Function 3
const getRandomNumber = () => Math.random();
console.log(getRandomNumber());

// Function 4
document.addEventListener("click", () => {
  console.log("Clicked!");
});

function createUser(name ="Hoàng Anh", age = 21, isAdmin = false) {
    return {
        name,
        age,
        isAdmin,
    };

}
console.log(createUser());


function mergeArrays(...arrays) {
  return arrays.flat();
}
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
function createProduct(name, price = 0, category = "Chưa phân loại") {
  return {
    name,
    price,
    category
  };
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(createProduct("iPhone 15", 20000000, "Điện thoại"));
console.log(createProduct("Áo thun"));


