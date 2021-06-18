import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosComponent } from './components/todos/todos.component';
// import { TodoReducer } from './store/reducers/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    // StoreModule.forRoot({
      // todo: TodoReducer,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
