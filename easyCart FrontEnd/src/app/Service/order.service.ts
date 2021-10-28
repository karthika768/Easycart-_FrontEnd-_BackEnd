import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../Model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiServerUrl = environment.apiBaseUrl;
  url = "http://localhost:8080/";
  count :any;

  constructor(private http: HttpClient) { }

//  order: Order | any;

  token = localStorage.getItem('token');
  tokenStr = 'Easycart' + " " + this.token;
  header = new HttpHeaders().set("Content-Type", "application/json")
    //  .set("Authorization", this.tokenStr)
    .set("Authorization", this.tokenStr);


  OrderPlace(order:Order): Observable<any> {

    return this.http.post<any>(`${this.apiServerUrl}/order/add`, order, { headers: this.header })

  }

  viewOrder(orderId:any): Observable<any> {

    return this.http.get<any>(`${this.apiServerUrl}/order/${orderId}`, { headers: this.header })

  }

  viewOrderItems(orderItemId:any): Observable<any> {

    return this.http.get<any>(`${this.apiServerUrl}/order/orderlist/${orderItemId}`, { headers: this.header })

  }

  allOrders(): Observable<any> {

    return this.http.get<any>(`${this.apiServerUrl}/order`, { headers: this.header })

  }

  deleteOrder(orderId: any): Observable<any> {
   
    return this.http.delete(`${this.apiServerUrl}/order/${orderId}`, { headers: this.header })


  }


  deleteOrderItem(orderItemId: any) :  Observable<any> {
   
    return this.http.delete(`${this.apiServerUrl}/order/orderlist/${orderItemId}`, { headers: this.header })


  }

  invoicepdf(invoiceId:any) :  Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/pdf")
    // application/pdf"
    .set("Authorization", this.tokenStr)
    .set("Content-disposition", 'attachment')
    .set("Accept", "application/pdf")
    //  Accept: `application/pdf`,
    // responseType:'blob',
    // 'Content-Type':`application/pdf`
    return this.http.get<any>(`${this.apiServerUrl}/invoice/pdf/${invoiceId}`, { headers: headers,responseType:'blob' as 'json' })
  }


  notification(orderId:any ,message:string):Observable<any>{
 
    let params = new HttpParams();
    params=params.append('orderId',orderId);
    params=params.append('message',message);
    console.log(params.toString());
   return this.http.post<any>(`${this.apiServerUrl}/seller/notification?orderId=${orderId}&message=${message}`,{}, { headers: this.header });
  }
  viewNotification():Observable<any>{
   return this.http.get<any>('http://localhost:8080/seller/notification/customer',{ headers: this.header });
 }
  setNotificationCount(count:any){
   this.count=count;
 }
 getNotificationCount(){
   return this.count;
 }
}
// function responseType<T>(arg0: string, arg1: { headers: HttpHeaders; }, responseType: any, arg3: string): Observable<any> {
//   throw new Error('Function not implemented.');
// }

