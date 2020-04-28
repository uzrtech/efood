import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit {

 constructor(private translateService: TranslateService) { this.translateService.setDefaultLang('en');}

  ngOnInit(): void {
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
    
 
  }
  changeLangage(lang: string) {
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }

}
