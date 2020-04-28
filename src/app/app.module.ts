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
import { TopheaderComponent } from './topheader/topheader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './homepage/slider/slider.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpClientModule, HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(http : HttpClient){
  return new TranslateHttpLoader(http);
} 
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
    TopheaderComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory ,
        deps: [HttpClient]

      }

    })
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
