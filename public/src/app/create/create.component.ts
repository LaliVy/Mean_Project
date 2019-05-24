import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct = {title: "", price:"", url:""};
  errors = {};
  constructor(private _http: HttpService,     private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }


  createProduct(){
    this._http.creatProduct(this.newProduct).subscribe(data => {
      console.log(data);
      if(data['error'])
        this.errors = data['error'];
    });
    this.newProduct = {title: "", price:"", url:""};
  }

}
