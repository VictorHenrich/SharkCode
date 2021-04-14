import Connection from '../Data/Connection.js';
import User from './User.js';

export default class UserDAO{
    constructor(){
        this.dao = new Connection();
    }

    all(){
       return this.dao.db('GET','user');
    }

    add(usuario){
        return this.dao.db('POST','user',usuario);
    }

    alter(dadosUsuario,idUsuario){
        return this.dao.db('PATCH',`user/${idUsuario}`,dadosUsuario); 
    }

    get(idUsuario){
        return this.dao .db('GET',`user/${idUsuario}`)
    }
}