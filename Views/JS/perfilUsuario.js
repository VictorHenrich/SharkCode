import ControlUser  from '../../Control/ControlUser.js';
import User from '../../Model/User.js';

function init(){
    const $form = document.getElementsByClassName('form_format')[0];
    const $logout = document.getElementById('logout');

    window.addEventListener('load',event => {
        resizeWindow(document.querySelector('.container'),300);
        load($form);
    });

    window.addEventListener('resize', event => resizeWindow(document.querySelector('.container'),300));

    $form.addEventListener('submit',event => {
        event.preventDefault()
        alter($form);
    });

    $logout.addEventListener('click',logout);
}

function load(form){
    const idUsuario = parseInt(window.localStorage.getItem('userId'));
    console.log(idUsuario);
    const $inputs = form.querySelectorAll('.input_form_format > input');
    const $nameUser = document.getElementById('nomeUser');

    new ControlUser().get(idUsuario || 0,resolve =>{
        Array.prototype.forEach.call($inputs,el =>{
            for(let data in resolve)
                if(el.getAttribute('id').indexOf(data) >=0)
                    el.value = resolve[data];
        });

        $nameUser.textContent = `${resolve.nome} ${resolve.sobrenome}`
    });

    
}

function alter(form,event){
    const idUsuario = parseInt(window.localStorage.getItem('userId'));
    const $inputs = form.querySelectorAll('.input_form_format > input');
    const data = new User();
    let count = 0;
    
    for(let d in data){
        let strId = ($inputs[count]) ? $inputs[count].getAttribute('id') : '';
        data[d] = (d.indexOf(strId) >= 0) ? $inputs[count].value : null;
        count++;    
    }

    new ControlUser().alterar(data,idUsuario,(resolve)=>{
        if(!resolve)
            throw new Error('Falha ao tentar salvar registor de usuario! Acione o suporte técnico.')
        
        window.location.reload();
    })
    
}

function logout(){
    window.localStorage.removeItem('userId');
    window.location.pathname = `Views/Desings/login.html`
}

function resizeWindow(container,adicional){
    try{
        const windowheight = window.screen.availHeight;
        container.style.height = `${ windowheight + adicional}px`;
    }catch(error){
        console.log(error.message);
    }
}

init();