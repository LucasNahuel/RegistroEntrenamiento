import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  updateUser(user:any){

    let params = new HttpParams();

    params = params.append('id', user.id);
    params = params.append('userName', user.user);
    params = params.append('password', user.password);
    params = params.append('email', user.email);

    return this.http.post(environment.apiUrl+"updateUser", params);

  }

  getUserByName(userName:string){
    return this.http.get<boolean>(environment.apiUrl+"getUserByName/"+userName);
  }


  getIsUsernameTaken(userName: string, id){

    let params = new HttpParams()
   .set('userName', userName)
   .set('id', id);

   return this.http.get(environment.apiUrl+"isUsernameTaken", {params});

  }
}
