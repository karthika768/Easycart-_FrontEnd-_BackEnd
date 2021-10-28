import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { OrderItemsComponent } from './Components/order-items/order-items.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { ViewNotificationComponent } from './Components/view-notification/view-notification.component';

const routes: Routes = [

  {path:"login", component: LoginComponent},
  { path:'', redirectTo:'/login', pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"orderList", component:OrderListComponent},
  {path:"allOrder", component:AllOrdersComponent},
  {path:"orderItem", component:OrderItemsComponent},
  {path:"viewNotification", component:ViewNotificationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
