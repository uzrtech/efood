import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private HomeService:HomeService,private translateService: TranslateService) { }

  Products=[];
  ngOnInit(): void {
    this.Products=this.HomeService.GetProducts();
   
    

    
  }

}
