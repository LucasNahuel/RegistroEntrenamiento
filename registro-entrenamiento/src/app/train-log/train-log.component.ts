import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JWTService } from '../jwt.service';
import { TrainingLogService } from '../training-log.service';
import { DatePipe } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { JsonpClientBackend } from '@angular/common/http';
import { environment } from 'environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-train-log',
  templateUrl: './train-log.component.html',
  styleUrls: ['./train-log.component.css']
})
export class TrainLogComponent implements OnInit {


  date :string= this.FormatDate(new Date());

  dateOffset :number = 0;

  trainingArray :Array<any> = ["no training"];

  isTrainingLoading = true;

  
  
  primaryColor= environment.primaryColor;

  constructor(private JWTservice: JWTService, private trainingLogService: TrainingLogService, private datepipe: DatePipe) { }

  ngOnInit() {


    this.trainingLogService.GetTraining(this.JWTservice.getUser(), this.date).subscribe((val) => {
      
      this.isTrainingLoading = false;
      this.setTraining(val);
    });
    
  }

  setTraining(result: any){

    var jsonresult  = JSON.stringify(result);

    this.trainingArray = JSON.parse(jsonresult);

    console.log(this.trainingArray);

  }

  FormatDate(date :Date) :string{


    let formattedDate = date.getDate().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getFullYear().toString()

    return formattedDate;


  }

  ChangeDate() :void{

    this.isTrainingLoading = true;

    let newDate = new Date();

    newDate.setDate(newDate.getDate() + (this.dateOffset));

    console.log(newDate.toString());

    this.date = this.FormatDate(newDate);

    this.trainingLogService.GetTraining(this.JWTservice.getUser(), this.date).subscribe((val) => {
      this.isTrainingLoading = false;
      this.setTraining(val)}
    );
  }

  DateBack(){
    this.dateOffset = this.dateOffset -1;

    this.ChangeDate();
  }

  DateForward(){


    this.dateOffset = this.dateOffset +1;

    this.ChangeDate();
  }



  
}

interface Training{

  trainingName:string;
  exercises:Array<Exercise>;


}

interface Exercise{

  exerciseName:string;
  sets:Array<ExerciseSet>;
  

}

interface ExerciseSet{


  reps:number;
  weight:number;
  

}