Skip to content
 
Search…
All gists
Back to GitHub
@LAVAKUMAR-P 
@rvsp
rvsp/B251-WD.txt
Last active 8 days ago • Report abuse
3
3
 Code
 Revisions 12
 Stars 3
 Forks 3
<script src="https://gist.github.com/rvsp/167eaa48a9e012e1c7beab133be5f212.js"></script>
B251 WD notes/task link
B251-WD.txt
June 16, 2021
to read - https://stackoverflow.com/questions/5641997/is-it-necessary-to-write-head-body-and-html-tags
task
    create a simple html file containing of elements that helps to build a rough portfolio
    doc for the difference between <div>, <article>, <section> tag?
    write a doc for the following below
        typeof(1)
        typeof(1.1)
        typeof('1.1')
        typeof(true)
        typeof(null)
        typeof(undefined)
        typeof([])
        typeof({})
        typeof(NaN)
    read what is prototype

---------------------------------------------
June 17, 2021
Task
    1)
    var obj = [
          { person: "Name 1", age: "2", company: "GUVI" },
          { person: "Name 2", age: "5", company: "GUVI geek" },
          { person: "Name 3", age: "8", company: "GUVI geek network" },
        ]
    use the above JSON to iterate over all for loops (for, for in, for of, forEach)
    2)
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          console.log(data);
        };
        xhr.send();
    use the restcountries API url ->  https://restcountries.eu/rest/v2/all
    and diplay all the country flags in console
    3) 
    use the same restcountries and print all countries name, region, sub region and population.
    4) read abouyt the difference between window, screen and document in javascript
---------------------------------------------
Jun 18, 2021
Task 
    1) create your own resume data in JSON format
    2) how to compare two JSON have the same properties without order?
        var obj1 = { name: "Person 1", age:5 };
        var obj2 = { age:5, name: "Person 1" };
    3) https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373
---------------------------------------------
Jun 21, 2021
Task
    1) Do the below programs in anonymous function & IIFE
        Print odd numbers in an array 
        Convert all the strings to title caps in a string array
        Sum of all numbers in an array
        Return all the prime numbers in an array
        Return all the palindromes in an array
        Return median of two sorted arrays of same size 
        Remove duplicates from an array
        Rotate an array by k times 
    2) https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f
    3) Do the below programs in arrow functions
        Print odd numbers in an array 
        Convert all the strings to title caps in a string array
        Sum of all numbers in an array
        Return all the prime numbers in an array
        Return all the palindromes in an array

June 23, 2021
Task
    1) read - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    2) practice(submission not needed) - https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373
    3) https://medium.com/@reach2arunprakash/guvi-zen-class-find-the-culprits-and-nail-them-9ee6c67c44fb
    4) https://medium.com/@reach2arunprakash/www-guvi-io-zen-4fa483a7d359
    5) https://medium.com/@reach2arunprakash/guvi-zen-simple-debugging-tasks-adcdc2d3249d
    
June 24, 2021
Task - ES6
    1) https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
    2) https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
    3) Write a person class to hold all details.
    4) write a class to calculate uber price.

June 25, 2021
Task
    1) Solving problems using array functions on rest countries data. 
        - Get all the countries from Asia continent /region using Filter function
        - Get all the countries with a population of less than 2 lakhs using Filter function
        - Print the following details name, capital, flag using forEach function 
        - Print the total population of countries using reduce function 
        - Print the country which use US Dollars as currency.
@LAVAKUMAR-P
 
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
