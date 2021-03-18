const url = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
  console.log("page has been rendered");
  console.log("ADDRESS BAR", window.location.search);
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  console.log(id);

  // document.getElementById("loadingSpinner").classList.toggle("d-none");

  try {
    let response = await fetch(url + id,{ method: "GET",
    // body: JSON.stringify(myEvent),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTU5OTAwNTYsImV4cCI6MTYxNzE5OTY1Nn0.RMW5ynbJicT1PGj6N_K7GumL3UqRrtxNvEaHV249Yuo", 
},
  }); // "https://striveschool-api.herokuapp.com/api/agenda/6051e84789c26f00157f9c27"
    let data = await response.json();
    console.log("SINGLE EVENT", data);
    // use the data for creating some <p> into the detail section of the page
    let p = document.createElement("div");
    p.innerHTML = `<div class="justify-content-center">
    <div>
    <h5 class="card-title">${data.name}</h5>
     <p class="card-text">${data.description}</p>
    <a href="#" class="mb-2">${data.price}</a>
    <a href="#" class="mb-2">${data.brand}</a>
    </div>
    </div>
    <img src="${data.imageUrl}" class="img-fluid" alt="...">
    `;

    // document.getElementById("loadingSpinner").classList.toggle("d-none");

    document.getElementById("details").appendChild(p);
  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async () => {
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  try {
    let response = await fetch(url + id, { method: "DELETE",
    // body: JSON.stringify(myEvent),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTU5OTAwNTYsImV4cCI6MTYxNzE5OTY1Nn0.RMW5ynbJicT1PGj6N_K7GumL3UqRrtxNvEaHV249Yuo", 
},
  });
    if (response.ok) {
      alert("event deleted successfully");
      window.location.assign("index.html");
    } else {
      alert("something went wrong with the deletion process");
    }
  } catch (error) {
    console.log(error);
  }
};

const handleEdit = () => {
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  window.location.assign("backoffice.html?id=" + id);
};