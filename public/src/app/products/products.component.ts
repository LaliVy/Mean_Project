import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts:any;
  productToShow: any;
  constructor(private _http: HttpService,     private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    const obs = this._http.getProducts();
    obs.subscribe(data => {
      this.allProducts = data['products'];
      console.log(this.allProducts);
    })
  }

  storeProductData(product: any){
    this._http.storeProductData(product);
    /*console.log("product to show:", product);
    this.productToShow = product;*/
  }

  deleteProduct(product:any){
    this._http.deleteProduct(product).subscribe(data => {
      console.log("deleted");       
    });
    this.getAllProducts();
  }

}
