import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private HomeService:HomeService) { }

  Products=[];
  ngOnInit(): void {
    this.Products=this.HomeService.GetProducts();
  }

}
