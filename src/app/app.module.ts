import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DreamListComponent } from './dream-list/dream-list.component';
import { DreamSubmissionComponent } from './dream-submission/dream-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    DreamListComponent,
    DreamSubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
