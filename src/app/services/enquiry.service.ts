import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  private selectedEnquirySubject = new BehaviorSubject<any>(null);
  selectedEnquiry$ = this.selectedEnquirySubject.asObservable();

  constructor(private http:HttpClient,private baseapi:ApiurlService) { }
  baseserverurl=this.baseapi.getApiBaseUrl();

  setSelectedEnquiry(enquiry: any): void {
    this.selectedEnquirySubject.next(enquiry);
  }
  
  addenquiry(enq:any){
    return this.http.post(this.baseserverurl+"enquiry/Addenquiry",enq);
  }
  getEnquiryAPI(enqID: number) {
    const apiUrl = this.baseserverurl+`enquiry/getEnquiry?passEnqID=${enqID}`;
    return this.http.get(apiUrl);
  }
  updateEnquiryAPI(enqID: number,enq:any) {
    const apiUrl = this.baseserverurl+`enquiry/updateEnquiry?passEnqID=${enqID}`;
    return this.http.post(apiUrl,enq);
  }
  getAllEnquiry(){
    return this.http.get(this.baseserverurl+"enquiry/getAllEnquiry");
  }
  getCurrentEnquiry(){
    return this.http.get(this.baseserverurl+"enquiry/getCurrentEnquiry");
  }
}
