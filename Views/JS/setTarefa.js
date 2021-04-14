import ControlTarefa from '../../Control/ControlTarefa.js';

(function(){

    const stateCheck = (function(){
        let state = [];

        function addValue(newValue){
            state.push(newValue)
        }

        function removeValue(index){
            state = state.filter((el,count)=> count !== index);
        }

        return {
            state,
            addValue,
            removeValue
        };
    })();

    const $form = document.getElementsByClassName('form_format')[0];
    const $checklist = document.getElementsByClassName('checklist')[0];

    $form.addEventListener('submit',submitForm);
    $checklist.addEventListener('click',addCheckList)

    function submitForm(event){
        event.preventDefault();
        const $inputs = event.currentTarget.querySelectorAll('.input_form_format > input');
        const data = {
            nome : getValuesInputs($inputs,'nome_tarefa'),
            descricao: getValuesInputs($inputs,'descricao'),
            tempoEstimado : getValuesInputs($inputs,'tempoEstimado'),
            tempoTrabalhado: getValuesInputs($inputs,'tempoTrabalhado'),
            data: getValuesInputs($inputs,'data'),
            check: null,
            status: getValuesInputs($inputs,'status')
        };

        function addTask(data){
            const control = new ControlTarefa(data);
            control.adicionar((data)=>{
                console.log('TAREFA ADICIONADO COM SUCESSO! ',data);
            })
        }
    
        function getValuesInputs(components,nameProp){
            const $component = Array.prototype.find.call(components,el =>{
                return el.getAttribute('name').indexOf(nameProp) >= 0;
            });
    
            return ($component) ? $component.value : null;
        }

        addTask(data);
    }

    

    function addCheckList(event){
        if(event.target.nodeName === 'BUTTON'){
            const  valueCheck = event.target.nextElementSibling.value;
            const container = event.currentTarget;
            stateCheck.addValue(valueCheck);
            
            const $content = document.createElement('span');
            const $buttonAdd = document.createElement('button');
            const $input = document.createElement('input');

            $content.setAttribute('class','div_10 input_check')

            $buttonAdd.setAttribute('type','button');
            $buttonAdd.textContent = '+';

            $input.setAttribute('type','text');
            $input.setAttribute('class','input_max')

            $content.appendChild($buttonAdd);
            $content.appendChild($input);
            container.appendChild($content);

            //STYLE

            const sizeComponent = parseInt(
                window.getComputedStyle($content).height
            );

            const sizeContainer = parseInt(
                window.getComputedStyle(container).height) + sizeComponent;

            const sizeBody = parseInt(
                window.getComputedStyle(document.querySelector('.container')).height
            );

            container.style.height = `${sizeContainer}px`;
            document.querySelector('.container').style.height = `${sizeBody + sizeComponent}px`;
            container.style.overFlow = 'auto';
            console.log(sizeBody);
            console.log(stateCheck.state)
        }


        
    }
})()