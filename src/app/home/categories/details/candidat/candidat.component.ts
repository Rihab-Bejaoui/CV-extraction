import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/services/candidat';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  candidat:Candidat;
  id:number;
  NameCondidat:string;
  Emails=[];
  Phones=[];
  Skills=[];
  Diplome=[];
  Language=[];
  Interests=[];
  Universities=[];
  Postes=[];
  Companies=[];
  Degrees:string;
  category:string;
  contenu:string;

  constructor(private candidatService:CandidatService ,private activateRouter:ActivatedRoute) { }

  ngOnInit() {
    
    this.candidatService.getCandidatById(this.activateRouter.snapshot.paramMap.get('category'),this.activateRouter.snapshot.paramMap.get('id')).subscribe(res => {
     // console.log(res[0]['Names']);
     if(res[0]['Names'] !== null){
      this.NameCondidat=res[0]['Names'].replaceAll("-"," ").replaceAll('ESPRIT','');
  }
    let email=res[0]['Emails'].replaceAll("[","").replaceAll("]","").replaceAll(":","").replaceAll("'","").replaceAll(")"," ").replaceAll("("," ").split(',');
    this.Emails.push(email);
    let phone=res[0]['Phones'].replaceAll("[","").replaceAll(":","").replaceAll("]","").replaceAll("'","").replaceAll(")"," ").replaceAll("("," ").replaceAll("-"," ").split(',');
    this.Phones.push(phone);
    this.Degrees=res[0]['Degrees'];
    let diplome=res[0]['Diplomes'].replaceAll("[","").replaceAll(":","").replaceAll("]","").replaceAll("'","").replaceAll(")"," ").replaceAll("("," ").split(',');
    this.Diplome.push(diplome);
    let university=res[0]['Universities'].replaceAll("[","").replaceAll(":","").replaceAll("]","").replaceAll("'","").replaceAll(")"," ").replaceAll("("," ").split(',');
    this.Universities.push(university);
    let skill=res[0]['Skills'].replaceAll("[","").replaceAll(":","").replaceAll("]","").replaceAll("'","").replaceAll(")"," ").replaceAll("("," ").replaceAll("engineer","").replaceAll("master","").replaceAll("licence","").split(',');
    this.Skills.push(skill);
    let interets=res[0]['Interests'].replaceAll("[","").replaceAll(":","").replaceAll("]","").replaceAll("'","").replaceAll(")"," ").replaceAll("("," ").split(',');
    this.Interests.push(interets);
    let langue=res[0]['Languages'].replaceAll("[","").replaceAll(":","").replaceAll("]","").replaceAll("'","").replaceAll(")"," ").replaceAll("("," ").split(',');
    this.Language.push(langue);
    this.category=res[0]['Categories']
    let poste=res[0]['Postes'].replaceAll("[","").replaceAll(":","").replaceAll("]","").replaceAll("'","").replaceAll(")"," ").replaceAll("("," ").split(',');
    this.Postes.push(poste);
    let companie=res[0]['Entreprises'].replaceAll("[","").replaceAll(":","").replaceAll("]","").replaceAll("'","").replaceAll(")"," ").replaceAll("("," ").split(',');
    this.Companies.push(companie);
    this.contenu=res[0]['Content']
   

      
    
    
  
    
    
    
   

    });

    
  
 
   
  }
  
 
  

  getCandidatName():string{
    console.log(this.activateRouter.snapshot.paramMap.get('category'))
    console.log(this.activateRouter.snapshot.paramMap.get('id'))
    this.candidatService.getCandidatById(this.activateRouter.snapshot.paramMap.get('category'),this.activateRouter.snapshot.paramMap.get('id')).subscribe(res => {

      
      this.candidat=res[0];
      console.log(this.candidat['NameCondidat'])
    
      
      
      
     

    });
    return this.candidat['NameCondidat'];
  }

}
