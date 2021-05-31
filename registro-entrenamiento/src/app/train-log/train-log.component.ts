import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JWTService } from '../jwt.service';
import { TrainingLogService } from '../training-log.service';
import { DatePipe } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-train-log',
  templateUrl: './train-log.component.html',
  styleUrls: ['./train-log.component.css']
})
export class TrainLogComponent implements OnInit {

  training;

  date :string= this.FormatDate(new Date());

  dateOffset :number = 0;

  constructor(private JWTservice: JWTService, private trainingLogService: TrainingLogService, private datepipe: DatePipe) { }

  ngOnInit() {


    this.trainingLogService.GetTraining(this.JWTservice.getUser(), this.date).subscribe(val => this.setTraining(val))
    
  }

  setTraining(result: any){
    this.training = result;
    console.log(this.training);
  }

  FormatDate(date :Date) :string{
    return this.datepipe.transform(date, 'd-M-yyyy');
  }

  ChangeDate() :void{

    let newDate = new Date();

    newDate.setDate(newDate.getDate() + (this.dateOffset));

    console.log(newDate.toString());

    this.date = this.FormatDate(newDate);

    
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
