import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  data:any;
  setdetails(datavalue:any){
    this.data=datavalue;
  }
  getdetails(){
    return this.data;
  }
}
