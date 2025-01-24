import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../store/counter.actions';


@Component({
  selector: 'app-counter-controls',
  standalone: false,
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
   this.store.dispatch(increment({value: 2}));
  }

  decrement() {
   this.store.dispatch(decrement({value: 1}));
  }
}
