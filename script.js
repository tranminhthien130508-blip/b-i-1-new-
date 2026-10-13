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

// bài 11
function toUpperCase(str) {
  return str.toUpperCase();
}
console.log(toUpperCase("javascript")); 

// bài 12
function formatCurrency(amount) {
  let formattedNumber = amount.toLocaleString('vi-VN');
  return `${formattedNumber} VNĐ`;
}
console.log(formatCurrency(1000000)); 

// bài 13
function max(arr) {
  let maxNumber = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];  
    }
  }
  return maxNumber;
}
console.log(max([10, 5, 20, 8])); 

// bài 14
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false; 
    }
  }
  return true; 
}
console.log(isPrime(7)); 

// bài 15
function repeatString(str, times) {
  let result = ""; 
  for (let i = 0; i < times; i++) {
    result = result + str + " "; 
  } 
  return result.trim();
}
console.log(repeatString("Hello", 3)); 

// bài 16
function sumOdd(arr) {
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] % 2 !== 0) { 
      sum = sum + arr[i];   
    }
  }
  return sum;
}
console.log(sumOdd([1, 2, 3, 4])); 

// bài 17
function sumGreaterThan(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) { 
      sum = sum + arr[i]; 
    }
  }
  return sum;
}
console.log(sumGreaterThan([1, 2, 3, 4], 2)); 

// bài 18
function formatDate(dateString) {
  let year = dateString[0] + dateString[1] + dateString[2] + dateString[3];
  let month = dateString[5] + dateString[6];
  let day = dateString[8] + dateString[9];
  
  return day + "/" + month + "/" + year; 
}
console.log(formatDate("2024-11-28")); 

// bài 19
function firstThree(arr) {
  let result = []; 
  
  for (let i = 0; i < 3; i++) {
    result.push(arr[i]); 
  }
  return result;
}
console.log(firstThree([1, 2, 3, 4, 5])); 

// bài 20
function containsChar(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) { 
      return true; 
    }
  }
  return false; 
}
console.log(containsChar("javascript", "j")); 

// bài 21
function mergeArrays(arr1, arr2) {
  let result = [];
  
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  
  return result;
}
console.log(mergeArrays([1, 2], [3, 4])); 

// bài 22
function countOccurrences(arr, target) {
  let count = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {  
      count = count + 1; 
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 2, 3, 2], 2)); 

// Bài 23
function filterOdd(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) { 
      result.push(arr[i]);
    }
  }
  return result;
}

// Bài 24
function greaterThan(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) { 
      result.push(arr[i]);
    }
  }
  return result;
}

// Bài 25
function factorial(n) {
  let result = 1; 
  for (let i = 1; i <= n; i++) {
    result = result * i; 
  }
  return result;
}
console.log(factorial(5)); 

// Bài 26
function separateEvenOdd(arr) {
  let chan = [];
  let le = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      chan.push(arr[i]); 
    } else {
      le.push(arr[i]);  
    }
  }
  return { even: chan, odd: le };
}

// Bài 27
function sortAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      
      if (arr[i] > arr[j]) {
        let tam = arr[i]; 
        arr[i] = arr[j];
        arr[j] = tam;
      }
      
    }
  }
  return arr;
}
console.log(sortAsc([3, 1, 4, 2]));

// Bài 28
function sumEvenIndex(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) { 
      sum = sum + arr[i];
    }
  }
  return sum;
}
console.log(sumEvenIndex([1, 2, 3, 4]));

// Bài 29
function multiplyByTwo(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2); 
  }
  return result;
}
console.log(multiplyByTwo([1, 2, 3]));

// Bài 30
function arrayToString(arr) {
  let str = ""; 
  for (let i = 0; i < arr.length; i++) {
    str = str + arr[i]; 
  }
  return str;
}
console.log(arrayToString(["a", "b", "c"]));