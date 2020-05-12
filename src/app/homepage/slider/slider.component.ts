import { HomeService } from './../../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  constructor(private HomeService:HomeService) { }
  is_rtl: Boolean = true;
  Products=[];
  ngOnInit(): void {
    this.HomeService.rtl_Subscription().subscribe(value=>{this.is_rtl=value});
    // $("#carousel-home .owl-carousel .owl-item.active .owl-slide-animated").addClass("is-transitioned");
    // $("section").show();
    // $(document).ready(function(){
    //   $(".wish-icon i").click(function(){
    //     $(this).toggleClass("fa-heart fa-heart-o");
    //   });
    // });	
  }

}
