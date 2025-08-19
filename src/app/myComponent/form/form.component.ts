import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../dto/todo';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  outputs:['todoAdd'],
  standalone:true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  title!:string;
  desc!:string;
  todoAdd:EventEmitter<Todo>=new EventEmitter();
  clearFields(){
  this.title="";
  this.desc="";
}
onSubmit(){
  const todo:Todo={
    title:this.title,
    desc:this.desc,
    sno:8,
    active:true
  }
  this.todoAdd.emit(todo);
  this.clearFields();
}

}
