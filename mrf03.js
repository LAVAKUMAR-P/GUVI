var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          data.forEach((x) => {
            console.log("name :"+x.name);console.log("capital :"+x.capital);console.log("flag  :"+x.flag);
        
          });
         //console.log(redata); 
        };
        xhr.send();