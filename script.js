const novaTarefa = document.getElementById('novaTarefa');
const btnAddTarefa = document.getElementById('btnAddTarefa');
const listaTarefa = document.getElementById('listaTarefa');

btnAddTarefa.addEventListener('click', function(){
    const tarefa = novaTarefa.value;
    
    // se a tarefa for diferente de vazia ele execulta
    if(tarefa != " "){

        const li = document.createElement('li');

        li.textContent = tarefa;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "Remover";

        botaoRemover.addEventListener('click', function(){
            li.remove();
        });

        
        li.appendChild(botaoRemover);
        listaTarefa.appendChild(li);

        novaTarefa.value = "";


    }





});