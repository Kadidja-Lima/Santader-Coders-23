//pegar o que o usuário adicionou

const button = document.getElementById('button-add')
const input = document.getElementById('task')
const listComplete  = document.getElementById('list-task')
const buttonSearch = document.getElementById('button-search');
const searchInput = document.getElementById('search');



let listTask = []

//função para adicionar a tarefa

function addTask(){
    listTask.push(input.value)
    
    input.value = ''; //limprar o input

    showList()

}

//listar as tarefas

function showList(){

    let newList = ''

    listTask.forEach((task, index) => {

        newList = newList + `
            
            <p>${task} <i class="fa-solid fa-trash-can" onclick = "deleteList(${index})"></i><span><i class="fa-solid fa-pen-to-square" onclick = "search(${index})"></i></span></p>
            
            `
    })
    
    listComplete.innerHTML = newList
    
}

//deletar tarefa

function deleteList(index){
    listTask.splice(index,1)

    showList()
}


//editar tarefa

function search(index){

    const editedTask = prompt('Editar tarefa:', listTask[index]);

    if (editedTask !== null && editedTask.trim() !== '') {
        listTask[index] = editedTask;
        showList();
    }
   
}

//pesquisar tarefa
function searchTask() {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        showList(); // Mostrar todas as tarefas quando o campo de pesquisa está vazio
        return;
    }

    const filteredTasks = listTask.filter(task => task.toLowerCase().includes(searchTerm));

    showSearchResults(filteredTasks);
}

function showSearchResults(searchResults) {
    let newSearchList = '';

    searchResults.forEach((task, index) => {
        newSearchList += `
            <p>
                ${task}
                <i class="fa-solid fa-trash-can" onclick="deleteList(${listTask.indexOf(task)})"></i>
                <span>
                    <i class="fa-solid fa-pen-to-square" onclick="search(${listTask.indexOf(task)})"></i>
                </span>
            </p>
        `;
    });

    listComplete.innerHTML = newSearchList;
}

button.addEventListener('click', addTask)
buttonSearch.addEventListener('click', searchTask);

