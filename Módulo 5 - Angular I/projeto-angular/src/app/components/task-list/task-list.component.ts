import { Component, OnInit, ElementRef, Input, Output,  EventEmitter  } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent  implements OnInit{
  columns = [
    { name: 'To Do', id: 'toDo' },
    { name: 'In Progress', id: 'trabalhando' },
    { name: 'Done', id: 'finalizado' },
  ];

  @Input() tasks: Task[] = [];
  @Output() handleTask = new EventEmitter();

  tasksFiltradas: Task[] = [];

  taskInEditMode: Task | null = null;
  editedTask: Task = new Task(); // Cópia da tarefa em edição

  ngOnInit() {
    this.tasksFiltradas = this.tasks;
  }

   // Função para entrar no modo de edição
   editTask(task: Task) {
    this.taskInEditMode = task;
    this.editedTask = { ...task }; // Crie uma cópia da tarefa em edição
  }
  // Função para salvar a tarefa editada
  saveEditedTask(task: Task) {
    // Lógica para salvar as alterações
    // Copie os valores de editedTask para a tarefa original
    task.title = this.editedTask.title;
    // Copie outros campos conforme necessário
    // Depois de salvar, você pode sair do modo de edição
    this.taskInEditMode = null;
  }

  // Função para cancelar a edição
  cancelEdit() {
    this.taskInEditMode = null;
  }


  selectedTask(task: Task) {
    this.handleTask.emit(task);
  }

  handleFiltro(filtro: string) {
    if (filtro === 'all') {
      this.tasksFiltradas = this.tasks;
      return;
    }

    this.tasksFiltradas = this.tasks.filter((item) => {
      if (item.status === filtro) {
        return item;
      }
      return;
    });
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1); // Remove a tarefa da lista
      this.tasksFiltradas = this.tasks; // Atualiza a lista filtrada
    }
  }
}

