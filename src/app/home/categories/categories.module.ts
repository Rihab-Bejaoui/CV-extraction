import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { FileUploadModule } from 'ng2-file-upload';
import { UploadCvComponent } from './add-candidat/upload-cv/upload-cv.component'




@NgModule({
  declarations: [
    CategoriesComponent,
    DetailsComponent,
    AddCandidatComponent,
    UploadCvComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgxPaginationModule,
    FileUploadModule 
    
    
  ]
})
export class CategoriesModule { }
