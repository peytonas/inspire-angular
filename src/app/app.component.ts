import { Component} from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { Todo } from './store/models/todo.model';
// import { AppState } from './store/models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inspiration-angular';
  // todos$: Observable<Array<Todo>>;
  // constructor(private store: Store<AppState>) {}
  // ngOnInit(): void {
  //   this.todos$ = this.store.select((store) => store.todos);
  // }
}
