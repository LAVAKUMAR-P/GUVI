var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
         data=data.filter((ele,i)=>{return ele.population<200000}).map((ele)=>{return ele.name});
          console.log(data);
        };
        xhr.send();