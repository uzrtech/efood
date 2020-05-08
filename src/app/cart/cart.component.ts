import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  is_rtl: Boolean = true;
  constructor(private HomeService:HomeService) { }

  Products=[];
  ngOnInit(): void {
    this.HomeService.rtl_Subscription().subscribe(value=>{this.is_rtl=value});
    this.Products=this.HomeService.GetProducts();
  }

}
