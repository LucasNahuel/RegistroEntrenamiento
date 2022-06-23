import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JWTService } from 'app/jwt.service';
import { TrainingLogService } from 'app/training-log.service';

@Component({
  selector: 'app-rating-training-dialog',
  templateUrl: './rating-training-dialog.component.html',
  styleUrls: ['./rating-training-dialog.component.css']
})
export class RatingTrainingDialogComponent implements OnInit {


  starsColours = ['black','black','black','black','black'];

  rated = 0;

  rateTrainingForm = new FormGroup({

    trainingId: new FormControl('', [
      Validators.required,
    ]),
    rating : new FormControl('', [
      Validators.required,
    ]),
    comment: new FormControl(),

  });


  constructor(public dialogRef: MatDialogRef<RatingTrainingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private trainingService : TrainingLogService, public jwtService: JWTService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    console.log(this.data);

    this.rateTrainingForm.controls['trainingId'].patchValue(this.data.trainingId);

    if(this.data.comment){
      this.rateTrainingForm.controls['comment'].patchValue(this.data.comment);
    }

    if(this.data.rating){
      this.rate(this.data.rating);
    }

  }


  hover(starNumber: number){

    for(let i = 0 ; i < starNumber; i++){
      this.starsColours[i]="#ff4081";
    }

  }


  leave(){
    this.starsColours =  ['black', 'black','black','black','black'];

    for(let i = 0 ; i < this.rated; i++){
      this.starsColours[i]="#ff4081";
    }

    
  }


  rate(rate:number){

    this.rated = rate;

    this.leave();

    this.rateTrainingForm.controls['rating'].patchValue(rate);


  }

  submitRating(){
    this.trainingService.RateTraining(this.rateTrainingForm.controls['trainingId'].value, this.jwtService.getUser(), this.rateTrainingForm.controls['rating'].value, this.rateTrainingForm.controls['comment'].value).subscribe(val => this.showSnackBar(val));
    
  }

  showSnackBar(message: any){

    console.log("showsnackbar() called")

    let snackBarRef = this._snackBar.open(message.message);

    snackBarRef._dismissAfter(3000);

    snackBarRef._open();

    this.dialogRef.close();

  }

}
