

$(document).ready(function(){
   $(".button-menu").click(function(){
     $(".navbar").slideToggle();
   });
 
});

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
       document.querySelector('.gotop-container').classList.add('show');
    } else{
       document.querySelector('.gotop-container').classList.remove('show');
    }
}
   
document.querySelector('.gotop-container')
.addEventListener('click', () => {
window.scrollTo({
top:0,
behavior:"smooth",
});
});

