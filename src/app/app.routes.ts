import { Routes } from '@angular/router';
import { TodosComponent } from './myComponent/todos/todos.component';
import { AboutComponent } from './myComponent/about/about.component';

export const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent }
];
