import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermsOfServiceComponent } from './components/user/terms-of-service/terms-of-service.component';
import { RefundReturnsComponent } from './components/user/refund-returns/refund-returns.component';
import { PrivacyPolicyComponent } from './components/user/privacy-policy/privacy-policy.component';
import { MyaccountComponent } from './components/user/myaccount/myaccount.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { HomeComponent } from './components/user/home/home.component';
import { ShippingPloicyComponent } from './components/user/shipping-ploicy/shipping-ploicy.component';
import { ContactUsComponent } from './components/user/contact-us/contact-us.component';
import { FeaturesComponent } from './components/user/features/features.component';
import { WishlistComponent } from './components/user/wishlist/wishlist.component';
import { CartComponent } from './components/user/cart/cart.component';
import { MyAccountComponent } from './components/user/my-account/my-account.component';
import { ShopComponent } from './components/user/shop/shop.component';
import { CategoriesComponent } from './components/user/categories/categories.component';
import { FeaturedProductsComponent } from './components/user/featured-products/featured-products.component';
import { FlashSaleComponent } from './components/user/flash-sale/flash-sale.component';
import { CountdownModule } from 'ngx-countdown';
import { ExploreMoreComponent } from './components/user/explore-more/explore-more.component';
import { SuggestedProductsComponent } from './components/user/suggested-products/suggested-products.component';
import { NewArrivalsComponent } from './components/user/new-arrivals/new-arrivals.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsOfServiceComponent,
    RefundReturnsComponent,
    PrivacyPolicyComponent,
    MyaccountComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ShippingPloicyComponent,
    ContactUsComponent,
    FeaturesComponent,
    WishlistComponent,
    CartComponent,
    MyAccountComponent,
    ShopComponent,
    CategoriesComponent,
    FeaturedProductsComponent,
    FlashSaleComponent,
    ExploreMoreComponent,
    SuggestedProductsComponent,
    NewArrivalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
