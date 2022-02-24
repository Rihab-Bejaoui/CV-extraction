import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { SpecialitiesRoutingModule } from './specialities-routing.module';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';








@NgModule({
  declarations: [
    SpecialitiesComponent],
  imports: [
    CommonModule,
    SpecialitiesRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule
  
    

   
  ],
})
export class SpecialitiesModule { }
