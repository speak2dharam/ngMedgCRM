import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnquiriesComponent } from './components/enquiries/enquiries.component';
import { EnquiryListComponent } from './components/enquiries/enquiry-list/enquiry-list.component';
import { EnquirySingleComponent } from './components/enquiries/enquiry-single/enquiry-single.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    EnquiriesComponent,
    EnquiryListComponent,
    EnquirySingleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
