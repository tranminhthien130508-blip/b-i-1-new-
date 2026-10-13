// bài 1
function productInfo(name, price) {
  let formattedPrice = price.toLocaleString('vi-VN');
  return `Sản phẩm: ${name}, Giá: ${formattedPrice} VNĐ`;
}
console.log(productInfo("Sách", 20000)); 

// bài 2
function greet(name) {
  return `Xin chào, ${name}!`;
}

console.log(greet("An")); 

// bài 3
function sumUpTo(n) {
  let sum = 0; 
  for (let i = 1; i <= n; i++) {
    sum = sum + i; 
  }
  return sum; 
}
console.log(sumUpTo(5)); 

// bài 4
function square(n) {
  return n * n; 
}
console.log(square(6)); 

// bài 5
function isEven(n) {
  if (n % 2 === 0) {
    return true; 
  } else {
    return false; 
  }
}
console.log(isEven(7)); 

// bài 6
function firstElement(arr) {
  return arr[0];
}
console.log(firstElement([1, 2, 3])); 

// bài 7
function sum(...numbers) {
  let total = 0; 
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i]; 
  }
  return total; 
}
console.log(sum(1, 2, 3, 4)); 
