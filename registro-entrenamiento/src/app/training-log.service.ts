import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

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


    return this.http.get<any>(environment.apiUrl+"getTraining", {params});
  }




  SaveSet(user:string, setFk:number, date:string, reps:number, weight:number): any{

    let params = new HttpParams();

    params = params.append('user', user);
    params = params.append('setFk', setFk.toString());
    params = params.append('date', date);
    params = params.append('reps', reps.toString());
    params = params.append('weight', weight.toString());



    return this.http.post<any>(environment.apiUrl+"saveSet", params);
  }

  GetTrainingsByUser(user:string): any{

    let params = new HttpParams();

    params = params.append('user', user);

    return this.http.get<any>(environment.apiUrl+"getTrainingsByUser", {params});

  }

  DeleteTraining(trainingId, user:string){
    let params = new HttpParams();

    params = params.append('trainingId', trainingId);
    params = params.append('user', user);

    return this.http.post<any>(environment.apiUrl+"deleteTraining", params);
  }


  GetTrainingsAndExercises(user:string): any{
    let params = new HttpParams();

    params = params.append('user',user);

    return this.http.get<any>(environment.apiUrl+"getTrainingAndExercices", {params});
  }


  GetAnalytics(user:string, exerciseId:number, dateBegin:string, dateEnd:string){

    let params = new HttpParams();

    params = params.append('user', user);
    params = params.append('exerciseId', exerciseId.toString());
    params = params.append('dateBegin', dateBegin);
    params = params.append('dateEnd', dateEnd);

    return this.http.get<any>(environment.apiUrl+"getAnalytics", {params});

  }


  GetTrainingsByName(name:string, page:number): any{

    let params = new HttpParams();

    params = params.append('name', name);
    params = params.append('page', page);

    return this.http.get<any>(environment.apiUrl+"getTrainingsByName", {params});

  }

  GetTrainingsById(id: number){

    let params = new HttpParams();

    params = params.append('id', id.toString());

    return this.http.get<any>(environment.apiUrl+"getTrainingsById", {params});

  }

  SaveTraining(id, user: string){
    let params = new HttpParams();

    params = params.append('id', id);
    params = params.append('user', user);

    return this.http.post<any>(environment.apiUrl+"setTrainingActive", params);
  }

  RateTraining(trainingFK, userName: string, rate: number, comment: string){

    let params = new HttpParams();

    params = params.append('trainingFK', trainingFK);
    params = params.append('userName', userName);
    params = params.append('rate', rate);
    params = params.append('comment', comment);

    return this.http.post<any>(environment.apiUrl+"rateTraining", params);


  }

  GetRatings(trainingFK, pageNo: number){

    let params = new HttpParams();

    params = params.append('trainingFK', trainingFK);
    params = params.append('pageNo', pageNo);

    return this.http.get<any>(environment.apiUrl+"getRatingsPage", {params});
  }

  GetRatingByUserAndTraining(userName: string, trainingFK ){

    let params = new HttpParams();

    params = params.append('userName', userName);
    params = params.append('trainingFK', trainingFK);

    return this.http.get<any>(environment.apiUrl+"getRatingByUserAndTraining", {params});

  }
  
  DeleteRating(ratingId: number){

    console.log(ratingId);

    let params = new HttpParams();

    params = params.append('ratingId', ratingId);

    return this.http.post<any>(environment.apiUrl+"deleteRating", params)
  }
}
