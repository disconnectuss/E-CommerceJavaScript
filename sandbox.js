// imported codes
import { renderCategories,
    renderProducts,
    renderBasketItem,
    renderUsers } from './ui.js';


// watching if the content is loading or not
document.addEventListener("DOMContentLoaded",()=> {
    fetchCategories();
    fetchProducts();
    fetchUsers()

})

const baseURL = 'https://api.escuelajs.co/api/v1'
// fetching the category data
function fetchCategories() {
    fetch(`${baseURL}/categories`)
    //if it works properly and fetches data
    .then((response)=> response.json())
    // turning into json, the data works
    .then((data)=> renderCategories(data.slice(0,4))) 
    //if there's an error
    .catch((error) => console.log(error))
}
let globalData = []
// fetching products
async function fetchProducts(){
try {
    // making a request
    const res = await fetch(`${baseURL}/products`);
    // turning into json, the data works
    const data = await res.json();
    // displaying it
    globalData = data // got the data to global
    renderProducts(data)
    }
catch(err) {
      //if there's an error   
        console.log(err)
    }
}  

function fetchUsers() {
   fetch(`${baseURL}/users`)
       //if it works properly and fetches data
   .then((response)=> response.json())
  // turning into json, the data works
  .then((data)=> renderUsers(data)) 
   console.log(data)
  //if there's an error
   .catch((err) => console.log(err))
}

// basket
let basket = [];
let total = 0;


const module = document.querySelector('.module-wrapper')
const cartBtn =  document.querySelector('#cart-btn')
const closeBtn = document.querySelector('#close-btn')
const basketList = document.querySelector('.list');
const moduleInfo = document.querySelector('.total-span');
const searchInput = document.getElementById('search-input')
const upBtn = document.querySelector('#plusBtn')
const downBtn = document.querySelector('#minusBtn')


//opening the basket module
cartBtn.addEventListener('click',()=>{
    module.classList.add('active')
    addList();
})
// closing the basket module
closeBtn.addEventListener('click',()=>{
    module.classList.remove('active')
// adding the products to the basket module
    basketList.innerHTML = '';
    total = 0;
    moduleInfo.textContent = '0';
})

// clicking anywhere apart from btn and closing the module
document.addEventListener('click', (e) => {
    var clickedE = e.target;
    if (clickedE.classList.contains("module-wrapper")) {
        module.classList.remove('active');
// deleting the basket
       basketList.innerHTML = '';
       total = 0;
       moduleInfo.textContent = '0';
    }
});

/* second choice but couldnt work it
document.body.addEventListener('click', (theEvent)=>{
    if(theEvent.target === cartBtn){
        module.classList.add('active')
    } else if (theEvent.target === closeBtn){
        module.classList.remove('active')  
    }
})
*/

// watching all clicks
document.body.addEventListener('click', findItem)
function findItem(e){
    const elements = e.target;
    // checking
    if(elements.id === 'add-btn'){
    // finding the item by id
        const selected = globalData.find(
            (product) => product.id == elements.dataset.id
        )
        // if there isnt amount value make it equal to 1
        if (!selected.amount){
            selected.amount = 1;
        }
        addToBasket(selected)
}
    if (elements.id === "del-btn"){
    elements.parentElement.remove()
    const selected = globalData.find((i) => i.id == elements.dataset.id)
    deleteItem(selected)

    }
}

// adding to basket
function addToBasket(product) {
    const foundItem = basket.find((item) => item.id == product.id);
    // checking
if(foundItem){
    // grow the amount
    foundItem.amount++
} else{
    basket.push(product)
}
}

// deleting (function) item from basket
function deleteItem(delItem){
const filteredData = basket.filter((item)=> item.id !== delItem.id)
basket = filteredData
total -= delItem.price * delItem.amount
moduleInfo.textContent = total;  
}
// up and down for amount



// adding the products to the basket module

function addList(){
    basket.forEach((product)=>{
    // displaying the basket item
        renderBasketItem(product)
    // current total price
    total += product.price * product.amount;
  });
  // updating total price
  console.log(total);
  moduleInfo.textContent = total;  
} 

// search box
document.addEventListener( 'onchange', searchInput)
function search(searchText) {
    const filteredInput = input.filter((item)=> item.id == product.id)
    if (filteredInput.includes(product.id)){
       console.log(filteredInput)
    }
} 
