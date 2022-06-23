import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
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

  constructor(private trainingLogService:TrainingLogService, private jwtService: JWTService) { }

  ngOnInit() {

    this.trainingLogService.GetTrainingsByUser(this.jwtService.getUser()).subscribe(val => this.setTrainings(val));
    
  }

  setTrainings(trainings:any){
    this.trainings = trainings;
    console.log(trainings);
  }

  deleteTraining(trainingId:number, trainingIndex:number){


    this.trainingLogService.DeleteTraining(trainingId, this.jwtService.getUser()).subscribe(val => console.log(val));


    this.trainings.splice(trainingIndex, 1);

    

    console.log(this.trainings.length);


  }



}
