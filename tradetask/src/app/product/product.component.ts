import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  flag: boolean;
  p:number = 1;
  dproducts:any;

   noi:any = [1,2,3,4];
  attributes: any[] = [];

  //for(i=0;i<=products.productRating.length-1;i++){
   // noi.push(i);
  //}
  
 
  constructor( private commonService:CommonService) { }

  ngOnInit() {
   
    this.commonService.userAdded.subscribe((res)=>{
     console.log("user added from parent component");   
     this.getLatestUsers(); 
    })

    this.getLatestUsers(); 
  }


  getLatestUsers(){
    this.commonService.getLatestUsers().subscribe((res) => { 
    
      this.dproducts=res; 
     
      this.dproducts.forEach((item, index) => {
        let num = parseInt(item.productRating) ;
        let num1 = [];
     for(let i=0;i<=num-1;i++){
     num1.push(i);
     }
     this.dproducts[index].noi=num1;
      });

      this.products = this.dproducts; 
      // this.attributes = [];
      // this.products.map(obj => {
      //   this.attributes.push(obj.attributes);
      // })

    })
  }
  

  deleteUser(product){
    this.commonService.deleteUser(product).subscribe(res => {
      this.getLatestUsers();
    })
  }



  removeCard(){
    this.flag = !this.flag;   
  }
  
  

}
