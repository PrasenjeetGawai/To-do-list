import { Component } from '@angular/core';

@Component({
  selector: 'app-tudo-list',
  templateUrl: './tudo-list.component.html',
  styleUrls: ['./tudo-list.component.css']
})
export class TudoListComponent {

  addTask: string[] = [];

  newTask!: string;

  onSubmit() {

    if (this.newTask.trim()) {
      this.addTask.push(this.newTask);
      this.newTask = '';
    }

    console.log(this.newTask)
  }

  deleteTask(index: number) {
    this.addTask.splice(index, 1)
  }



}
