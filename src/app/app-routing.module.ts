import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectDayComponent } from './select-day/select-day.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: SelectDayComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
