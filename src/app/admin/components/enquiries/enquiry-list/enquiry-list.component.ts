import { Component,OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.scss']
})
export class EnquiryListComponent implements OnInit {
  public AllEnq:any=[];

  constructor(private enqSrv:EnquiryService){}

  ngOnInit(): void {
    this.bindEnquiries();
  }
  selectEnquiry(enquiry: any): void {
    this.enqSrv.setSelectedEnquiry(enquiry);
  }
  bindEnquiries(){
    this.enqSrv.getAllEnquiry().subscribe(
      (response) => {
        this.AllEnq=response
        //console.log(this.AllEnq)
      },
      (error) => {
        console.error('Error sending data:', error);
        // Handle error here
      }
    );
  }
}
