var prodContainer = document.querySelector(".featured");
fetch(`http://localhost:2000/genres`)
    // Decoding json back to an array of objects, from the struct created in go
    .then(response => {
        return response.json()
    })
    //looping through the previous array to return the data in innerHTML
    .then(data => {
    //function to produce innerHTML that we will be brining over from DB
      prodContainer.innerHTML +=`
      <h2>Featured Artist:</h2>        
      <img class="mySlides" alt="${data[7].artist}" src="${data[7].img}">
      <img class="mySlides" alt="${data[5].artist}" src="${data[5].img}">
      <img class="mySlides" alt="${data[6].artist}" src="${data[6].img}">
      <img class="mySlides" alt="Neutral Milk Hotel" src="assets/images/neutral_milk_hotel.jpg">
      <img class="mySlides" alt="Ugly Casanova" src="assets/images/ugly_casanova.jpg">
`
    })


//Slideshow Carousel Main Page
//variable to start at index
var myIndex = 0;
//set earlier timeout  to allow load time
setTimeout(carousel, 100); 

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

