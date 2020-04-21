import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WishlistComponent } from './myaccount/wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CourComponent } from './cour/cour.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MyaccountComponent,
    CartComponent,
    AboutusComponent,
    WishlistComponent,
    CheckoutComponent,
    CourComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
