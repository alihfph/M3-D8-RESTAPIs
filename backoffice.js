let id 
const url = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
  const currentProducts = document.getElementById("currentProducts");
  console.log("page has been rendered");
  let urlParams = new URLSearchParams(window.location.search);
  id = urlParams.get("id");
  console.log("ID IS", id);
  if (id) {
    // this will be true everytime id is NOT NULL
    // document.getElementById("subTitle").innerText = "EDIT EVENT";
    // here I will now fetch(url+id)
    // and I will pre-populate my inputs in the form with the event details
    // that won't be a new resource, I will just EDIT the existing event
    let response = await fetch(url + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTU5OTAwNTYsImV4cCI6MTYxNzE5OTY1Nn0.RMW5ynbJicT1PGj6N_K7GumL3UqRrtxNvEaHV249Yuo",
        },
    } );
    let eventDetails = await response.json();
    console.log(eventDetails);

    document.getElementById("productname").value = eventDetails.name;
    document.getElementById("brandDescription").value =
      eventDetails.description;
    document.getElementById("imgURL").value = eventDetails.price
    document.getElementById("brand").value = eventDetails.brand
    document.getElementById("price").value = eventDetails.price

  } else {
    document.getElementById("subTitle").innerText = "CREATE EVENT";
  }
}

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
  let response;

  try { 
    if (id)  {
      response = await fetch(url + id, {
        method: "PUT",
        body: JSON.stringify(myEvent),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTU5OTAwNTYsImV4cCI6MTYxNzE5OTY1Nn0.RMW5ynbJicT1PGj6N_K7GumL3UqRrtxNvEaHV249Yuo",
          },
      });
  }
  
  else{
      response = await fetch ("https://striveschool-api.herokuapp.com/api/product/", {
      method: "POST",
      body: JSON.stringify(myEvent),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTU5OTAwNTYsImV4cCI6MTYxNzE5OTY1Nn0.RMW5ynbJicT1PGj6N_K7GumL3UqRrtxNvEaHV249Yuo",
       
      },
    });
  }

    if (response.ok) {
      // probably everything went well
      alert(`Event was ${id ? "edited" : "created"} successfully!`);
      window.location.assign("index.html")
    } else {
      alert("something went wrong :(");
      // probably something went wrong
    }
  } catch (error) {
    console.log(error);
  }
  }


  