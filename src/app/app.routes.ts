import { Routes } from '@angular/router';
import { TodoComponent } from './todo.component/todo.component';
import { HomeComponent } from './home.component/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
];
