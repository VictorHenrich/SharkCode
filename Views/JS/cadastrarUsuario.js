import ControlUser from '../../Control/ControlUser.js';

const api = (data)=>{
    // new ControlUser()
    //     .listar((resolve)=>{
    //         console.log(resolve);
    //     })

    new ControlUser().adicionar(data,(dadosUsuario)=>{
        if(dadosUsuario)
            window.location.pathname = "/Views/Desings/login.html"
    })
}

function init(){
    document.getElementsByClassName('form_format')[0].addEventListener('submit',event=>{
        event.preventDefault();
        const informs = event.currentTarget.querySelectorAll('.inputLogin_form_format > input');
        const data = {
            nome: getValue(informs,'nome'),
            sobrenome: getValue(informs,'sobrenome'),
            email: getValue(informs,'email'),
            senha: getValue(informs,'senha')
        }
        api(data);
    
    });
}

function getValue(components,srcName){
    const inf = Array.prototype.find.call(components, el =>{
        return el.getAttribute("id") === srcName;
    });

    return inf.value;
}


init();
