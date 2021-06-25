//Output: 1234567891011
console.log("1)Output: 1234567891011");
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string ="";
 
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);
console.log("------------------------------------------------------------------------------");
//2)output:1,2,3,4,5,6,7,8,9,10,11
console.log("2)output:1,2,3,4,5,6,7,8,9,10,11");
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] +",";
}
console.log(new_string);
console.log("------------------------------------------------------------------------------");
//3)Output: 11 10 9 8 7 6 5 4 3 2 1
console.log("3)Output: 11 10 9 8 7 6 5 4 3 2 1");
new_string ='';
for (var i = 11; i >= 0; i-- ) {
 new_string += numsArr[i] +" ";
}
console.log(new_string);
console.log("------------------------------------------------------------------------------");
//4)Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
console.log("4)Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]");
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] ="even";
 }

}
console.log(numsArr);
console.log("------------------------------------------------------------------------------");
//5)Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
console.log("5)Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]");
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i%2 == 0 )
 {
 numsArr[i] = "even";
 }
}
console.log(numsArr);
console.log("------------------------------------------------------------------------------");
//6)Write a code to add all the numbers in the array
console.log("6)Write a code to add all the numbers in the array");
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum=0;
for (var i = 0; i <=10; i++) {
 sum += numsArr[i];
}
console.log(sum);
console.log("------------------------------------------------------------------------------");
//7)Write a code to add the even numbers only
console.log("7)Write a code to add the even numbers only");
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
sum=0;
for (var i = 0; i<=10; i++) {
 if(numsArr[i]%2==0)
 sum += numsArr[i];
}
console.log(sum);
console.log("------------------------------------------------------------------------------");
//8)Write a code to add the even numbers and subract the odd numbers Output: 94
console.log("8)Write a code to add the even numbers and subract the odd numbers Output: 94");
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i];
 }
 else
 {
 sum -= numsArr[i];
 }
}
console.log(sum);
console.log("------------------------------------------------------------------------------");
//9)Output:Array(5) [ 1, 2, 3, 4, 5 ] Array(6) [ 6, 7, 8, 9, 10, 11 ]
console.log("9)Output:Array(5) [ 1, 2, 3, 4, 5 ] Array(6) [ 6, 7, 8, 9, 10, 11 ]");
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 console.log( numsArr[i]);
}
console.log("------------------------------------------------------------------------------");
//10)Write a code to print elements in the inner arrays Output: 1234567891011
console.log("10)Write a code to print elements in the inner arrays Output: 1234567891011");
numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
str_all=[];
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all.push(inner_array[j]);
}
console.log(str_all);
console.log("------------------------------------------------------------------------------");
//11)Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
/*console.log("11)Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]");
let a1= [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < a1.length; i++) 
{
 let b1 = a1[i];
 for(var j = 0 ; j < b1.length;j++ )
   {
      if(b1[j]%2 == 0 )
      {
         a1[j] = "even";
       }
    }
}
console.log(a1);*/
console.log("------------------------------------------------------------------------------");
//12)Write a code to print elements in the inner arrays in reverse Output: 11 10 9 8 7 6 5 4 3 2 1
console.log("12)Write a code to print elements in the inner arrays in reverse Output: 11 10 9 8 7 6 5 4 3 2 1");
numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
str_all=[];
for (var i = numsArr.length-1; i < 0; i--) {
 inner_array = numsArr[i];
 for(var j = inner_array.length-1; j < 0 ;j-- )
     str_all.push(inner_array[j]);
}
console.log(str_all);



