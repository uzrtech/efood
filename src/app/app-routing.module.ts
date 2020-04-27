import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { CourComponent } from './cour/cour.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component: HomepageComponent},
 // {path:'', component:CourComponent},
  {path:'myaccount', component: MyaccountComponent},
  {path:'cart', component: CartComponent},
  {path:'about', component: AboutusComponent},
  {path:'products', component: ProductsComponent},
  {path:'product', component: ProductComponent},
  {path:'checkout', component: CheckoutComponent},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
