import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './app.todos';
import { CounterComponent } from './app.counter';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: CounterComponent
    },
    {
        path: 'todos',
        title: 'Todos Page',
        component: TodosComponent
    }
];
