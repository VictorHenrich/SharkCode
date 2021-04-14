import Task from '../Model/Task.js';
import TaskDAO from '../Model/TaskDAO.js';

export default class ControlTarefas{
    constructor(data){
        this.data = data;
        this.dao = new TaskDAO();
    }

    adicionar(callback){
        const tarefa = new Task(
            this.data.usuarioId,this.data.descricao,
            this.data.tempoEstimado,this.data.tempoTrabalhado,
            this.data,this.status
        );
        if(this.data.check) tarefa.setCheckList(this.data.check);

        console.log(tarefa)
        
        // this.dao.add(tarefa,(resolve,reject)=>{
        //     try{
        //         if(reject)
        //             Error(
        //                 'Falha na requisição ao servidor! Acione o suporte técnico.'
        //             );

        //     callback(resolve);

        //     }catch(error){
        //         throw error.message;
        //     }
        // });
    }

    listar(callback){
        try{
            this.dao.getAll((resolve,reject)=>{
                if(reject)
                    Error(
                        'Falha na requisição ao servidor! Acione o suporte técnico.'
                    );
    
                callback(resolve);
            });
        }catch(error){
            throw error.message;
        }
    }
} 