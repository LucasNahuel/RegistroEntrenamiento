import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { JWTService } from '../jwt.service';
import { TrainingLogService } from '../training-log.service';

@Component({
  selector: 'app-exercise-log',
  templateUrl: './exercise-log.component.html',
  styleUrls: ['./exercise-log.component.css']
})
export class ExerciseLogComponent implements OnInit {

  @Input() exerciseList;

  @Input() date:string;

  

  constructor() {

  
  }

  ngOnInit() {

    console.log(this.exerciseList);

  }

}
