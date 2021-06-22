//Named function =>Write a function called “addFive”
console.log("1)Named function =>Write a function called addFive");
let x=5;
function addfive(x1){
console.log(x+x1);
}
addfive(0);
addfive(5);
addfive(-5);
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Write a function called “getOpposite”
console.log("2)Write a function called “getOpposite");
function getOpposite(x2){
    if(x2===0)
    return 0;
    if(x2>0||x2<0)
    return x2*-1;
    else
    return -1;
}
console.log(getOpposite("5a"));
console.log(getOpposite(-5));
console.log(getOpposite(0));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Create a function that takes a string and returns it as an integer
console.log("3)Create a function that takes a string and returns it as an integer");
function toInteger(x2)
{
    return parseInt(x2);
}
console.log(toInteger("258"));
console.log(typeof(toInteger("258")));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Create a function that takes a number as an argument, increments the number by +1 and returns the result
console.log("4)Create a function that takes a number as an argument, increments the number by +1 and returns the result");
function toInteger(x2)
{
    
    return ++x2;
}
console.log(toInteger(258));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Create a function that takes an array and returns the first element.
console.log("5)Create a function that takes an array and returns the first element.");
let arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
 }
 console.log(getFirstElement(arr));
 console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Convert Hours into Seconds
console.log("6)Convert Hours into Seconds");
function hourToSeconds(arr) {
    let arr1=[];
    for(let k of arr)
    {
       arr1.push(k*60*60);
    }
    return arr1.join(" ");
}
console.log(hourToSeconds(arr));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Create a function that takes height and width and finds the perimeter of a rectangle
console.log("7)Create a function that takes height and width and finds the perimeter of a rectangle");
function findperimeter(num1,num2){
    return (2*(num1+num2));
}
console.log(findperimeter(6,7));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
console.log("8)Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.");
function lessthen100(num1,num2){
    let num3=num1+num2;
    if(num3<100)
    return num3;
    if(num3>=100)
    return false;
}
console.log(lessthen100(100,200));
console.log(lessthen100(10,20));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
console.log("9)The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.");
function remainder(num1,num2)
{
    let num3=num1%num2;
    return num3;
}
console.log(remainder(1,3));
console.log(remainder(3,4));
console.log(remainder(-9,45));
console.log("--------------------------------------------------------------------------------------------------");
//Named function => You have to implement a function that returns the total number of legs of all the animals.
console.log("10) You have to implement a function that returns the total number of legs of all the animals.");
function countlegs(num1,num2,num3){
    let num4=((num1*2)+(num2*4)+(num3*4));
    return num4;
}
console.log(countlegs(2,3,5));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
console.log("11)Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.");
function fps(num1,num2)
{
    let num3=(num1*(num2*60));
    console.log(num3);
}
fps(1,1);
fps(10,1);
fps(10,25);
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
console.log("12)Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.");
function divisibleby5(num1){
    if((num1%5)===0)
    return true;
    else
    return false;
}
console.log(divisibleby5(50));
console.log(divisibleby5(-50));
console.log(divisibleby5(51));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Given a number, “isEven” returns whether it is even.
console.log("14)Given a number, isEven returns whether it is even.");
function iseven(num1){
    if((num1%2)===0)
    return true;
    else
    return false;
}
console.log(iseven(50));
console.log(iseven(-50));
console.log(iseven('5a'));
console.log(iseven(5));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
console.log("15)Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.");
function bothodd(num1,num2){
    if((num1%2!==0)&&(num2%2!==0))
    return true;
    else
    return false;
}
console.log(bothodd(2,1));
console.log(bothodd(1,1));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Given a first and a last name, “getFullName” returns a single string with the
console.log("17)Given a first and a last name, “getFullName” returns a single string with the");
function getfullname(n1,n2){
    return n1+n2;
}
console.log(getfullname("guvi","greek"));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Given a word, “getLengthOfWord” returns the length of the given word.
console.log("18)Given a word, “getLengthOfWord” returns the length of the given word.");
function getlength(n1){
    return n1.length;
}
console.log(getlength("guvi"));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Given two words, “isSameLength” returns whether the given words have
console.log("19)Given two words, “isSameLength” returns whether the given words have");
function issamelength(n1,n2){
    if(n1.length==n2.length)
    return true;
    else
    return false;
}
console.log(issamelength("guvi","greek"));
console.log(issamelength("guvi","grek"));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.
console.log("20)Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.");
function getNthElement(arr,i){
    return arr[i];
}
console.log(getNthElement([1,2,3],0));
console.log(getNthElement([1,2,3],1));
console.log(getNthElement([1,2,3],2));
console.log("--------------------------------------------------------------------------------------------------");
//Named function => “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
console.log("21) “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.");
function lastelement(x)
{
    if(x.length==0)
    return -1;
    else
    return x[(x.length-1)];
}
console.log(lastelement([1,2,3]));
console.log("--------------------------------------------------------------------------------------------------");
//Named function =>Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
console.log("22)Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.");
let obj1= {
    mykey:'value'
    };
function getproperty(obj,key)
{
    return obj[key];
}
console.log(getproperty(obj1,'mykey'));
console.log(getproperty(obj1,'key'));
