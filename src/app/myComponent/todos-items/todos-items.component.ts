import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../dto/todo';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-todos-items',
  imports: [NgClass],
  standalone:true,
  inputs:['todo','index'],//either i can use this or i can use @input() directly in class component,
  outputs:['todoDelete','todoDone'],
  templateUrl: './todos-items.component.html',
  styleUrl: './todos-items.component.css'
})
export class TodosItemsComponent {
  todo!:Todo;
  index!:number;
// @Output() todoDelete:EventEmitter<number>=new EventEmitter();//or we can use this
todoDelete:EventEmitter<number>=new EventEmitter();
todoDone:EventEmitter<number>=new EventEmitter();
onClick(){
  console.log(`deleted`);
  this.todoDelete.emit(this.index);
}
handleDone(){
this.todoDone.emit(this.index);
}
}
