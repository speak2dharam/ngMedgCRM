import { Component,OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-enquiry-single',
  templateUrl: './enquiry-single.component.html',
  styleUrls: ['./enquiry-single.component.scss']
})
export class EnquirySingleComponent implements OnInit {
  selectedEnquiry: any;
  public SingleEnq:any=[];
  constructor(private enqSrv: EnquiryService) {}

  ngOnInit(): void {
    this.enqSrv.selectedEnquiry$.subscribe(enquiry => {
      this.selectedEnquiry = enquiry;
      // console.log("Select enq: "+this.selectedEnquiry)
      this.bindEnquiry(this.selectedEnquiry);
    });
  }
  bindEnquiry(enqID:number){
    if(enqID!){
      this.enqSrv.getEnquiryAPI(enqID).subscribe(
        (response) => {
          this.SingleEnq=response
          // console.log(this.SingleEnq)
        },
        (error) => {
          console.error('Error sending data:', error);
          // Handle error here
        }
      );
    }
    else{
      //alert("null")
    }
  }
}
