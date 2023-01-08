
function page1(){
    limpar()
    document.querySelector('.sliders').classList.add('page1') 
    document.querySelectorAll('.pointer')[1].classList.remove('activate')
    document.querySelectorAll('.pointer')[2].classList.remove('activate')
    document.querySelectorAll('.pointer')[0].classList.add('activate')
}
function page2(){
    
    limpar()
    document.querySelector('.sliders').classList.add('page2')
    document.querySelectorAll('.pointer')[0].classList.remove('activate')
    document.querySelectorAll('.pointer')[2].classList.remove('activate')
    document.querySelectorAll('.pointer')[1].classList.add('activate')
    
}
function page3(){
    limpar()
    document.querySelector('.sliders').classList.add('page3')
    document.querySelectorAll('.pointer')[0].classList.remove('activate')
    document.querySelectorAll('.pointer')[1].classList.remove('activate')
    document.querySelectorAll('.pointer')[2].classList.add('activate')
}
 function limpar(){
     document.querySelector(".sliders").classList.remove('page1')
     document.querySelector(".sliders").classList.remove('page2')
     document.querySelector(".sliders").classList.remove('page3')
 }
 function abreFecha(){
     if(document.querySelector('.menuOpener').style.width='0vw'){
        
        document.querySelector('.menuOpener').style.width='100vw'
     }
     else{
        document.querySelector('.menuOpener').style.width=='0vw';
     }
 }
function selected(item){
    document.querySelectorAll('.pointer').classList.remove('activate')
}
 