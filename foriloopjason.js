var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ]
  let keys=[]
  
  for(let i=0;i<obj.length;i++)
  {
      keys=Object.keys(obj[i]);
      for(let j=0;j<keys.length;j++)
      {
          let key=keys[j];
          console.log(key+":"+obj[i][key]);
      }
  }