export async function getProducts(){
  const request = await fetch("http://localhost:3000/products",{
      method:"GET",
      headers:{
      "Content-type":"application/json",
      "Permissions-Policy": "geolocation=(self `http://localhost:3001/products`)"
      }
  });
  
  const products_list = await request.json();
  return products_list;
}

async function setProduct(name,price,url_imagen){
  const request = await fetch("http://localhost:3000/products",{
  method:"POST",
  headers:{
      "Content-type":"application/json",
  },
  body:JSON.stringify({
      name:name,
      price:price,
      url_imagen:url_imagen,
  })
  })

  const response = await request.json();
  return response;
}

async function deleteProduct(id){
  const request = await fetch(`http://localhost:3000/products/${id}`,{
    method:"DELETE",
    headers:{
        "Content-type":"application/json",
    },
  })

  const response = await request.json();
  return response;
}

export const APIMethods={
  getProducts,
  setProduct,
  deleteProduct
}