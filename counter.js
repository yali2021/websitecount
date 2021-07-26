function updateVisitCount(){
    fetch("https://91p8dxrx9h.execute-api.us-east-1.amazonaws.com/Prod/count")
      .then(response => response.text())
      .then((body) => {
        var obj = JSON.parse(body);
        document.getElementById("counter").innerHTML=obj.count
      })
      .catch(function(error) {
        console.log(error); 
      });  
    }  