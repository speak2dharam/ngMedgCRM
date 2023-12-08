import { Component,OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public AllEnq:any=[];
  public AllCrntEnq:any=[];
  GetAllEnqCount=0;
  GetCurrentEnq=0;
  constructor( private enqSrv:EnquiryService){  }

  ngOnInit(): void {
    this.CountAllEnq();
    this.CountCurrentEnq();
  }
  CountCurrentEnq(){
    this.enqSrv.getCurrentEnquiry().subscribe(
      (response) => {
        this.AllCrntEnq=response
        this.GetCurrentEnq=this.AllCrntEnq.length
      },
      (error) => {
        console.error('Error sending data:', error);
        // Handle error here
      }
    );
  }
  CountAllEnq(){
    this.enqSrv.getAllEnquiry().subscribe(
      (response) => {
        this.AllEnq=response

        // console.log('Data sent successfully!', this.AllEnq);
        // console.log("EID_"+)
        this.GetAllEnqCount=this.AllEnq.length
      },
      (error) => {
        console.error('Error sending data:', error);
        // Handle error here
      }
    );
  }
}
