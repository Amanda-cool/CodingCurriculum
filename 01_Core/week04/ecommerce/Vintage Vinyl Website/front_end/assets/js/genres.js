var prodData=[];
async function getProducts(){
    const response = await fetch("http://localhost:2000/genres", {
        method: 'GET',
        mode: 'cors'

    })
    console.log(response);
    prodData = await response.json();
    console.log(prodData);
};
getProducts();