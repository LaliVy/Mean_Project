import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() productToShow:any;
  selectedProduct:any = {title:"", price:0, url:""};
  constructor(private _http: HttpService,     private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    // get the product to edit.
    this.selectedProduct = this._http.getSelectedProduct();
    console.log("selectedProduct:", this.selectedProduct);
  });
  }

  updateProduct(){
    this._http.editProduct(this.selectedProduct).subscribe(data => {
      console.log(data);
    });
  }
}
