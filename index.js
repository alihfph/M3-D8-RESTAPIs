
console.log("connected")
window.onload = async () => {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  const currentProducts = document.getElementById("currentProducts");


  try {

    let response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTU5OTAwNTYsImV4cCI6MTYxNzE5OTY1Nn0.RMW5ynbJicT1PGj6N_K7GumL3UqRrtxNvEaHV249Yuo",
      }
      });
    console.log(response);
    let data = await response.json();
    console.log(data);

    if (data.length > 0) {
      data.forEach((event) => {
        let listItem = document.createElement("div");
        listItem.classList.add(
          "col",
          "justify-content-center"
        );
        listItem.innerHTML = `<div class="card mb-4" style="width: 18rem;">
                                <img src=${event.imageUrl} class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${event.name}</h5>
                                 <p class="card-text">${event.description}</p>
                                <a href="#" class="btn btn-primary">${event.price}</a>
                                <a href="#" class="btn btn-secondary">${event.brand}</a>
                                </div>
                                </div>`
        currentProducts.appendChild(listItem)
      })
    } else {
      currentProducts.innerHTML = `<h1>Your products list is empty..!</h1>`
    }
  } 
  
  catch (err) {
    console.log(err);
  }

}


//BackOffice
const handleSubmit = async (e) => {
  e.preventDefault();

  let myEvent = {
    name: document.getElementById("productname").value,
    description: document.querySelector("#brandDescription").value,
    imageUrl: document.querySelector("#imgURL").value,
    price: document.querySelector("#price").value,
    brand: document.querySelector("#price").value,
  }

  console.log(myEvent);

  try {
    let response = await fetch ("https://striveschool-api.herokuapp.com/api/product/", {
      method: "POST",
      body: JSON.stringify(myEvent),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTU5OTAwNTYsImV4cCI6MTYxNzE5OTY1Nn0.RMW5ynbJicT1PGj6N_K7GumL3UqRrtxNvEaHV249Yuo",
       
      },
    });

    if (response.ok) {
      // probably everything went well
      alert("Producted was created successfully!");
    } else {
      alert("something went wrong :(");
      // probably something went wrong
    }
  } catch (error) {
    console.log(error);
  }
};


