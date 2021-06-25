var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          data=data.map((ele,i)=>{return ele.population}).reduce((x,y)=>{return x+y;},0);
          console.log(data);
        };
        xhr.send();