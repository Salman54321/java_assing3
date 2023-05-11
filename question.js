Question no 1
function pair_num(arr_num, target_num) {
  for (let i = 0; i <= arr_num.length; i++) {
    for (let j = 0; j <= arr_num.length; i++) {
      if (arr_num[i] + arr_num[j] == target_num) {
        return [arr_num[i], arr_num[j]]
      }
    }
  }
}
console.log(pair_num([1, 2, 3, 4], 5))

Question no 2
function reverseString(str) {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
}
console.log(reverseString('salman'));

Question no 3
function sumLargest(arr_num) {
  let temp = 0;

  for (let i = 0; i <= arr_num.length; i++) {
    for (let j = i + 1; j < arr_num.length; j++) {
      if (arr_num[i] + arr_num[j] > temp) {
        temp = arr_num[i] + arr_num[j]
      }
    }
  }
  return temp
}
console.log(sumLargest([1, 2, 3, 4]))

Question no 4
function filterStrings(arr) {
  const reqArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      reqArray.push(arr[i]);
    }
  }
  return reqArray;
}
console.log(filterStrings(["hi", "hello", "hey", "howdy"]));
  
Question no 5
function filterStrings(arr) {
  const reqArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      reqArray[reqArray.length] = arr[i]
    }
  }
  return reqArray;
}
console.log(filterStrings([1, 2, 3, 4, 5, 6]));

Question no 6
function input(arr, key) {
  let newarray = [];
  for (let i = 0; i < arr.length; i++) {
    newarray.push(arr[i]);
  }
  return newarray;
}
console.log(input([{ name: "John", age: 30 }, { name: "Jane", age: 25 }], "name"));

Question no 7
function isPalindrome(str) {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return str == newstr;
}
console.log(isPalindrome("level"))

Question no 9
function strLength(arr) {
  let newarray = [];
  for (let i = 0; i < arr.length; i++) {
    newarray.push(arr[i].length);
  }
  return newarray;
}
console.log(strLength(["hi", "hello", "hey", "howdy"]));

Question no 10
function Index(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      return i;
    }
  }
}
console.log(Index([1, 5, 15, 20]));