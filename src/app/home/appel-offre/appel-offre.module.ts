import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAppelOffreComponent } from './list-appel-offre/list-appel-offre.component';
import { AppelOffreRoutingModule } from './appel-offre-routing.module';
import { AddAppelOffreComponent } from './add-appel-offre/add-appel-offre.component';
import { EditAppelOffreComponent } from './edit-appel-offre/edit-appel-offre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {NgxPaginationModule} from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CandidatOffreComponent } from './candidat-offre/candidat-offre.component';
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
  declarations: [ ListAppelOffreComponent, AddAppelOffreComponent, EditAppelOffreComponent,CandidatOffreComponent],
  imports: [
    CommonModule,
    AppelOffreRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    FormsModule,
    NgxPaginationModule,
    FontAwesomeModule,
    FlexLayoutModule,
  
   
   
    
  ]
})
export class AppelOffreModule { }
