import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CV } from "../models/cv";
@Injectable({
    providedIn: 'root'
  })

export class CvService {

    constructor(private http: HttpClient) { }
    
    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  
  
    allCv()
     {
        return this.http.get(environment.base_url + '/candidat/',this.httpHeader);
      }
    getCvByCategory(category){
      console.log("🚀 ~ file: cv.service.ts ~ line 26 ~ CvService ~ getCvByCategory ~ category", category)
      return this.http.get(environment.base_url + '/candidat/'+category+'/',this.httpHeader);
        
    
    }
 

  
  }