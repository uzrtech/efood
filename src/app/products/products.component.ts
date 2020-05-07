import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private HomeService:HomeService) { }

  is_rtl : Boolean = true;
  ngOnInit(): void {
    this.HomeService.rtl_Subscription().subscribe(value=>{this.is_rtl=value});
  }

}
