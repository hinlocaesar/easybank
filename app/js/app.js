
const btnHambuger = document.querySelector('#btnHamburger');

btnHambuger.addEventListener('click',function(){
    console.log("[LOG HINLO] click hinlo hamburger");
    if(btnHambuger.classList.contains('open')){
        btnHambuger.classList.remove('open');
    }else{
        btnHambuger.classList.add('open');
    }

})