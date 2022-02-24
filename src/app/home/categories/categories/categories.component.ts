import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppelOffre } from 'src/app/models/appelOffre';

import { Speciality } from 'src/app/models/Speciality';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Name: string;
  AppelOffre:AppelOffre;
  categories:any;
  formCategory: FormGroup;
  cvService: any;
  cv: any;
  

  constructor(private formBuilder: FormBuilder,private  categoryService: CategoryService , private activateRouter:ActivatedRoute) { }
  public category:Speciality[]=[];
  Category:String;
    ngOnInit(){
      this.formCategory = this.formBuilder.group({
        id:[''],
        categoryName: ['', [Validators.required]],
        NumberOfCvByCategory: ['', [Validators.required]],

        
      });
      this.getAll();

      this.category=[
      {
        "ID":0,
        "categoryName":".Net",
        "NumberOfCvByCategory":93
      },
      {
        "ID":1,
        "categoryName":"Business Analyst",
        "NumberOfCvByCategory":16
      },
      {
        "ID":2,
        "categoryName":"CE & Experts",
        "NumberOfCvByCategory":2
      },
      {
        "ID":3,
        "categoryName":"Développeur backend",
        "NumberOfCvByCategory":11
      },
      {
        "ID":4,
        "categoryName":"Développeur Frontend",
        "NumberOfCvByCategory":27
      },
      {
        "ID":5,
        "categoryName":"Développeur PHP",
        "NumberOfCvByCategory":7
      },
      {
        "ID":6,
        "categoryName":"DP & CP",
        "NumberOfCvByCategory":27
      },
      {
        "ID":7,
        "categoryName":"Full stack",
        "NumberOfCvByCategory":7
      },
      {
        "ID":8,
        "categoryName":"DP & CP",
        "NumberOfCvByCategory":28
      },
      {
        "ID":9,
        "categoryName":"Java",
        "NumberOfCvByCategory":5
      },
      {
        "ID":10,
        "categoryName":"Technicien Infra",
        "NumberOfCvByCategory":45
      },
      {
        "ID":11,
        "categoryName":"Technicien Infra",
        "NumberOfCvByCategory":38
      },
      {
        "ID":12,
        "categoryName":"Testeur Software",
        "NumberOfCvByCategory":11
      },
      {
        "ID":13,
        "categoryName":"web designer",
        "NumberOfCvByCategory":8
      }


      




      ];
    }
    
    getAll() {
      this.categoryService.getCategory().subscribe(res => {
        this.categories = res;
        console.log("🚀 ~ file: categories.component.ts ~ line 107 ~ CategoriesComponent ~ this.categoryService.getCategory ~ this.categories", this.categories)
         
        
   
      });
      
     }
     Search(){
       if (this.Category != ''){
         this.categories=this.categories.filter(res=>{
           return res.Category.toLocaleLowerCase().match(this.Category.toLocaleLowerCase());
        });
      }
       else if (this.Category==''){
          this.ngOnInit();
        }

      
    }



}
