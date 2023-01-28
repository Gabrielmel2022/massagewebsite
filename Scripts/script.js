//controls 

const logInBtn = document.getElementById('logInBtn')
const txtUser = document.getElementById('txtUser')
let validUsers = ['Gabemel1994', 'Christina2023']
let ups = ['Melgoza1','Mass85224']
let ghostlink = document.getElementById('ghostlink')
const priceList = document.getElementById('priceList')



//functions (this is where all functions go that are not handlers)
const loadPriceList = () => {
    let amount = '100000' 
    let item = `<li class= "test"> item: ${'item goes here'} $${amount}</li>`
    priceList.innerHTML = item 

   //let item = document.createElement('li')
   //item.setAttribute('class', 'test')//
   //item.className = 'test'
   //item.innerText = '$1000'
   //priceList.appendChild(item)
}




//event handlers


logInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    


    if(txtUser.value===''){
        alert('Must enter a username in box')
    } 
    else if(validUsers.includes(txtUser.value)){
        let userInput=prompt('Please enter a password')
        if(ups[validUsers.indexOf(txtUser.value)] === userInput){
            ghostlink.click()

        }
        else{
            alert('Invalid password')
        }   
    }
    else {
     alert('You are not an Administrator. Please contact Administrator.')
    }
    
})
