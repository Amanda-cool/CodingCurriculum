var prodContainer = document.querySelector(".testing")
fetch(`http://localhost:2000/genres`)
.then(response => {
    return response.json()
})
.then(data => {
    //for (i = 0; i < data.length; i++) {
    //    prodContainer.innerHTML += `<div>${data[i].image}</div>`
    //  }
      console.log(data);
})