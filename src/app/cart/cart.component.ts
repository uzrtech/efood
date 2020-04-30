import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private HomeService:HomeService) { }

  Products=[];
  ngOnInit(): void {
    this.Products=this.HomeService.GetProducts();
  }

}
