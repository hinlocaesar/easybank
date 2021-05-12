const btnHambuger = document.querySelector('#btnHamburger');
const body = document.queryCommandEnabled('.body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade')

btnHambuger.addEventListener('click',function(){
    console.log("[LOG HINLO] click hinlo hamburger");
    
    if(header.classList.contains('open')){ //close
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');    
        })


    }else{ //open
        header.classList.add('open');   
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out'); 
            element.classList.add('fade-in'); 
        })

    }

})