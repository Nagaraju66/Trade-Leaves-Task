import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FinalData, Attributes } from './model/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 



  flag: boolean;

  constructor( private commonService:CommonService) { }

  ngOnInit(): void {
  }

  addUser(userForm){

   
let obj = userForm.value;
const object = {
  productName : obj.productName,
  attributes: 
    {
      Material: obj.Material,
      Color: obj.Color,
    Brand: obj.Brand
    } as Attributes,
  image: obj.image,
    minOrders: obj.minOrders,
    deliveryTime: obj.deliveryTime,
    location: obj.location,
    productRating: obj.productRating,
    productPrice: obj.productPrice,
    id: obj.id
        } as FinalData;
  
// obj.id = null;
this.commonService.createUser(object).subscribe((response)=>{
userForm.form.reset();
this.commonService.informChild();
})

  }

 


}
