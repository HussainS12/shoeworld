import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfrojackComponent } from './afrojack/afrojack.component';
import { AllComponent } from './all/all.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { NikeComponent } from './nike/nike.component';
import { ProductsComponent } from './products/products.component';
import { ReebokComponent } from './reebok/reebok.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'all',
        component: AllComponent,
      },
      {
        path: 'nike',
        component: NikeComponent,
      },
      {
        path: 'reebok',
        component: ReebokComponent,
      },
      {
        path: 'afrojack',
        component: AfrojackComponent,
      },
    ],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
