import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  selectedProduct:any;
  constructor(private _http: HttpClient) { }

  creatProduct(newProduct){
    return this._http.post('/new', newProduct);
  }
  getProducts(){
    return this._http.get('/products');
  }
  editProduct(editproduct){
    return this._http.post('/edit', editproduct);
  }

  storeProductData(product){
    console.log('service:' , product);
    this.selectedProduct = product;
    console.log('service:' , this.selectedProduct);
  }
  getSelectedProduct(){
    return this.selectedProduct;
  }

  deleteProduct(deleteProduct){
    return this._http.post('/delete', deleteProduct);
  }
}
