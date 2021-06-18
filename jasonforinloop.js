var obj = [   { person: "Name 1", age: "2", company: "GUVI" },  
              { person: "Name 2", age: "5", company: "GUVI geek" }, 
              { person: "Name 3", age: "8", company: "GUVI geek network" }, ]; 
 for (var i in obj)
  {  
       for (var j in obj[i]) 
       {    
            console.log(j + ':'+obj[i][j]);  
       } 
  }