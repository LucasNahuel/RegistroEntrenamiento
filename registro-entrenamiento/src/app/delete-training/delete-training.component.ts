import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environments/environment';
import { JWTService } from '../jwt.service';
import { TrainingLogService } from '../training-log.service';

@Component({
  selector: 'app-delete-training',
  templateUrl: './delete-training.component.html',
  styleUrls: ['./delete-training.component.css']
})
export class DeleteTrainingComponent implements OnInit {

  trainings: Array<any> = null;

  primaryColor= environment.primaryColor;

  constructor(private trainingLogService:TrainingLogService, private jwtService: JWTService, private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.trainingLogService.GetTrainingsByUser(this.jwtService.getUser()).subscribe(val => this.setTrainings(val));
    
  }

  setTrainings(trainings:any){
    this.trainings = trainings;
    console.log(trainings);
  }

  deleteTraining(trainingId, trainingIndex:number){


    this.trainingLogService.DeleteTraining(trainingId, this.jwtService.getUser()).subscribe(val => this.showDialog(val), err => this.showDialog(err.error));


    this.trainings.splice(trainingIndex, 1);

    

    console.log(this.trainings.length);


  }


  showDialog(message){
    let snackBarRef = this._snackBar.open(message.message);

    snackBarRef.afterDismissed().subscribe(() =>{
      console.log('the snackbar dismissed');
    });

    snackBarRef._dismissAfter(3000);

    snackBarRef._open();
  }



}
