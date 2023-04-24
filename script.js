const novaTerefa = document.querySelector('#tarefa')
const buttonAdd = document.querySelector('.add')
const tarefas = document.querySelector('section')
let buttonsApagar = document.querySelectorAll('section button')
let tarefasList = []

buttonAdd.addEventListener('click', criarTarefa)

function criarTarefa(){
    adicionarTarefaList(novaTerefa.value)
    limparTarefas()
    adicionarTarefasTela()
    resetarInput()
    adicionarButtonsApagar()
}

function reCriatarefa(index){
    tarefasList.splice(index, 1)
    limparTarefas()
    adicionarTarefasTela()
    resetarInput()
    adicionarButtonsApagar()
}

function adicionarTarefaList(textoTarefa){
    tarefasList.unshift(textoTarefa)
}

function limparTarefas(){
    tarefas.innerHTML = ''
}

function adicionarTarefasTela(){
    tarefasList.forEach((task, index) =>{
        criarCorpoTarefa(task, index)
    })
}

function criarCorpoTarefa(novaTarefa, numTarefa){
    this.infoTarefa = novaTarefa
    const div = document.createElement('div')
    const tarefa = document.createElement('span')
    const apagar = document.createElement('button')
    const check = document.createElement('input')

    div.classList.add('tarefa'+ numTarefa)
    tarefa.innerText = this.infoTarefa
    check.type = 'checkbox'

    div.appendChild(check)
    div.appendChild(tarefa)
    div.appendChild(apagar)
    tarefas.appendChild(div)
}

function resetarInput(){
    novaTerefa.value = ''
}

function adicionarButtonsApagar(){
    buttonsApagar = document.querySelectorAll('section button')
    permitirClick()
}

function permitirClick(){
    buttonsApagar.forEach( (item, index) =>{
        item.addEventListener('click', () =>{
            apagarTarefa(index)
        })
    })  
}

function apagarTarefa(index){
    reCriatarefa(index)
}

