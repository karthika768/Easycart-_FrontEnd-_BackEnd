import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';
import { SharedService } from 'src/app/Service/shared.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  orderItemId: any
  res: any
  invoice: any;
  constructor(private shared: SharedService, private orderService: OrderService) { }

  ngOnInit(): void {

    this.orderItemId = this.shared.getdetails()
    // console.log(this.orderItemId)
    this.viewOrderItems(this.orderItemId);
  }
  // invoice= localStorage.getItem('invoiceId');
  pdf(invoiceId: any) {
    // console.log("InvoiceId" + invoiceId)
    // this.orderService.invoicepdf(invoiceId).subscribe(
    this.invoice = invoiceId;
    this.orderService.invoicepdf(this.invoice).subscribe(
      (data: Blob) => saveAs(data, "Easycart_invoice")

      //   if (data) {
      //     console.log(data);
      //     this.res = data;

      //     // localStorage.setItem('invoiceId',data.invoiceId.value);



      //   }
      // , (data) => {
      //   alert(data.error.message)
      //   console.log(data);

      // }


    )


  }


  viewOrderItems(orderItemId: any) {

    // console.log(orderItemId);
    this.orderService.viewOrderItems(this.orderItemId).subscribe(
      (data) => {

        if (data) {
          // console.log(data);
          this.res = data;
          



        }
      }, (data) => {
        alert(data.error.message)
      }


    )

  }

  delete(orderItemId: any) {
    if (confirm('Are you sure to want cancel your order?')) {

      this.orderService.deleteOrderItem(orderItemId).subscribe(() => {
        alert("Order Canceled")
        // window.location.reload()
      })
    }


  }


}
