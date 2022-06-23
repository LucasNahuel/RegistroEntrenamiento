import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JWTService } from '../jwt.service';
import { TrainingLogService } from '../training-log.service';

@Component({
  selector: 'app-set-log',
  templateUrl: './set-log.component.html',
  styleUrls: ['./set-log.component.css']
})
export class SetLogComponent implements OnInit {

  @Input() repLog = 0;
  @Input() weightLog = 0;
  @Input() date:string;
  @Input() setId;

  exerciseSetLogForm = new FormGroup({
    

    repsLog : new FormControl('', [
      Validators.required,
    ]),

    weightLog : new FormControl('', [
      Validators.required,
    ]),

  });

  constructor(private trainingLogService:TrainingLogService, private jwtService: JWTService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    let setLogged = {
      repsLog: this.repLog,
      weightLog: this.weightLog
    }

    this.exerciseSetLogForm.setValue(setLogged);

  }


  saveSet(){


    this.trainingLogService.SaveSet(this.jwtService.getUser(), this.setId, this.date, this.exerciseSetLogForm.get("repsLog").value, this.exerciseSetLogForm.get("weightLog").value).subscribe(val => this.showSnackBar(val));

  }


  showSnackBar(message: any){

    let snackBarRef = this._snackBar.open(message.message);

    snackBarRef.afterDismissed().subscribe(() =>{
      console.log('the snackbar dismissed');
    });

    snackBarRef._dismissAfter(3000);

    snackBarRef._open();


    
  }

}
