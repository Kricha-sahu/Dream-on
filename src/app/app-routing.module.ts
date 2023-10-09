import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DreamListComponent } from './dream-list/dream-list.component';
import { DreamSubmissionComponent } from './dream-submission/dream-submission.component';

const routes: Routes = [
  { path: '', redirectTo: '/dreams', pathMatch: 'full' }, // Redirect to dream list
  { path: 'dreams', component: DreamListComponent },
  { path: 'submit-dream', component: DreamSubmissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
