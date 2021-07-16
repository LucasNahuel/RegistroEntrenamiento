import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateTrainingService {

  constructor(private http: HttpClient) { }

  Save(userCreatorName: string, trainingName: string, JsonArray: Array<any>): any{

    // Initialize Params Object
    let params = new HttpParams();
  
    // Begin assigning parameters
    params = params.append('userCreatorName', userCreatorName);
    params = params.append('trainingName', trainingName);
    params = params.append('JSONexerciceList', JSON.stringify(JsonArray));

    
    return this.http.post<any>(environment.apiUrl+"createTraining", params);
  
  }
}
