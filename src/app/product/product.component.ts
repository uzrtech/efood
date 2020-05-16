import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public is_rtl: Boolean = true;
constructor(private HomeService: HomeService) { }

 ngOnInit(): void {
  this.HomeService.rtl_Subscription().subscribe(value=>{
    this.is_rtl=value;
  })
  }
}
