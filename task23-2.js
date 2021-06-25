//1)Fix the code to get the largest of three.
console.log("1)Fix the code to get the largest of three.");
aa = (f,s,t) => {
    console.log(f,s,t);
    if(f>s &&f>t)
    console.log(f);
    else if(s>f && s>t)
    console.log(s);
    else
    console.log(t);
   }
   aa(1,2,3);
console.log("----------------------------------------------------------------------------------------")
//2)Fix the code to get the largest of three.
console.log("2)Fix the code to Sum of the digits present in the number");
let n = 123;
function add(n)
{
let sum = 0;
n=n.toString();
n=n.split("");
for(var i=0;i<n.length;i++){
 sum+=parseInt(n[i]);
 }
 return sum;
}
console.log(add(n));

