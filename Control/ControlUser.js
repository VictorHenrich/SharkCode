import User from '../Model/User.js';
import UserDAO from '../Model/UserDAO.js';

export default class ControlUser{
    constructor(){
        this.dao = new UserDAO();
    }

    listar(callback){
        try{
            this.dao
                .all()
                .then(resolve => callback(resolve))
                .catch(reject =>{
                    throw new Error(
                        `Falha na requisição com o servidor! (${reject})`
                    );
                });

        }catch(error){
            console.error(error.message);
        }
    }

    adicionar({nome,sobrenome,email,senha},callback){
        try{
            const usuario = new User(nome,sobrenome,email);
            usuario.createPassword(senha);
            usuario.generateId();
            this.dao
                .add(usuario)
                .then(resolve => callback(resolve))
                .catch(reject =>{
                    throw new Error(`Falha na requisição com o servidor! (${reject})`)
                });
        }catch(error){
            console.error(error.message);
        }
    }

    alterar(usuario,idUsuario,callback){
        try{
            this.dao
            .alter(usuario,idUsuario)
            .then(resolve => callback(resolve))
            .catch(reject => {
                throw new Error(
                    `Falha na requisição com o servidor! (${reject})`
                );
            });

        }catch(error){
            console.error(error.message);
        }
    }

    logar({email,senha},callback){
        try{
            this.dao
            .all()
            .then(resolve =>{
                const data = resolve.find(el =>{
                    return el.senha === senha && el.email === email
                })
                callback(data);
            })
            .catch(reject =>{
                throw new Error(
                    `Falha na requisição com o servidor! (${reject})`
                );
            });

        }catch(error){
            console.error(error.message)
        }
    }


    get(id,callback){
        try{
            this.dao
            .get(id)
            .then(resolve => callback(resolve))
            .catch(reject =>{
                throw new Error(
                    `Falha na requisição com o servidor! (${reject})`
                );
            });
        }catch(error){
            console.error(error.message);
        }
    }
}


    
