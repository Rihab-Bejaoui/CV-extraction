import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { Speciality } from '../models/Speciality';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  getCategory(): Observable<Speciality[]> {

    return this.http.get<Speciality[]>(environment.base_url + '/specialite/',this.httpHeader);
  }
  getCategoryById(id){

    console.log("🚀 ~ file: appelOffre.service.ts ~ line 59 ~ AppelOffreService ~ getAppelOffreById ~ environment.base_url", environment.base_url+ '/offre/' + id);
    return this.http.get(environment.base_url+ '/specialite/' + id,this.httpHeader);
    

  }

}
