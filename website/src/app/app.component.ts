import { AppService } from './app.service';
import { Component } from '@angular/core';
import { getLocaleExtraDayPeriods } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  todos = [{name: 'test'}];
  selectedTodo;


  constructor(private app: AppService){
    this.getTodos();
    this.selectedTodo = {name: ''};
  }

  getTodos = () => {
    this.app.getAllTodos().subscribe(
      data => {
        this.todos = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  todoClicked = (todo) => {
    this.app.getTodo(todo.id).subscribe(
      data => {
        this.selectedTodo = data;
      },
      error => {
        console.log(error);
      }
    );
    }

    updateTodo = () => {
      this.app.updateTodo(this.selectedTodo).subscribe(
        data => {
          this.getTodos();
          this.selectedTodo = {name: ''};
        },
        error => {
          console.log(error);
        }
      );
    }

    createTodo = () => {
      this.app.createTodo(this.selectedTodo).subscribe(
        data => {
          this.todos.push(data);
          this.selectedTodo = {name: ''};
        },
        error => {
          console.log(error);
        }
      );
    }
    deleteTodo = () => {
      this.app.deleteTodo(this.selectedTodo.id).subscribe(
        data => {
          this.getTodos();
          this.selectedTodo = {name: ''};
        },
        error => {
          console.log(error);
        }
      );
    }

}
