import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class OffreService {
      constructor(private http: HttpClient) { }
    
      httpHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

  
  
    getOffre(id){
  
      
        console.log("🚀 ~ file: offre.service.ts ~ line 22 ~ OffreService ~ getOffre ~ environment.base_url+ '/offr/' + id", environment.base_url+ '/offr/' + id)
      return this.http.get(environment.base_url+ '/offr/' + id+'/',this.httpHeader);
     
     
  
    }

  
  
  }