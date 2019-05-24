import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  selectedProduct:any;
  constructor(private _http: HttpService,     private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      // get the product to edit.
      this.selectedProduct = this._http.getSelectedProduct();
      console.log("selectedAuthor:", this.selectedProduct);
    });
  }

}
