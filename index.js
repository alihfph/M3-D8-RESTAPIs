
window.onload = async () => {
  console.log("page has been rendered");

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
                                <a href="#" class="">${event.price}</a>
                                <a href="#" class="">${event.brand}</a><br>
                                <span><a class="btn btn-info" href="./detail.html?id=${event._id}">VIEW DETAILS</a></span>
                                </div>
                                </div>
                                `
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


