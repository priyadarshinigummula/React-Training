//primitive types 
var originalval =2
var newval=3
console.log(originalval);
console.log(newval);
newval=originalval
originalval=5
console.log(originalval)
console.log(newval)

// reference types
var orgarray=[1,2]
var newarray=[3,4]
newarray.push(0)
orgarray.push(9)
console.log(orgarray)
console.log(newarray)
newarray=orgarray
newarray.pop(2)
console.log(newarray)
console.log(orgarray)

// arrow functions
const multipliedbytwo= (num=2) => {
    return num*2;
  };
  console.log(multipliedbytwo());