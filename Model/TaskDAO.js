import Connection from '../Data/Connection.js';

export default class TarefasDAO{
    constructor(){
        this.data = new Connection();
    }

    add(tarefa,callback){
        this.data
            .db('POST','task',tarefa)
            .then(resolve => callback(resolve,null))
            .catch(reject => callback(null,reject));
    }

    getAll(callback){
        this.data
            .db('GET','task',null)
            .then(resolve => callback(resolve,null))
            .catch(reject => callback(null,reject));
    }


}