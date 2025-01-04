import { Component } from "@angular/core";


@Component({
    selector: 'app-todos',
    template: `
        <div class="w-screen h-screen flex flex-col items-center mt-10">
        <h1 class="text-2xl" >Task To Do</h1>
        @for(todo of todos; track todo.id) {
          <div class=" flex gap-2 mt-3">
            <h1>{{ todo.id }}.</h1>
            <h1>{{ todo.title }}</h1>
          </div>
          <h3 class="pl-5">{{ todo.Desc }}</h3>
        }
      </div>
    `
})
export class TodosComponent{
    todos = [
        {id:1, title: "Gym", Desc:"Go to gym"},
        {id:2, title: "Angular", Desc:"Learn Angular"},
        {id:3, title: "gg", Desc:"Go to gym"},
        {id:4, title: "JS", Desc:"Go to gym"},
        {id:5, title: "DSA", Desc:"Go to gym"},
    ]
}