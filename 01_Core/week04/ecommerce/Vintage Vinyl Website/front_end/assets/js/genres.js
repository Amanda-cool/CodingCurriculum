// var prodData=[];
// async function getProducts(){
//     const response = await fetch("http://localhost:2000/genres", {


//     })
//     console.log(response);
//     prodData = await response.json();
//     console.log(prodData);
// };
// getProducts();


// Fetching products from database and applying to HTML:
// creating variable to utilize later for querySelector on record-container to tell it where I want to insert HTML
var prodContainer = document.querySelector(".record-container")
//Fetching products utilizing genres endpoint created in go
fetch(`http://localhost:2000/genres`)
    // Decoding json back to an array of objects, from the struct created in go
    .then(response => {
        return response.json()
    })
    //looping through the previous array to return the data in innerHTML
    .then(data => {
        for (i = 0; i < data.length; i++) {
            prodContainer.innerHTML += `
            <div class="ind-prod">
                <a href="detail.html">
                    <img src="${data[i].img}" alt="${data[i].artist}" class="record_ind">
                    <p class="record_pad">${data[i].artist}</p>
                    <p>${data[i].price}</p>
                    <p class="genre-magic">${data[i].genre}</p>
                </a>
            </div>`
        }
    })

// Search functionality


function search() {
    const indProd = document.querySelectorAll(".ind-prod");
    let input = document.getElementById("search-box");
    let inputF = input.value.toUpperCase();

    for (i = 0; i < indProd.length; i++) {
        let prodArr = indProd[i].getElementsByTagName("p") [0];
        let valueProd = prodArr.textContent || prodArr.innerHTML;

        if (valueProd.toUpperCase().indexOf(inputF) > -1) {
            indProd[i].style.display = "block";
        } else {
            indProd[i].style.display = "none";
        }
    }
}
// Filter functionality for genre

function sortGenre() {
    const indProd = document.querySelectorAll(".ind-prod");
    let genreInput = document.getElementById("genres").value;

    for (let i = 0; i < indProd.length; i++) {
        let genreArr = indProd[i].getElementsByClassName("genre-magic")  [0];
        let valGen = genreArr.textContent;

        if (genreInput === "All") {
           indProd[i].style.display = "block"     
        } else if (valGen === genreInput) {
            indProd[i].style.display = "block";
        } else {
            indProd[i].style.display = "none";
        }
    }
}





// Filter functionality for price