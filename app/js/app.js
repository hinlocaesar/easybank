
const btnHambuger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHambuger.addEventListener('click',function(){
    console.log("[LOG HINLO] click hinlo hamburger");
    
    if(header.classList.contains('open')){ //close
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');    
    }else{ //open
        header.classList.add('open');   
        overlay.classList.remove('fade-out'); 
        overlay.classList.add('fade-in');    
    }

})