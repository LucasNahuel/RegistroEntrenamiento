import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { CreateTrainingService } from '../create-training.service';
import { CreateExerciceComponent, Exercice } from '../dialogs/create-exercice/create-exercice.component';
import { JWTService } from '../jwt.service';
import { MyErrorStateMatcher } from '../login/login.component';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent implements OnInit {

  excercisesList: Array<any> = [];

  primaryColor= environment.primaryColor;

  constructor(public dialog: MatDialog, public createTrainingService: CreateTrainingService, public jwtService: JWTService, public router: Router,  private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  createTrainingForm = new FormGroup({

    title : new FormControl('', [
      Validators.required,
    ]), 

  })


  createTrainingMatcher = new MyErrorStateMatcher();

  Save():void{

    this.createTrainingService.Save(this.jwtService.getUser(), this.createTrainingForm.get('title').value, this.excercisesList).subscribe(val => this.showSnackBar(val));

  }

  AddExercice(day: string){

    let createExerciceDialog = this.dialog.open(CreateExerciceComponent, {
      data: {day:day, sets: new Array}
    })


    createExerciceDialog.afterClosed().subscribe(result => {
      result ? this.SaveResult(result) : console.log("not saved");
    });

  }

  GetDayArray(day: string) : Array<any> {
    return this.excercisesList.filter(item => item.day == day);
  }

  SaveResult(result: Array<any>){
    this.excercisesList.push(result);
    console.log(JSON.stringify(this.excercisesList));
  }

  showSnackBar(message: any){

    console.log(message.message);

    let snackBarRef = this._snackBar.open(message.message);

    snackBarRef.afterDismissed().subscribe(() =>{
      //this.router.navigate(['/trainlog']);

      console.log("done");
    });

    snackBarRef._dismissAfter(3000);

    snackBarRef._open();


    
  }
  

}


