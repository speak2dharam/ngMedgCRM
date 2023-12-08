import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnquiriesComponent } from './components/enquiries/enquiries.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'enquiries',component:EnquiriesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
