import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient) {
  }

  login(data): Observable<User> {


    return this.http.post<User>(environment.base_url + '/users/login', data);
  }


  addUser(data) {


    return this.http.post(environment.base_url + '/users/add', data);
  }


  editUser(data) {


    return this.http.put(environment.base_url + '/users/update', data);
  }


  allUser() {


    return this.http.get(environment.base_url + '/users/all');
  }

  removeUser(id) {


    return this.http.delete(environment.base_url + '/users/remove/' + id);
  }


  getUserById(id): Observable<User> {


    return this.http.get<User>(environment.base_url + '/users/' + id);

  }


}
