import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Model/Order';
import { OrderService } from 'src/app/Service/order.service';
import { SharedService } from 'src/app/Service/shared.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  count = 0;

  orderid: any;
  totalPrice: any;
  orderItems: any;
  productName: any;
  constructor(private shared: SharedService, private orderService: OrderService, private router: Router) { }
  orderId: Order | any;
  res: any;

  ngOnInit(): void {
    this.orderid = this.shared.getdetails()

    this.viewOrderItems(this.orderId);
  }

  viewOrderItems(orderId: any) {
    //    orderId = localStorage.getItem('orderId');
    // console.log(this.orderid);
    this.orderService.viewOrder(this.orderid).subscribe(
      (data) => {

        if (data) {
          // console.log(data);
          this.res = [data];
          // this.orderid = JSON.stringify(data.orderId);
          // this.totalPrice = JSON.stringify(data.totalPrice);
          // this.orderItems = JSON.stringify(data.orderItems);
          // console.log((this.orderItems));



        }
      }, (data) => {
        alert(data.error.message)
      }


    )

  }

  delete(orderId:any){
    if(confirm('Are you sure to want cancel your order?'))
    {
      // this.orderService.notification(this.orderid,"Canceled Purchase")
      // .subscribe((res) => {
      //   this.count = this.count + 1;
      //   this.orderService.setNotificationCount(this.count)
      //   //.subscribe((data)=>{
      //   //  this.count=this.service.getNotificationCount();
      //   console.log(res)
      //   //})
      // })
     
    this.orderService.deleteOrder(orderId).subscribe(()=>{

     
      alert("Order Canceled")
     
      // window.location.reload()
    })
    }


  }

}
