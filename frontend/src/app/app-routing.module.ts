import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsOfServiceComponent } from './components/user/terms-of-service/terms-of-service.component';
import { HomeComponent } from './components/user/home/home.component';
import { PrivacyPolicyComponent } from './components/user/privacy-policy/privacy-policy.component';
import { RefundReturnsComponent } from './components/user/refund-returns/refund-returns.component';
import { ShippingPloicyComponent } from './components/user/shipping-ploicy/shipping-ploicy.component';
import { CartComponent } from './components/user/cart/cart.component';
import { WishlistComponent } from './components/user/wishlist/wishlist.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { MyaccountComponent } from './components/user/myaccount/myaccount.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"my-account", component: MyaccountComponent},
  {path:"wishlist", component: WishlistComponent},
  {path:"checkout/cart", component: CartComponent},
  {path:"terms-of-service", component: TermsOfServiceComponent},
  {path:"privacy-policy", component: PrivacyPolicyComponent},
  {path:"refund-returns", component: RefundReturnsComponent},
  {path:"shipping-policy", component: ShippingPloicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
