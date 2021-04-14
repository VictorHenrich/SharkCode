(function(){
    const $form = document.getElementsByClassName('form_format')[0];
    $form.addEventListener('submit',event =>{
        event.preventDefault();
        listTask();
    })

    function listTask(){
        const control =  new ControlTarefa(null);
        control.listar(data =>{
            console.log(data);
        });
    }
})();