import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagerErrorComponent } from './pager-error/pager-error.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path:'404',component:PagerErrorComponent},
  {path:'**',component:PagerErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
