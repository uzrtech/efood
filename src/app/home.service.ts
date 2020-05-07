import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private is_rtl: Boolean;
  private rtl_subject = new Subject<Boolean>();
  Products= [
    {name:"Orange",price:'90',category:"Fruit",image:'assets/img/products/orange.jpg'},
    // {name:"Olive Oil",price:'120',category:"Grocery",image:'assets/img/products/olive-oil.jpg'},
    // {name:"Pomegranate",price:'130',category:"Fruit",image:'assets/img/products/pomegranate.jpg'},
    //{name:"Tomato",price:'80',category:"Grocery",image:'assets/img/products/tomatoes.jpg'}
];
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('ar');
   }
  rtl_Subscription(){return this.rtl_subject.asObservable();}
  Change_Language(lang: string){
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.rtl_subject.next(this.translateService.currentLang=="ar"? true : false);

  }
  GetProducts(){return this.Products;}
}


