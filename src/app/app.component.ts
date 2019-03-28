import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  todoArray=[]

  addTodo(value){
    this.todoArray.push(value)
  }
  
  deleteItem(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
     if(todo== this.todoArray[i]){
      this.todoArray.splice(i,1)
     }
    }
   }
}
