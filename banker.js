
    // const firstName = document.getElementById('Firstname').value.trim()
    // const lastName = document.getElementById('LastName').value.trim();
    // const userName = document.getElementById('UserName').value.trim();
    // const password = document.getElementById('password').value.trim();
    // const email = document.getElementById('email').value.trim();
// login
    function Validitylog(event){
        event.preventDefault(); // Prevent default form submission behavior
        console.log('clicked')
        const Username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const  err = document.querySelector(".error")
        err.innerHTML=''
       
        if(Username === "" ){
            err.innerHTML +='please enter your Username. <br/>'
        }
        if(password === "" ){
            err.innerHTML +='please enter your Password  <br/>'
        } 
        if(err.innerHTML !== ""){
            return false
        } 
       
    }
// signup

    function Validitysign(event) {
        event.preventDefault(); // Prevent default form submission behavior
        console.log('clicked')
        const Usernames = document.getElementById('usernames').value.trim();
        const passwords = document.getElementById('passwords').value.trim();
        const email = document.getElementById('email').value.trim();
        const firstName = document.getElementById('Firstname').value.trim();
        const lastName = document.getElementById('Lastname').value.trim();
        const  errs = document.querySelector(".error")
        errs.innerHTML=''
       
        if(Usernames === "" ){
            errs.innerHTML += 'please enter your Username. <br/>'
        }
        if(passwords === "" ){
            errs.innerHTML += 'please enter your Password  <br/>'
        } 
        if(email === "" ){
            errs.innerHTML +=  'please enter your email  <br/>'
        } 
        if(firstName === "" ){
            errs.innerHTML += 'please enter your Firstname  <br/>'
        } 
        if(lastName === "" ){
            errs.innerHTML += 'please enter your lastname  <br/>'
        } 



        if(errs.innerHTML !== ""){
            return false
        } 
    
    }
       

// to link
function login(event){
    event.preventDefault();
    console.log('clicked')
      
 const  sign = document.querySelector("#sign-up")
   const  log = document.querySelector("#login")
   sign.style.display='block'
   log.style.display='none'
}
function signup(event){
    event.preventDefault();
    console.log('clicked')
       
 const  sign = document.querySelector("#sign-up")
 const  log = document.querySelector("#login")
   sign.style.display='none'
   log.style.display='block'
}
