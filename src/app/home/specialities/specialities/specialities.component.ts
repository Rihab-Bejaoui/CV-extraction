import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Speciality } from 'src/app/models/Speciality';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  constructor(){}
  public category:Speciality[]=[];
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString())
  categoryName:String;
  ngOnInit(){
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
  Search(){
    if (this.categoryName != ''){
      this.category=this.category.filter(res=>{
        return res.categoryName.toLocaleLowerCase().match(this.categoryName.toLocaleLowerCase());
      });
    }
    else if (this.categoryName==''){
      this.ngOnInit();
    }

    
  }

}
