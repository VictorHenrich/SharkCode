import ControlUser from '../../Control/ControlUser.js';

const api = (data)=>{
    new ControlUser()
        .logar(data,dadosUsuario =>{
            if(!dadosUsuario)
                throw new Error(
                    'Não foi possível realizar o seu login, informe o email e senha e tente novamente'
                )
            
            window.localStorage.setItem('userId',dadosUsuario.id)
            window.location.pathname = "/Views/Desings/perfil.html";
        })
}


function init(){
    const $form  = document.getElementsByClassName('form_format')[0];
    
    window.addEventListener('load',event =>{
        resizeWindow(document.querySelector('.container'));
    });

    $form.addEventListener('submit',event =>{
        event.preventDefault();
        
        const $inputs = event.currentTarget.querySelectorAll('.inputText_form_format > input');
        const data = {
            email:getValue($inputs,'email'),
            senha:getValue($inputs,'pass')
        }

        api(data);
    })
}

function getValue(components,srcName){
    const inf = Array.prototype.find.call(components, el =>{
        return el.getAttribute("id") === srcName;
    });

    return inf.value;
}

function resizeWindow(container){
    try{
        container.style.height = `${window.innerHeight}px`;
    }catch(error){
        console.log(error.message);
    }
}

init();