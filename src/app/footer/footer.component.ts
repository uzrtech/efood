import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public is_rtl: Boolean = true;
  constructor(private HomeService:HomeService) { }
  ngOnInit(): void {
    this.HomeService.rtl_Subscription().subscribe(value=>{
      this.is_rtl=value;
    })
  };
  changeLangage(lang: string) {
    this.HomeService.Change_Language(lang);
    
    
  }

}
