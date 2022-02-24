import { Component, OnInit,ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';  
import { of } from 'rxjs';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';




@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {
  form: FormGroup;
  nom:string;
  cv:File;
  email:string;
  phone:string;
  url:string;
 
  constructor(private formbuilder: FormBuilder, private router: Router, private candidatService: CandidatService,private http:HttpClient,private cd:ChangeDetectorRef) {

  }

  ngOnInit() {

     this.form = this.formbuilder.group({
      'id':Math.floor(100000),
       'nom': [''],
       'phone': [''],
       'email': [''],
       'cv': ['']
 

     });
    // this.formCandidat = new FormGroup({
    //   id: new FormControl(19, Validators.required),
    //   nom: new FormControl(null, Validators.required),
    //   phone: new FormControl(null, Validators.required),
    //   email: new FormControl(null, Validators.required),
    //   cv: new FormControl(null, Validators.required),
    // })
   
  }

  onNomChanged(event:any){
    this.nom=event.target.value;
  }
  onPhoneChanged(event:any){
    this.phone=event.target.value;
    console.log(this.phone);
  }
  onFileChanged(event){
    console.log("on changed")
  let reader = new FileReader();
 
  if(event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    reader.readAsDataURL(file);
  
    reader.onload = () => {
      this.form.patchValue({
        cv: reader.result
      });
     this.cd.markForCheck
    };
  }
 
}
  onEmailChanged(event:any){
    this.email=event.target.value;

  }


  addCandidat() { 
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      this.router.navigate(['']);
      
  }, 10000);
  
    
    
    
    //console.log("this.formCandidat.getRawValue()")
    // const uploadData = new FormData();
    // uploadData.append('nom',this.nom);
    // uploadData.append('phone',this.phone);
    // uploadData.append('email',this.email);  
    // uploadData.append('cv',this.cv);
    // console.log(uploadData)
    
    //console.log(this.formCandidat.get['cv']);
    console.log('formCandidat'+this.form.value);
    

    if (this.form.invalid) {

      return;
    }
 
// this.formCandidat.controls['cv'].setValue()

    console.log(this.form.value);
    this.http.post<any>("http://127.0.0.1:8000/cand/",this.form.value).subscribe(
      (response) => console.log(response),
    
      (error) => console.log(error))
     
  
  }
 


  


}


