import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppelOffreService } from 'src/app/services/appelOffre.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-candidat-offre',
  templateUrl: './candidat-offre.component.html',
  styleUrls: ['./candidat-offre.component.css']
})
export class CandidatOffreComponent implements OnInit {

  candidat=[];
  id:number;
  Name:String;
  NameCandidat:String;
  tname:String='';

  constructor(private offreService:OffreService,private activateRouter:ActivatedRoute,private appelOffreService:AppelOffreService) { }
  

  ngOnInit(): void {
    this.getTopTenCandidats();
    this.id=this.activateRouter.snapshot.params['id'];
    this.appelOffreService.getAppelOffreById(this.id).subscribe(res=>{
    this.Name=res['Name']
    console.log(this.Name);
   
    

    

    
    });
  
    
  }

  getTopTenCandidats(){
    this.id=this.activateRouter.snapshot.params['id'];
    this.offreService.getOffre(this.id).subscribe(res=>
      {
        
      
        
       for (let i=0;i<10;i++){
         let phone =res["top 10"][i]["Phones"].replaceAll("(","").replaceAll(")","")
         this.candidat.push([res["top 10"][i]["Names"],phone,res["top 10"][i]["Emails"],res["score"][i][1]]);
         
       }
       for(let i=0;i<this.candidat.length;i++){
        console.log(this.candidat[i][1]);
       }
       

   
       

        
       
        



        
      }
      );
      
      


    
  }
  Search(){
    console.log(this.candidat);
    if(this.NameCandidat!=""){
      

    this.candidat=this.candidat.filter( res=>{
      console.log(res);
      return res.NameCandidat?.toLocaleLowerCase().match(this.NameCandidat.toLocaleLowerCase());

    });}
    else if (this.NameCandidat==""){
      this.ngOnInit();
    }
    
  }
  

}
