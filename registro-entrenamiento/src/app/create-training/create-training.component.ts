import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MyErrorStateMatcher } from '../login/login.component';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent implements OnInit {

  public title;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  createTrainingForm = new FormGroup({

    title : new FormControl('', [
      Validators.required,
    ]), 

  })


  createTrainingMatcher = new MyErrorStateMatcher();

  save():void{
  }
}
