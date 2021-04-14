export default class User{
    constructor(...props){
        this.nome = props[0]  || "";
        this.sobrenome = props[1] || "";
        this.email = props[2]|| "";
        this.senha;
        this.tel = props[3] || "";
        this.bio = props[4] || "";
        this.id;
        this.tarefas;
    }

    generateId(){
        this.id = parseInt(Math.random() * 500);
    }

    createPassword(password){
        this.senha = password;
    }

    setTarefas(tarefas){
        if(Array.isArray(tarefas))
            this.tarefas = tarefas;
        else
            throw Error('Parametro passado é diferente do tipo de data esperado (Array)');
    }
}