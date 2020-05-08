import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public is_rtl: Boolean = true;
  constructor(private HomeService: HomeService) { }
  ngOnInit(): void {
    this.HomeService.rtl_Subscription().subscribe(value=>{
      this.is_rtl=value;
    })
  };

}
