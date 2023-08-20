import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  count: Observable<number>;

  constructor(private store:Store<{counter:number}>){
  this.count= store.select('counter')
  }

  Increment(){
  this.store.dispatch(increment())
  }

  Decrement(){
   this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }
}
