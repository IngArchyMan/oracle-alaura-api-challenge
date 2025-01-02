
export function setProductCard(id, name, price, img_url){
    const cardHTML= `
        <img src="${img_url}"  class="card-img" />
        <div class="card-container--info">
        <p class="card-title">${name}</p>
        <div class="card-container--value">
            <p>$ ${price}</p>
            <span class="icon-delete" id="${id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" stroke-width="1">
                <path d="M4 7l16 0"></path>
                <path d="M10 11l0 6"></path>
                <path d="M14 11l0 6"></path>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
            </span>
        </div>
        </div>
    `
    let product_card_dom = document.createElement('div')
    product_card_dom.classList.add('card', `product-${id}`)
    product_card_dom.innerHTML = cardHTML

    return product_card_dom
}


export const Widgets={
    setProductCard
}