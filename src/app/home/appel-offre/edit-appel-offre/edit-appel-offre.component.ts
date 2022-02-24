import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppelOffreService } from 'src/app/services/appelOffre.service';

@Component({
  selector: 'app-edit-appel-offre',
  templateUrl: './edit-appel-offre.component.html',
  styleUrls: ['./edit-appel-offre.component.css']
})
export class EditAppelOffreComponent implements OnInit {

  formAppelOffre: FormGroup;
  id:number;
  appelOffre:any;
 
  constructor(private formbuilder: FormBuilder, private router: Router, private appelOffreService: AppelOffreService,private activateRouter:ActivatedRoute){}
  ngOnInit():void{
    this.formAppelOffre = this.formbuilder.group({
      id:[''],
      Name: ['', [Validators.required]],
      StartDate: ['', [Validators.required]],
      EndDate: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      
    });
    this.id = this.activateRouter.snapshot.params['id'];
    this.appelOffreService.getAppelOffreById(this.id).subscribe(res =>
       {this.appelOffre=res;
       console.log("🚀 ~ file: edit-appel-offre.component.ts ~ line 30 ~ EditAppelOffreComponent ~ ngOnInit ~ appelOffre", this.appelOffre);
       this.formAppelOffre.get('Name').setValue(this.appelOffre.Name);
       this.formAppelOffre.get('StartDate').setValue(this.appelOffre.StartDate);
       this.formAppelOffre.get('EndDate').setValue(this.appelOffre.EndDate);
       this.formAppelOffre.get('Description').setValue(this.appelOffre.Description);
       this.formAppelOffre.get('id').setValue(this.appelOffre.id);
       console.log("🚀 ~ file: edit-appel-offre.component.ts ~ line 36 ~ EditAppelOffreComponent ~ ngOnInit ~ formAppelOffre", this.formAppelOffre)

         

       });



     

      
   
   

  }

  ResetAppelOffre(){
    this.formAppelOffre.get('Name').setValue("");
    this.formAppelOffre.get('StartDate').setValue("");
    this.formAppelOffre.get('EndDate').setValue("");
    this.formAppelOffre.get('Description').setValue("");

  }
  editAppelOffre() {

    console.log(this.formAppelOffre.value);

    if (this.formAppelOffre.invalid) {

      return;
    }

    console.log(this.id);
    console.log(this.formAppelOffre.value);

    const formaData = new FormData();

    formaData.append('Name', this.formAppelOffre.get('Name').value);
    formaData.append('StartDate', this.formAppelOffre.get('StartDate').value);
    formaData.append('EndDate', this.formAppelOffre.get('EndDate').value);
    formaData.append('Description', this.formAppelOffre.get('Description').value);
    

  
    this.appelOffreService.editAppelOffre(this.id,this.formAppelOffre.value).subscribe(res => {


      console.log(res);

    });
    this.router.navigate(['/appeloffre'])

  
  } 
  Retour(){
    this.router.navigate(['/appeloffre']);
  }
}
