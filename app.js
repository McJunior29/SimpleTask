// Referenciando os elementos do DOM
const taskInputMonday = document.getElementById('taskInputMonday');
const taskInputTuesday = document.getElementById('taskInputTuesday');
const taskInputWednesday = document.getElementById('taskInputWednesday');
const taskInputThursday = document.getElementById('taskInputThursday');
const taskInputFriday = document.getElementById('taskInputFriday');
const taskInputSaturday = document.getElementById('taskInputSaturday');
const taskInputSunday = document.getElementById('taskInputSunday');

const topicsInput = document.getElementById('topicsInput');
const taskListMonday = document.getElementById('taskListMonday');
const taskListTuesday = document.getElementById('taskListTuesday');
const taskListWednesday = document.getElementById('taskListWednesday');
const taskListThursday = document.getElementById('taskListThursday');
const taskListFriday = document.getElementById('taskListFriday');
const taskListSaturday = document.getElementById('taskListSaturday');
const taskListSunday = document.getElementById('taskListSunday');
const topicsList = document.getElementById('topicsList');

// Event listeners para adicionar tarefas em cada dia da semana
document.getElementById('addTaskMondayButton').addEventListener('click', function() {
    addTaskByDay('Segunda-feira', taskListMonday, taskInputMonday);
});

document.getElementById('addTaskTuesdayButton').addEventListener('click', function() {
    addTaskByDay('Terça-feira', taskListTuesday, taskInputTuesday);
});

document.getElementById('addTaskWednesdayButton').addEventListener('click', function() {
    addTaskByDay('Quarta-feira', taskListWednesday, taskInputWednesday);
});

document.getElementById('addTaskThursdayButton').addEventListener('click', function() {
    addTaskByDay('Quinta-feira', taskListThursday, taskInputThursday);
});

document.getElementById('addTaskFridayButton').addEventListener('click', function() {
    addTaskByDay('Sexta-feira', taskListFriday, taskInputFriday);
});

document.getElementById('addTaskSaturdayButton').addEventListener('click', function() {
    addTaskByDay('Sábado', taskListSaturday, taskInputSaturday);
});

document.getElementById('addTaskSundayButton').addEventListener('click', function() {
    addTaskByDay('Domingo', taskListSunday, taskInputSunday);
});

// Função para adicionar tarefa
function addTaskByDay(day, taskList, taskInput) {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item');
        taskItem.innerText = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

// Função para marcar tarefa como concluída
function completeTask(event) {
    const taskItem = event.target;
    taskItem.classList.toggle('completed');
}

// Adicionando o evento de clique a cada tarefa
taskListMonday.addEventListener('click', completeTask);
taskListTuesday.addEventListener('click', completeTask);
taskListWednesday.addEventListener('click', completeTask);
taskListThursday.addEventListener('click', completeTask);
taskListFriday.addEventListener('click', completeTask);
taskListSaturday.addEventListener('click', completeTask);
taskListSunday.addEventListener('click', completeTask);

// Função para editar tarefa
function editTask(event) {
    const taskItem = event.target;
    const newTaskText = prompt('Editar tarefa', taskItem.innerText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.innerText = newTaskText.trim();
    }
}

// Função para excluir tarefa
function deleteTask(event) {
    const taskItem = event.target;
    taskItem.parentNode.removeChild(taskItem);
}

// Adicionando o evento de duplo clique a cada tarefa para edição
taskListMonday.addEventListener('dblclick', editTask);
taskListTuesday.addEventListener('dblclick', editTask);
taskListWednesday.addEventListener('dblclick', editTask);
taskListThursday.addEventListener('dblclick', editTask);
taskListFriday.addEventListener('dblclick', editTask);
taskListSaturday.addEventListener('dblclick', editTask);
taskListSunday.addEventListener('dblclick', editTask);

// Adicionando o evento de clique com o botão direito do mouse a cada tarefa para exclusão
taskListMonday.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    deleteTask(event);
});
taskListTuesday.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    deleteTask(event);
});
taskListWednesday.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    deleteTask(event);
});
taskListThursday.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    deleteTask(event);
});
taskListFriday.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    deleteTask(event);
});
taskListSaturday.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    deleteTask(event);
});
taskListSunday.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    deleteTask(event);
});
