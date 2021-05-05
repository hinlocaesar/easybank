
const btnHambuger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

btnHambuger.addEventListener('click',function(){
    console.log("[LOG HINLO] click hinlo hamburger");
    
    if(header.classList.contains('open')){
        header.classList.remove('open');
    }else{

        header.classList.add('open');    
    }

})