import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  categories:any;

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.categoryService.getCategory().subscribe(res => {
      this.categories = res;
      console.log("🚀 ~ file: categories.component.ts ~ line 107 ~ CategoriesComponent ~ this.categoryService.getCategory ~ this.categories", this.categories)
       
      
 
    });
    
   }

}
