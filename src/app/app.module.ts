import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AgeValidatorComponent } from './age-validator/age-validator.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { ShowHideComponent } from './show-hide/show-hide.component';
import { TablesComponent } from './tables/tables.component';
import { EngineStatusComponent } from './engine-status/engine-status.component';
import { ColorChangeDirective } from './directives/color-change.directive';
import { SearchUserdataComponent } from './search-userdata/search-userdata.component';
import { SearchPipe } from './pipes/search.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GadgetTogglerComponent } from './gadget-toggler/gadget-toggler.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { DiscountPipe } from './pipes/discount.pipe';

@NgModule({
  declarations: [
    
    
    AppComponent,


          HomeComponent,


          HeaderComponent,


          FooterComponent,
   
   
    AgeValidatorComponent,
   
   
    EvenOddComponent,
   
   
    ShowHideComponent,
   
   
    TablesComponent,
 
 
        EngineStatusComponent,
  
  
      ColorChangeDirective,
  
  
      SearchUserdataComponent,
  
  
      SearchPipe,
  
  
      ParentComponent,
   
   
    ChildComponent,
   
   
    PageNotFoundComponent,


          GadgetTogglerComponent,ProductsComponent,ProductComponent, DiscountPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
