import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { range } from 'rxjs';
import { AppelOffre } from 'src/app/models/appelOffre';
import { AppelOffreService } from 'src/app/services/appelOffre.service';
import { CvService } from 'src/app/services/cv.service';
import { OffreService } from 'src/app/services/offre.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-list-appel-offre',
  templateUrl: './list-appel-offre.component.html',
  styleUrls: ['./list-appel-offre.component.css']
})
export class ListAppelOffreComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  appelOffre:any;
  cv:any;
  AppelOffre:AppelOffre;
  offre=[];
  


  base_url;
  formAppelOffre: FormGroup;
  id: number;
  alert:boolean=false;
  Titre: String;
  Name:String;
  p:number=1;
  constructor(private formbuilder: FormBuilder,private  appelOffreService: AppelOffreService,private offreService : OffreService ,private cvService:CvService,private _router:Router,private activateRouter:ActivatedRoute) {

    
  }


  ngOnInit() {
 
    this.getAll();
    this.getOffreById(this.id);
   
    
  }

 


  getAll() {
 this.appelOffreService.allAppelOffre().subscribe(res => {

      this.appelOffre = res;
      console.log("🚀 ~ file: list-appel-offre.component.ts ~ line 51 ~ ListAppelOffreComponent ~ this.appelOffreService.allAppelOffre ~ appelOffre", this.appelOffre)
     

    });
   
  }
  getOffreById(id){
    
    this.offreService.getOffre(id).subscribe(res=>{
      
      for (let i=0;i<10;i++){
        this.offre.push((res["top 10"][i]["Names"],res['score'][i][1]))
      }
      console.log(this.offre)
     
      

    });

  }

 
  


  remove(id:number) {
    


    Swal.fire({
      title: 'Vous êtes Sur?',
      text: 'Voulez vous vraiment supprimer cette offre!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        
        this.appelOffreService.removeAppelOffre(id).subscribe(res => {

          Swal.fire(
            'Supprimé!',
            'L"offre a été supprimé avec succés.'
            
          );

          this.getAll();
        });


        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Votre fichier imaginaire est en sécurité :)',
          'error'
        );
      }
    });

  }
  Search(){
    if (this.Name!= ''){
      this.appelOffre=this.appelOffre.filter(res=>{
        return res.Name?.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
     });
   }
    else if (this.Name==''){
       this.ngOnInit();
     }

   
   

  
    
  }
  

  

}
