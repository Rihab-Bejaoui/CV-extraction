import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppelOffreService } from 'src/app/services/appelOffre.service';
import {ActivatedRoute} from '@angular/router'
import { AppelOffre } from 'src/app/models/appelOffre';

@Component({
  selector: 'app-add-appel-offre',
  templateUrl: './add-appel-offre.component.html',
  styleUrls: ['./add-appel-offre.component.css']
})
export class AddAppelOffreComponent implements OnInit {
  formAppelOffre: FormGroup;
  appelOffre:any;
  s: string;
  categories=[]
  constructor(private formbuilder: FormBuilder, private router: Router ,private appelOffreService: AppelOffreService){}
  ngOnInit(){
    this.formAppelOffre = this.formbuilder.group({
      Name: ['', [Validators.required]],
      StartDate: ['', [Validators.required]],
      EndDate: ['', [Validators.required]],
      Description: ['']
    
    });
    this.addAppelOffre();
    this.categories=[{'ID':0,'name':'Valider'},{'ID':1,'name':'Annuler'},{'ID':2,'name':'Retour'}];
  

  }
  dateChanged(paramDate):String{
    var s:String;
    var d = new Date(paramDate),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    if (month.length < 2)
    month = '0' + month;
    if (day.length < 2)
    day = '0' + day;
    s=[year,month,day].join('-')
    return s;

  }
  Retour(){
    this.router.navigate(["/appeloffre"]);
  }
  ResetAppelOffre(){
    this.formAppelOffre.get('Name').setValue("");
    this.formAppelOffre.get('StartDate').setValue("");
    this.formAppelOffre.get('EndDate').setValue("");
    this.formAppelOffre.get('Description').setValue("");

  }
  
  addAppelOffre() {

    console.log(this.formAppelOffre.value);

    if (this.formAppelOffre.invalid) {

      return;
    }  
    console.log(this.dateChanged(this.formAppelOffre.get('EndDate').value));
    console.log(this.dateChanged(this.formAppelOffre.get('StartDate').value));

    this.formAppelOffre.get('StartDate').setValue(this.dateChanged(this.formAppelOffre.get('StartDate').value));
    this.formAppelOffre.get('EndDate').setValue(this.dateChanged(this.formAppelOffre.get('EndDate').value));
    
    

    this.appelOffreService.addAppelOffre(this.formAppelOffre.value).subscribe(res => {

      console.log("le resultat de POST est : ",res);
      this.router.navigate(['/appeloffre']);
    });

    }
    getAll() {
      this.appelOffreService.allAppelOffre().subscribe(res => {
     
           this.appelOffre = res;
           
          
     
         });
        
       }
  
   
      

  }
 

  
