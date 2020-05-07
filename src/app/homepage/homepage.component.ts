import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private HomeService:HomeService) { }
  is_rtl: Boolean = false;
  Products=[];
  ngOnInit(): void {
    this.Products=this.HomeService.GetProducts();
    this.HomeService.rtl_Subscription().subscribe(value=>{this.is_rtl=value});


    $(document).ready(function(){
      $(".wish-icon i").click(function(){
        $(this).toggleClass("fa-heart fa-heart-o");
      });
    });	
  }

}
