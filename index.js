
const moreData = {
    name: "Steve",
    email: "steve@steve.com"
};


  
function submitData(string1, string2){
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
            name: string1,
            email: string2
        }),
      };
   return fetch("http://localhost:3000/users", configurationObject)
  .then(function(response){
    return response.json();
  })
  .then(function(Object){
    console.log(Object)
    document.body.innerHTML =(Object.id);
  })    
    .catch(function(errorObject){
       document.body.innerHTML = (errorObject.message);
    })
    }

    const newInnerHTML = {
        name: "Jim",
        email: "jim@jim.com"
    }

  