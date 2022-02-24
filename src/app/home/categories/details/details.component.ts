import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as internal from 'assert';
import { CV } from 'src/app/models/cv';
import { CategoryService } from 'src/app/services/category.service';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  cv=[];
  Cv:any;
  Names:String;
  formCv:FormGroup;
  category: string;
  p:number=1;
  ch1:string;
  numberCv:number;


  constructor(private cvService:CvService , private categoryService:CategoryService,private formBuilder:FormBuilder,private activateRouter:ActivatedRoute,private route:Router) { }
  

  ngOnInit(){
    
    this.category=this.activateRouter.snapshot.paramMap.get('category');
    this.numberCv=this.activateRouter.snapshot.params['numberCv']
     
    

    
    this.getByCategory();
      
  }
  getByCategory(){
    this.cvService.getCvByCategory(this.activateRouter.snapshot.paramMap.get('category')).subscribe(res=>{
      console.log(res);
      console.log(this.numberCv );
      console.log(this.cv);
      
      for (let i=0;i< this.numberCv ;i++){
        this.cv[i]=[];
        let phone = res[i]['Phones'].replaceAll("[","").replaceAll("]","").replaceAll("'","").replaceAll(")"," ").replaceAll("("," ").split(',');
        console.log(phone);
        let email = res[i]['Emails'].replaceAll("[","").replaceAll("]","").replaceAll("'","").split(',');
        let name=res[i]['Names'].replaceAll("-","").replaceAll("ESPRIT","");

        this.cv[i].push(i+1,name,phone,email);
        console.log(this.cv[i]);

      }
      console.log(this.cv);
     

     /*
      let phone = res[1]['Phones'].replaceAll("[","").replaceAll("]","").replaceAll("'","").split(',');
      let email = res[1]['Emails'].replaceAll("[","").replaceAll("]","").replaceAll("'","").split(',');
      console.log(email)
      
      this.cv[0]=[]
      this.cv[1]=[]
      this.cv[0].push(res[0]['Names'],phone,email);
      this.cv[1].push(res[1]['Names'],phone,email);
      console.log(this.cv);
      */
      

    });
   
  }
  Search(){
    
    if (this.Names !=''){
      this.cv=this.cv.filter(res=>{
      
        return res.Names?.toLocaleLowerCase().match(this.Names.toLocaleLowerCase());
        
      });
   }
    else if (this.Names==''){
       this.ngOnInit();
     }

   
 }

}

  








