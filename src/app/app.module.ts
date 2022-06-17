import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { LucasHomeComponentComponent } from './lucas-home-component/lucas-home-component.component';
import { LucasTasksComponentComponent } from './lucas-tasks-component/lucas-tasks-component.component';
import { LucasTasksServiceService } from './lucas-tasks-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: LucasHomeComponentComponent },
      { path: 'tarefas', component: LucasTasksComponentComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LucasHomeComponentComponent,
    LucasTasksComponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [LucasTasksServiceService],
})
export class AppModule {}
