import { APIMethods } from "./API_call.js";
import { Widgets } from "./card_component.js";


const grid_products_dom = document.querySelector(".grid");
const modal_status_dom = document.querySelector(".modal-api-status");
let delete_product_card_dom;



window.onload = async () => {
    const products_list = await APIMethods.getProducts();
    products_list.forEach(element => grid_products_dom.prepend(Widgets.setProductCard(element.id,element.name,element.price,element.url_imagen)));
    delete_product_card_dom = document.querySelectorAll(".icon-delete")
    
    delete_product_card_dom.forEach(element => element.addEventListener("click",async (event) => {
        console.log(element.parentElement.parentElement.parentElement.remove());
        const response = await APIMethods.deleteProduct(element.id);
        if(response.status === "ok"){
            element.parentElement.parentElement.parentElement.remove();
            document.querySelector('.modal-message').innerHTML = "Producto eliminado con exito"
            modal_status_dom.classList.remove("hidden")
            setInterval(() => {
                modal_status_dom.classList.add("hidden")
            }, 5000);
        } 
    }))
}


const formulario = document.querySelector('.form');
async function createNewProduct(evento){
    evento.preventDefault();
    const url_image= document.querySelector("#url_image").value;   
    const name= document.querySelector("#name").value;
    const price = document.querySelector("#price").value;

    response = await APIMethods.setProduct(name,price,url_image)

    if(response.status === "ok"){
        modal_status_dom.classList.remove("hidden")
        setInterval(() => {
            modal_status_dom.classList.add("hidden")
        }, 5000);
    }else{
        modal_status_dom.classList.add("hidden")
    }
}

formulario.addEventListener("submit",evento=>createNewProduct(evento));



