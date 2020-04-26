import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ViewChild, ElementRef, AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit {
  @ViewChild('selectElem') el:ElementRef;

  constructor() { }

  ngOnInit(): void {
    // $("#carousel-home .owl-carousel").on("initialized.owl.carousel", function() {
    //   setTimeout(function() {
    //     $("#carousel-home .owl-carousel .owl-item.active .owl-slide-animated").addClass("is-transitioned");
    //     $("section").show();
    //   }, 200);
    // });
  }

}
