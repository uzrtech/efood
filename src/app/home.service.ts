import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  Products= [
    {name:"Orange",price:'90',category:"Fruit",image:'assets/img/products/orange.jpg'},
    // {name:"Olive Oil",price:'120',category:"Grocery",image:'assets/img/products/olive-oil.jpg'},
    // {name:"Pomegranate",price:'130',category:"Fruit",image:'assets/img/products/pomegranate.jpg'},
    //{name:"Tomato",price:'80',category:"Grocery",image:'assets/img/products/tomatoes.jpg'}
];
  constructor() { }

  GetProducts(){return this.Products;}
}


