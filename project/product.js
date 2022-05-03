let search=document.querySelectorAll(".form-control")[0]
let form2=document.querySelectorAll(".d-flex")[0];
let sugbox=document.querySelectorAll(".sugul")[0]
let srhbut=document.querySelector('button[type="submit"]');
let row=document.getElementById('row')

function createProduct(item){
    var card = document.createElement("div");
    card.style.maxWidth = "20rem";
    card.setAttribute("id",item.id);
    card.classList.add("card");
    card.classList.add("border-warning");
    card.classList.add("mb-3");
    card.innerHTML = `<div class="card-header">
        <img src="${item.image}" height="80%">
        </div>
        <div class="card-body">
          <div class="card-subtitle">${item.title}</div>
          <p class="card-subtitle text-muted">${item.price}</p>
          <button type="button" class="btn btn-warning" onclick="AddToCart(${item.id},'${item.title}','${item.image}','${item.price}')">Add to Cart</button>
        </div>`
    
    return card;
}

//html can access local function in module
window.AddToCart = AddToCart;
function AddToCart(id, title, image, price){
    var cart = {};
    //if there is cart 
    if(localStorage.getItem("Cart")){
        cart = JSON.parse(localStorage.getItem("Cart"));
        //if item exists in cart
        if(cart[title]){
            cart[title].count++;
            localStorage.setItem("Cart", JSON.stringify(cart));
        }
        //if item is new to cart
        else{
            cart[title] = {id:id, image:image, price:price, count:1};
            localStorage.setItem("Cart", JSON.stringify(cart));
        }
    }
    //if there is no cart
    else{
        cart[title] = {id:id, image:image, price:price, count:1};
        localStorage.setItem("Cart", JSON.stringify(cart));
    }
    //console.log(cart);
}

window.OpenCartWindow = OpenCartWindow;
function OpenCartWindow(){
    var win = open("Cart.html","_blank","width=1500px,height=700px");
}






var a=[];
search.addEventListener('keyup',function(){
      datatosearch.forEach(element => {
          a.push(element.title)
      });
    let searched=search.value;
    let srhsrr=searchitem(a,searched);
    insersuggestion(srhsrr)


})


form2.addEventListener('click',function(){
    setTimeout(function(){
        let searched=search.value;
        let srhsrr=searchitem(a,searched);
        insersuggestion(srhsrr)
    },100)
    
})












 

function searchitem(arr,searchit){
    searchit.trim();
    try{

    if(searchit.trim()!=''&&searchit.trim()!="."){
    var re = new RegExp(`^\\b${searchit}`,"i");
    //   let re=/\b+searched/ig;
    // arr.forEach(function(ele,index){if(re.test(ele)){if(searchit.trim()!=''){return arr[index]}}})
   let result= arr.filter(function(ele,index){return (re.test(ele))})
   return result}}
   catch(e){
    //    console.log(e)

   }

}

function insersuggestion(srhsrr){
    let text='';
    a=[];
    if(srhsrr){
    for(let item of srhsrr){
        text+=`<li>${item}</li>`;
    }}
    else{text=''}
    sugbox.innerHTML=text;
    // sugbox.style.visibility='visible'

}
let childss=document.getElementsByClassName('card-body');
let suggestion=document.getElementsByClassName('suggestions')[0];
// console.log(childss.parentElement)
suggestion.addEventListener('click',function(event){


    //  childss=document.getElementsByClassName('card-body');
    //  console.log(childss)
    let resulrdiv=false;
    loop:for(let child of childss){
        if(child.children[0].textContent.startsWith(event.target.textContent)) {
        resulrdiv= child.parentElement; break loop;
        }  
        else{resulrdiv=false}
    }
    resulrdiv.scrollIntoView({
        behavior: 'smooth'
    })
    search.value=''

})

srhbut.addEventListener('click',function(event){
event.preventDefault();
childss=document.getElementsByClassName('card-body')
let searchval=search.value.toUpperCase();
for(let key=1;key<=childss.length;key++){
    if(!(childss[key-1].children[0].textContent.toUpperCase().startsWith(searchval))) {
        // debugger
        // console.log(childss[key].parentElement)
    let val=row.removeChild(childss[key-1].parentElement)
    key-=1
    // console.log(val)
    // console.log(child)
    }  
    search.value='';
}
// loop:for(let child of childss){
//     // console.log(child.children[0].textContent.toUpperCase().startsWith(search.value.toUpperCase()))
//     if(!(child.children[0].textContent.toUpperCase().startsWith(searchval))) {
//         // debugger
//         console.log(child.parentElement)
//     let val=row.removeChild(child.parentElement)
//     // console.log(val)
//     // console.log(child)
//     }  
// }

})


