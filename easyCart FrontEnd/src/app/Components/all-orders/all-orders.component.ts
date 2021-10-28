import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Service/order.service';
import { SharedService } from 'src/app/Service/shared.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
 res:any;
 orderid:any;
 orderItemid:any;
 totalPrice:any;
 orderItems:any

  constructor(private shared:SharedService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {

    this.viewOrders();
  }

  viewOrders(){

    this.orderService.allOrders().subscribe(
      (data) => {

        if (data) {
          // console.log(data);
          this.res = (data);
          // this.orderid = JSON.stringify(data.orderId);
          // this.totalPrice = JSON.stringify(data.totalPrice);
          // this.orderItems = JSON.stringify(data.orderItems);
          // console.log(JSON.stringify(data.orderItems))
          localStorage.setItem('orderItemId', data.orderItems.orderItemId)

        }
      }, (data) => {
        alert(data.error.message)
      }


    )


  }
  viewOrderItem(orderItemId:any){
    
    this.router.navigate(['orderItem']);
    this.orderItemid = orderItemId;
    // console.log(this.orderItemid);
    this.shared.setdetails(this.orderItemid);



  }

}
