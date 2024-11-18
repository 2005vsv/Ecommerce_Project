import { products } from "./database/product.js";
console.log(products);
let productcontainer=document.getElementById("products");
for(let product of products){
    const cardcontainer=document.createElement("div");
    cardcontainer.classList.add("card", "card-vertical",
         "d-flex",
          "direction-column", 
          "relative", 
          "shadow");
    const imagecontainer=document.createElement("div");
    imagecontainer.classList.add("card-image-container");
    const image=document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src",product.img);
    image.setAttribute("alt",product.name);
    imagecontainer.appendChild(image);
    productcontainer.appendChild(cardcontainer);
    let carddetails=document.createElement("div");
    carddetails.classList.add("card-details");
    let brand=document.createElement("div");
    brand.classList.add("card-title");
    brand.innerText=product.brand;
    productcontainer.appendChild(cardcontainer);

}