import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Service/order.service';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.css']
})
export class ViewNotificationComponent implements OnInit {


  res:any;
  constructor(private orderService:OrderService, private router: Router) { }

  ngOnInit(): void {

    this.getNotification();
  }

  getNotification(){
this.orderService.viewNotification().subscribe(
  (data) => {

    if (data) {
      console.log(data);
      this.res = data;
      



    }
  }, (data) => {
    alert(data.error.message)
  }


)

  }

}
