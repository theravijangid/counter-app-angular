import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg-slate-900 w-screen h-screen flex flex-col justify-center items-center text-white">
      <h1 class="font-sans font-bold text-4xl">Counter App</h1>
      <div class="flex gap-7 font-sans font-semibold p-2 text-2xl mt-4">
        <button (click)="decrement()" class="hover:scale-150 transition-all duration-200">-</button>
        <h3>Count: {{ count }}</h3>
        <button (click)="increment()" class="hover:scale-150 transition-all duration-200">+</button>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'angular-app';
  count = 0;

  increment() {
    this.count+=1;
  }

  decrement() {
    this.count-=1;
  }
}
