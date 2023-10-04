import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { AuthService } from './home/_service/auth.service';


//For Search Filtering
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './filter.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    
    CartComponent,
    FilterPipe,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
