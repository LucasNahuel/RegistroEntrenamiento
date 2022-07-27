import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RatingTrainingDialogComponent } from 'app/dialogs/rating-training-dialog/rating-training-dialog.component';
import { JWTService } from 'app/jwt.service';
import { environment } from 'environments/environment';
import { Exercice } from '../dialogs/create-exercice/create-exercice.component';
import { TrainingLogService } from '../training-log.service';

@Component({
  selector: 'app-details-training',
  templateUrl: './details-training.component.html',
  styleUrls: ['./details-training.component.css']
})
export class DetailsTrainingComponent implements OnInit {

  
  primaryColor= environment.primaryColor;

  comments: Array<any> = [];

  commentsPage = 0;

  training;

  days = new Array<any>(7);

  userRating;

  constructor(private route: ActivatedRoute, private trainingService : TrainingLogService, private JWTservice: JWTService,  private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.paramMap.get('id'));

    this.GetTraining(this.route.snapshot.paramMap.get('id'));

  }


  GetTraining(id){


    this.trainingService.GetTrainingsById(id).subscribe(val => this.LoadTraining(val));

  }

  LoadTraining(training:any){

    this.training = training;
    console.log(this.training);

    let days = new Array<any>(7);


    days.forEach(element => {
      element = new Array<Exercises>();
    });
  
    if(training != null){

        for( let j = 0; j < training.exercises.length; j++){

          for( let k = 0; k < training.exercises[j].sets.length; k++){


            let dayIndex;

            switch (training.exercises[j].sets[k].dayName) {
              case 'monday':
                
                dayIndex = 1

                break;

              case 'tuesday':
                
                dayIndex = 2

                break;

              case 'wednesday':
                
                dayIndex = 3

                break;

                case 'thursday':
                
                  dayIndex = 4
  
                  break;

                  case 'friday':
                
                dayIndex = 5

                break;

                case 'saturday':
                
                dayIndex = 6

                break;

                case 'sunday':
                
                dayIndex = 7

                break;
            
              default:
                break;
            }

            let included = false;

            if(days[dayIndex] != null){

              for( let n = 0; n < days[dayIndex].length; n++){


                if( days[dayIndex][n].exerciseName == training.exercises[j].exerciseName){

                  days[dayIndex][n].sets.push(training.exercises[j].sets[k]);
  
                  included = true;
  
                }

              }
            }

            if(!included){

              let e: Exercises = new Exercises();

              e.exerciseName = training.exercises[j].exerciseName;

              e.sets = new Array;

              e.sets.push(training.exercises[j].sets[k]);



              if(days[dayIndex] == null){
                days[dayIndex] = new Array<Exercises>();

              }
              


              days[dayIndex].push(e);

            }

          

          }

        }



    }

    this.days = days;

    console.log(days);


    //load the comments

    this.loadComments(null);

  }

  GetDayArray(day: number){

    return this.days[day];

  }

  SaveTraining(){

    console.log(this.training);

    this.trainingService.SaveTraining(this.route.snapshot.paramMap.get('id'), this.JWTservice.getUser()).subscribe(val => this.showSnackBar(val),
    err => {
      this.showSnackBar(err.error)
    });


  }

  showSnackBar(message: any){

    let snackBarRef = this._snackBar.open(message.message);

    snackBarRef.afterDismissed().subscribe(() =>{
      console.log('the snackbar dismissed');
    });

    snackBarRef._dismissAfter(3000);

    snackBarRef._open();


    
  }

  rateTraining(){

    this.trainingService.GetRatingByUserAndTraining(this.JWTservice.getUser(), this.route.snapshot.paramMap.get('id')).subscribe(val => this.setUserRating(val));

  }

  setUserRating(val){
    this.userRating = val;

    if(!this.userRating){
      this.userRating = { trainingId: this.route.snapshot.paramMap.get('id') } ;
    }else{
      this.userRating.trainingId = this.route.snapshot.paramMap.get('id');
    }

    this.openRatingDialog();
  }


  openRatingDialog(){
    let rateTrainingDialog = this.dialog.open(
      RatingTrainingDialogComponent , {
        data: this.userRating
      }
    );
  }
  
  loadComments(ev){

    this.trainingService.GetRatings(this.route.snapshot.paramMap.get('id'), this.commentsPage).subscribe(val => this.addComments(val));

    console.log('called');

    this.commentsPage++;

  }

  addComments(comments){
    this.comments = this.comments.concat(comments);
    console.log(this.comments);
  }


}


export class Exercises{
  exerciseName : String;
  sets: any[];
}
