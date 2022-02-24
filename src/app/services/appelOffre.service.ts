import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { AppelOffre } from '../models/appelOffre';


@Injectable({
  providedIn: 'root'
})
export class AppelOffreService {
    constructor(private http: HttpClient) { }
  
    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }



  


  addAppelOffre(data) {
    console.log(data);


    return this.http.post(environment.base_url + '/offre/', JSON.stringify(data),this.httpHeader);
    
  }


  editAppelOffre(id,data) {
    console.log(data);


    return this.http.put(environment.base_url + '/offre/'+id+'/', JSON.stringify(data),this.httpHeader);
  }


  allAppelOffre() {


    return this.http.get(environment.base_url + '/offre/');
  }

  removeAppelOffre(id) {


    return this.http.delete(environment.base_url + '/offre/' + id+'/');
  }


  getAppelOffreById(id){

    console.log("🚀 ~ file: appelOffre.service.ts ~ line 59 ~ AppelOffreService ~ getAppelOffreById ~ environment.base_url", environment.base_url+ '/offre/' + id);
    return this.http.get(environment.base_url+ '/offre/' + id+'/',this.httpHeader);
    

  }


}
