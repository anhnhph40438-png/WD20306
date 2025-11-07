// // Function 1
// const multiply = (a, b) => a * b;

// // Function 2
// const isPositive = Number => Number >= 0;

// // Function 3
// const getRandomNumber = () => Math.random();

// // Function 4
// document.addEventListener("click", () => {
//   console.log("Clicked!");
// });

function createUser(name ="Hoàng Anh", age = "21", isAdmin = "false") {
    return {
        name,
        age,
        isAdmin,
    };

}