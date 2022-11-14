let btn=document.querySelector('.menu-btn')
btn.addEventListener('click', function(e){
    e.preventDefault;
    if(btn.classList.contains('menu-btn_active')){
        btn.classList.remove('menu-btn_active')
    }else{
        btn.classList.add('menu-btn_active')
    }
})