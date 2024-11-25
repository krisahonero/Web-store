let products = [];
let total = 0;
let counter = 0;

function add(product, price){
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML= `Pagar $${total}`
}
function count(product){
    counter = counter + 1
    console.log(counter)

}

function pay(){
    window.alert(products.join(", \n"))
}


// -------------

function displayProducts (productList) {
    let productHTML = "";
    productList.forEach(element => {
        productHTML +=
        // `<div class="product-container">
        //      <h3>${element.name}</h3>
        //      <img src=${element.image} alt="burger1">
        //      <div class="text">
        //          <div class="description"> ${element.description} </div>
        //          <div class="precio"> $${element.price} </div>
        //          <button class="shape" onclick="add(${element.id},${element.price})">
        //            +
        //          </button>
        //      </div>
        //  </div>`
         `<div class="product-container">
                <div>
                    <img src=${element.image} class="foto-burger" alt="ComboSimpleFatCheddar">
                    <div class="text">
                        <h3>${element.name}</h3>
                        <p class="description">${element.description}</p>
                        <div class="precio">
                             <span>$${element.price}</span>
                            <button class="shape"onclick="add(${element.id},${element.price})">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>`
    });
    document.getElementById("page-content").innerHTML = productHTML;

}

window.onload = async() => {
    const productList = await(await fetch("/api/products")).json();
    console.log(productList);
    displayProducts(productList);
}