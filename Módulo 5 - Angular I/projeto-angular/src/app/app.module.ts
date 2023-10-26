import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { TaskFormReactiveComponent } from './components/task-form-reactive/task-form-reactive.component';
import { TaskFiltroComponent } from './components/task-filtro/task-filtro.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { DateGreaterThanTodayDirective } from './directives/date-greater-than-today.directive';



@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    CurrencyFormatPipe,
    TaskFormReactiveComponent,
    TaskFiltroComponent,
    TaskDetailComponent,
    DateGreaterThanTodayDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
