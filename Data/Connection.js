//npm json-server --watch data.json (Comando terminal para iniciar o serviço do json-server)

export default class Connection{
    constructor(){
        //this.URL = 'http://localhost:3000/user';
        //this.URL = 'http://localhost:3000/task';
        this.URL = 'http://localhost:3000';
    }

    db(method,url,data){
            const xhr = new XMLHttpRequest();

            const strUrl = (!url) ? this.URL : `${this.URL}/${url}`
            xhr.open(method,strUrl);
            xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8')
            xhr.send(JSON.stringify(data) || null);

            return new Promise((resolve,reject)=>{
                xhr.onreadystatechange =() =>{
                    if(xhr.readyState === 4){
                        if(xhr.status < 400)
                            resolve(JSON.parse(xhr.response));
                        else
                            reject(Error('FALHA NA REQUISIÇÂO AO SERVIDOR' + xhr.status));
                    }
                }
            });
    }
}