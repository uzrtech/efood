import { HomeService } from './../../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

   is_rtl : boolean = true;

  constructor(private HomeService:HomeService) { }

  Products=[];
  ngOnInit(): void {
    this.Products=this.HomeService.GetProducts();
  }
}
