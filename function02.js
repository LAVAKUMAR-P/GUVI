//anonymous function & IIFE =>Print odd numbers in an array 
console.log("1)anonymous function & IIFE =>Print odd numbers in an array ");
let arr=[1,2,3,4,5,6,7,8,9,10];
let an=function(arr)
{
    let ans=[];
    for(let k of arr)
    {
        if((k%2)!==0)
        {
         ans.push(k);
        }
    }
    return ans;
}
console.log(an(arr));
(function(arr){
    let ans=[];
    for(let k of arr)
    {
        if((k%2)!==0)
        {
         ans.push(k);
        }
    }
    console.log(ans);
})(arr);
console.log("---------------------------------------------------------------------------------");
//anonymous function & IIFE => Sum of all numbers in an array
console.log("2)anonymous function & IIFE => Sum of all numbers in an array");
arr=[1,2,3,4,5,6,7,8,9,10],tem=0;
let x=function(arr)
{
    for(i=0;i<arr.length;i++)
{
    tem=parseInt(arr[i])+parseInt(tem);
}
return tem;
}
console.log(x(arr));
(function(arr){
   tem=0;
   for(i=0;i<arr.length;i++)
{
    tem=parseInt(arr[i])+parseInt(tem);
}
console.log(tem);
})(arr);
console.log("---------------------------------------------------------------------------------");
//anonymous function & IIFE =>Convert all the strings to title caps in a string array
console.log("3)anonymous function & IIFE =>Convert all the strings to title caps in a string array");
arr=["hello","hi","how","why"],k1=[],arrans=[];
x=function(arr){ for(let k of arr)
{
k1=k.split("");
for(let j=0;j<k1.length;j++)
{
    if(j===0)
    arrans.push(k1[j].toUpperCase());
    else
    arrans.push(k1[j].toLowerCase());
}
arrans.push(" ");
}
return arrans.join("");
}
console.log(x(arr));

(function(arr){ 
arrans=[];
for(let k of arr)
{
k1=k.split("");
for(let j=0;j<k1.length;j++)
{
    if(j===0)
    arrans.push(k1[j].toUpperCase());
    else
    arrans.push(k1[j].toLowerCase());
}
arrans.push(" ");
}
console.log(arrans.join(""));
})(arr);
console.log("---------------------------------------------------------------------------------");
//anonymous function & IIFE =>Return all the prime numbers in an array
console.log("4)anonymous function & IIFE =>Return all the prime numbers in an array");
arr=[1,2,3,4,5,6,7,8,9,10];
let arr1=[];
let x2=function(arr){
    if(arr.length===0)
    return 0
    for(let i=0;i<arr.length;i++)
    {
       tem=0;
        for(let j=1;j<=arr[i];j++)
        {
            if((arr[i]%j)===0)
            {
                tem=tem+1;
                if(tem===3)
                break;
            }
        } 
        if(tem<=2)
        {
        arr1.push(arr[i]);
        }
    }
    return arr1.join(" ");
}
console.log(x2(arr));
arr1=[];
(function(arr){
    if(arr.length===0)
    console.log(0);
    for(let i=0;i<arr.length;i++)
    {
       tem=0;
        for(let j=1;j<=arr[i];j++)
        {
            if((arr[i]%j)===0)
            {
                tem=tem+1;
                if(tem===3)
                break;
            }
        } 
        if(tem<=2)
        {
        arr1.push(arr[i]);
        }
    }
    console.log(arr1.join(" "));
})(arr);
console.log("---------------------------------------------------------------------------------");
//anonymous function & IIFE =>Return all the palindromes in an array
console.log("5)anonymous function & IIFE =>Return all the palindromes in an array");
arr=["hello","hi","wow","eye"],k1=[],arrans=[];
x=function(arr)
{ 
for(let k of arr)
{
if(arr.length===0)
return 0;
k1=k.split("").reverse().join("");
if(k1===k)
{
arrans.push(k);
}
}
return arrans.join(" ");
};
console.log(x(arr));
arrans=[];
(
function(arr)
{ 
for(let k of arr)
{
if(arr.length===0)
return 0;
k1=k.split("").reverse().join("");
if(k1===k)
{
arrans.push(k);
}
}
console.log(arrans.join(" "));
}
)(arr);
console.log("---------------------------------------------------------------------------------");
//anonymous function & IIFE =>Return median of two sorted arrays of same size 
console.log("6)anonymous function & IIFE =>Return median of two sorted arrays of same size");
arr1=[1, 12, 15, 26, 38];
let arr2=[2, 13, 17, 30, 45];
x=function(arr1,arr2){
if((arr1.length===0)||(arr2.length==0))
return 0;
if(arr1.length===arr2.length)
{
let tem1=arr1.length,tem2=arr2.length;
tem1=(tem1/2)-1;
tem1=Math.round(tem1);
tem2=(tem2/2)-1;
tem2=Math.round(tem2);
tem=((arr1[tem1]+arr2[tem2])/2);
return tem;
}
else
return 0;
};
console.log(x(arr1,arr2));
(function(arr1,arr2){
    if((arr1.length===0)||(arr2.length==0))
    console.log(0);
    if(arr1.length===arr2.length)
    {
    let tem1=arr1.length,tem2=arr2.length;
    tem1=(tem1/2)-1;
    tem1=Math.round(tem1);
    tem2=(tem2/2)-1;
    tem2=Math.round(tem2);
    tem=((arr1[tem1]+arr2[tem2])/2);
    console.log(tem);
    }
    else
    console.log(0);
    })(arr1,arr2);
    console.log("---------------------------------------------------------------------------------");
    //anonymous function & IIFE => Remove duplicates from an array
    console.log("7)anonymous function & IIFE => Remove duplicates from an array");
    arr=["hello","hello","wow","eye"];
    x=function(arr){
        arr1=[...new Set(arr)];
        return arr1;
    }
    console.log(x(arr));
    (function(arr){
        arr2=[...new Set(arr)];
        console.log(arr2);
    })(arr);
    console.log("---------------------------------------------------------------------------------");
    //anonymous function & IIFE => Rotate an array by k times
    console.log("8)anonymous function & IIFE =>Rotate an array by k times");
arr=[1,2,3,4,5,6,7],arr1=[],k=3;
x=function(arr,k){
        if(arr.length===1)
        return arr[0];
    for(let j=0;j<k;j++)
    {
    if(j>0)
    {
    arr=[];
    arr=arr1;
    arr1=[];
    }
    for(let i=0;i<arr.length-1;i++)
    {
        if(i===0)
        {
            arr1.push(arr[arr.length-1]);
            arr1.push(arr[i]);
        }
        else
        {
          arr1.push(arr[i]);  
        }
    }
    
    }
 return arr1;   
}
console.log(x(arr,k));
arr1=[];
(function(arr,k)
{
    if(arr.length===1)
     return arr[0];
    for(let j=0;j<k;j++)
    {
    if(j>0)
    {
    arr=[];
    arr=arr1;
    arr1=[];
    }
    for(let i=0;i<arr.length-1;i++)
    {
        if(i===0)
        {
            arr1.push(arr[arr.length-1]);
            arr1.push(arr[i]);
        }
        else
        {
          arr1.push(arr[i]);  
        }
    }
    }
 console.log(arr1);   
})(arr,k);
