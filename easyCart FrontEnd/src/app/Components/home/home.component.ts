import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Service/order.service';
import { SharedService } from 'src/app/Service/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  order: any
  orderid: any;
  count = 0;

  orderForm = this.fb.group({
    shippingAddress: ["", [Validators.required]],
    paymentType: ["", [Validators.required]]
    // category: ['', [Validators.required]],

  })


  constructor(private shared: SharedService, private fb: FormBuilder, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    // console.log(typeof this.orderForm);

  }

  postOrder() {
    this.orderForm.markAllAsTouched();
    // var token=localStorage.getItem("token")
    // console.log(this.orderForm.value);
    if (this.orderForm.valid) {
      this.order = this.orderForm.value;

      this.orderService.OrderPlace(this.order).subscribe(
        (data) => {

          if (data) {
            // console.log(data);
            // this.router.navigateByUrl("/orderList")
            // localStorage.setItem('orderId', data.orderId)

            this.orderService.notification(data.orderId, "purchased")
              .subscribe((res) => {
                this.count = this.count + 1;
                this.orderService.setNotificationCount(this.count)
                //.subscribe((data)=>{
                //  this.count=this.service.getNotificationCount();
                console.log(res)
                //})
              })
            this.router.navigateByUrl("/orderList")
            this.orderid = data.orderId;
            // console.log(this.orderid);
            this.shared.setdetails(this.orderid);

          }
        }, (data) => {
          alert(data.error.message)
        }


      )
    }

  }

  viewNotifications() {

    this.router.navigateByUrl("/viewNotification")

  }
  get f() {
    return this.orderForm.controls;
  }

  AllOrder() {

    this.router.navigateByUrl("/allOrder")

  }




}
