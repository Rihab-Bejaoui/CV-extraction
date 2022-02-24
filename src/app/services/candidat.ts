import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Candidat } from "../models/candidat";

@Injectable({
    providedIn: 'root'
  })

export class CandidatService {

    constructor(private http: HttpClient) { }
    
    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  
    getCandidatById(category,id) {
      return this.http.get(environment.base_url + '/candidat/'+category+'/'+id+'/',this.httpHeader);  

    }
    addCandidat(data){

      console.log(data)
      return this.http.post(environment.base_url + '/cand/', JSON.stringify(data),this.httpHeader);
    }

  
  }
