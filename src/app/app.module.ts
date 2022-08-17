import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserlistService } from './userlist.service';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadersComponent } from './headers/headers.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { BestdealsComponent } from './bestdeals/bestdeals.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './products/products.component';
import { ReebokComponent } from './reebok/reebok.component';
import { NikeComponent } from './nike/nike.component';
import { AfrojackComponent } from './afrojack/afrojack.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { AllComponent } from './all/all.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignupComponent,
    HeadersComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    LoginComponent,
    BestdealsComponent,
    InventoryComponent,
    ProductsComponent,
    ReebokComponent,
    NikeComponent,
    AfrojackComponent,
    BestsellerComponent,
    AllComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserlistService],
  bootstrap: [AppComponent],
})
export class AppModule {}
