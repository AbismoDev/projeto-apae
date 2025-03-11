let seta = document.getElementsByClassName('seta-drop');
let menu = document.getElementById('menu-hamb');

function dropdown(e){
    let id = e.target.id;
    let drop = document.getElementsByClassName('dropdown');

    if(id == 'seta-desktop'){
        if(drop[0].style.display == 'none'){
            drop[0].style.display = 'block';
            seta[0].classList.remove('seta-baixo')
            seta[0].classList.add('seta-cima')
        }
        else{
            drop[0].style.display = 'none';
            seta[0].classList.remove('seta-cima')
            seta[0].classList.add('seta-baixo')
        }
    }
    else{
        if(drop[1].style.display == 'none'){
            drop[1].style.display = 'block';            
            seta[1].classList.remove('seta-baixo')
            seta[1].classList.add('seta-cima')       
        }
        else{
            drop[1].style.display = 'none';
            seta[1].classList.remove('seta-cima')
            seta[1].classList.add('seta-baixo')
        }
    }
}

function menuMobileOpen(){
    let containerMenu = document.getElementById('container-menu-mobile');

    if(menu.classList.contains('menu-hamb')){
        //Mudar o icon
        menu.classList.remove('menu-hamb');
        menu.classList.add('menu-close');

        //Abrir o menu
        containerMenu.style.display = 'block';
    }
    else{
        //Mudar o icon
        menu.classList.remove('menu-close');        
        menu.classList.add('menu-hamb');

        //Fechar o menu
        containerMenu.style.display = 'none';
    }
}

seta[0].addEventListener('click', dropdown);
seta[1].addEventListener('click', dropdown);

menu.addEventListener('click', menuMobileOpen);