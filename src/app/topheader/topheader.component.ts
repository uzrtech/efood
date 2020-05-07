import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit {

public is_rtl: Boolean = true;
constructor(private HomeService: HomeService) { }

ngOnInit(): void {
  this.HomeService.rtl_Subscription().subscribe(value=>{
    this.is_rtl=value;
  })
  $("#carousel-home .owl-carousel .owl-item.active .owl-slide-animated").addClass("is-transitioned");
  $("section").show();
  // $("#carousel-home .owl-carousel").on("initialized.owl.carousel", function() {
  //   setTimeout(function() {
  //     $("#carousel-home .owl-carousel .owl-item.active .owl-slide-animated").addClass("is-transitioned");
  //     $("section").show();
  //   }, 200);
  // });
  $(".categories_title").on('click',function(){
    $(".categories_menu_toggle").toggle();
  })
  
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
 
  }
  changeLangage(lang: string) {
    this.HomeService.Change_Language(lang);
    
    
  }

}
