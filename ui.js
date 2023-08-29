// it stands for user interface and enables coder less crowded code page :)
const categoryList = document.querySelector('.categories');
const productList = document.querySelector('.products')
const basketList = document.querySelector('.list')
const seachInput = document.getElementById('search-input')



export function renderCategories(categories) {
    categories.forEach((category)=> {
    // 1- create a div
    const categoryDiv = document.createElement ('div');
    // 2- add a class to div
    categoryDiv.classList.add('category');
    // 3- build the inner of div
    categoryDiv.innerHTML = `
<img src="${category.image}" alt="">
     <span>${category.name}</span> `;
     // 4- add the element to HTML div
     categoryList.appendChild(categoryDiv)
});
}

export function renderProducts(products){
products.slice(0,40)
.forEach((product) => {
    // 1- create a div
   const productCard = document.createElement("div");
   // 2- add a class to div
   productCard.className = "product";
   // 3- build the inner of div
   productCard.innerHTML = `
   <img src="${product.images[0]}" alt="">
                    <p>${product.title}</p>
                    <p>${product.category.name}</p>
                <div class="pro-info ">
                    <p>${product.price}</p>
                    <button id="add-btn" data-id=${product.id}>Add to Basket</button>
                </div> 
   `; // product.id enables to find the selected item

    // 4- add the element to HTML div
   productList.appendChild(productCard)
});
} 

export function renderBasketItem (product) {
    console.log(product)

const basketItem = document.createElement('div')
basketItem.classList.add('list-item')
basketItem.innerHTML = `
<img src=${product.images[0]}/>
<h2>${product.title}</h2>
<h2>${product.price}</h2>
<div class="amountBar"> 
<button id="minus-btn"><img src="img/minus-icon.png" alt=""></button>
<p>${product.amount}</p>
<button id="plus-btn" ><img src="img/icons8-plus-48.png" alt=""></button></div>
<button id="del-btn" data-id=${product.id} >Delete</button> 
`;
basketList.appendChild(basketItem);
}

export function renderUsers(users) {
  users.forEach((user)=> {
  // 1- create a div
  const userDiv = document.createElement ('div');
  // 2- add a class to div
   userDiv.classList.add('user');
    // 3- build the inner of div
   categoryDiv.innerHTML = `
 <img src="${user.image}" alt="">
    <p>${user.name}</p> `;
    // 4- add the element to HTML div
    categoryList.appendChild(userDiv)
 });
 }