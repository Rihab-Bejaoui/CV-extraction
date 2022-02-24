import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ErrorComponent} from './error/error.component';
import {HomeComponent} from './home/home.component';
import {SidebarComponent} from './home/sidebar/sidebar.component';
import {HeaderComponent} from './home/header/header.component';
import {FooterComponent} from './home/footer/footer.component';
import {LayoutComponent} from './home/layout/layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule }from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';













@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HobbiesComponent,
    
   

    
    
   
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    FontAwesomeModule
   


  
    
    
    
  ],
  exports:[MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
