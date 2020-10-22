import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http:HttpClient) { }
  userAdded = new Subject();
  createUser(obj){
  return this.http.post('http://localhost:5555/products', obj);
  }

  getLatestUsers(){
    return this.http.get("http://localhost:5555/products");
  }

  informChild(){
    this.userAdded.next();
  }

  deleteUser(product){
    return this.http.delete("http://localhost:5555/products/"+ product.id)
  }

}
