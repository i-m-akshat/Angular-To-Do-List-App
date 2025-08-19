import { Component } from '@angular/core';
import { Todo } from '../../dto/todo';
import { TodosItemsComponent } from '../todos-items/todos-items.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-todos',
  standalone:true,
  imports: [TodosItemsComponent,FormComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
todos!:Todo[]
localItem:string|null;//either string or null
constructor(){
  this.localItem=localStorage.getItem("todos");
  if(this.localItem===null){
    this.todos=[];
  }else{
    this.todos=JSON.parse(this.localItem);
  }
// this.todos=[{
//   sno:3,
//   title:'Hi',
//   desc:'Something goes here....',
// active:true,
// },{
// sno:2,
//   title:'Hi',
//   desc:'Something goes here....',
// active:true,
// },{
// sno:1,
//   title:'Hi',
//   desc:'Something goes here....',
// active:true,
// }]
}
handleDelete(index:number){
  this.todos.splice(index,1);
  localStorage.setItem("todos",JSON.stringify(this.todos));
}
handleDone(index:number){
  this.todos[index].active=false;
  console.log(this.todos[index].active);
    localStorage.setItem("todos",JSON.stringify(this.todos));
}
handleAdd(todo:Todo){
  this.todos.push(todo);
  console.log(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
}
}
