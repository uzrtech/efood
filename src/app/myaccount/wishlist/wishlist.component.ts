import { HomeService } from './../../home.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit,OnDestroy {

   is_rtl : Boolean = true;

  constructor(private HomeService:HomeService) { }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  Products=[];
  ngOnInit(): void {
    this.Products=this.HomeService.GetProducts();
    this.HomeService.rtl_Subscription().subscribe(value=>{
      this.is_rtl=value;
    })
  }
}
