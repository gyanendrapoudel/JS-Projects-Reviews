import  {users}  from "./data.js";

const item1 = document.querySelector('.item-1')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const btn = document.querySelector('.btn')
console.log(item1.innerHTML)

// default review 
let user =users[0]
let index = users.indexOf(user);


prev.addEventListener('click',()=>{
    if(index<=0){
        index=users.length-1
    } else{
        index=index-1
    }
    console.log(user)
    user = users[index]
    itemHTML(user)
})


next.addEventListener('click', () => {
  if (index >= users.length-1) {
    index = 0;
  } else {
    index = index + 1
  }
  user = users[index]
  itemHTML(user)
})


btn.addEventListener('click',()=>{
    let rand = randomNumber()
    console.log(rand)
    itemHTML(users[rand])
})


function randomNumber(){
    let rand = Math.floor(Math.random()*users.length)
    return rand
}

function itemHTML(user){
 item1.innerHTML = `<div class=" img-container display-flex-center">
            <div class="img-item">
           
            <img src=${user.img} alt="pp">
           <span class="outer-circle"></span>
             <span class="quote"><i class="fa-solid fa-quote-right"></i></span>
            </div>

            </div>
            <div class="name display-flex-center">
               ${user.name}
           </div>
         <div class="profession display-flex-center">
                ${user.profession}
            </div>
            <div class="description">
               ${user.reviews.slice(0,user.reviews.length>200?200:user.reviews.length)}${'...'}
            </div>
             `
}

itemHTML(user)