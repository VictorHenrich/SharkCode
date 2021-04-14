export default class Task{
    constructor(idUsuario,...data){
        this.idUsuario =idUsuario;
        this.nome = data[0];
        this.descricao = data[1];
        this.tempEstimado = data[2];
        this.tempTrabalhado = data[3];
        this.dataEntrega = data[4];
        this.checkList;
        this.id;
        this.status = data[5];
    }

    setCheckList(arrCheck){
        if(Array.isArray(arrCheck))
            this.checkList = arrCheck;
        else
            throw Error('Parametro é diferente do esperado (Array)');
    }

    generateId(){
        this.id = parseInt(Math.random * 1000);
    }
}