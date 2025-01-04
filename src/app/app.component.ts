import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg-slate-900 w-screen h-screen text-white overflow-hidden">
      <nav class="flex justify-center gap-10 p-5 text-xl">
        <a routerLink="/" routerLinkActive="active" class="hover:underline transition-all duration-200">Counter App</a>
        <a routerLink="/todos" routerLinkActive="active" class="hover:underline transition-all duration-200 ">Todos</a>
      </nav>
      <router-outlet></router-outlet>
    </div>

  `,
  imports:[RouterLink, RouterOutlet]
})
export class AppComponent {
  count = 0;

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
