import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="flex flex-col justify-center items-center h-full">
      <h1 class="font-sans font-bold text-4xl">Counter App</h1>
      <div class="flex gap-7 font-sans font-semibold p-2 text-2xl mt-4">
        <button (click)="decrement()" class="hover:scale-150 transition-all duration-200">-</button>
        <h3>Count: {{ count }}</h3>
        <button (click)="increment()" class="hover:scale-150 transition-all duration-200">+</button>
      </div>
    </div>
  `,
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
