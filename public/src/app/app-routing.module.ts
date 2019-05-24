import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './create/create.component';
import { ShowProductComponent} from './show-product/show-product.component';
import { EditProductComponent} from './edit-product/edit-product.component';
import { DeleteProductComponent} from './delete-product/delete-product.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent,children: [
    { path: 'edit/:id', component: EditProductComponent },
    { path: 'show', component: ShowProductComponent }]},
  { path: 'delete', component: DeleteProductComponent },
  { path: 'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
