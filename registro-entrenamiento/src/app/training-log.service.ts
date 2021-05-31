import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingLogService {

  constructor(private http: HttpClient) {

  }

  GetTraining(user: string, date: string): any{
    let params = new HttpParams();
    
    params = params.append('user', user);
    params = params.append('date', date);


    return this.http.post<any>(environment.apiUrl+"getTraining", params);
  }

  
}
