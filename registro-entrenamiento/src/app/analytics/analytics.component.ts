import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JWTService } from '../jwt.service';
import { TrainingLogService } from '../training-log.service';
import { Chart, ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'; 
import { environment } from 'environments/environment';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  trainings;

  selectedTrainig = 0;

  selectedExercise = 0;

  message = "";

  public lineChartType = 'line';

  public chartOptions = {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'MMM D', // This is the default
            },
          },
        },
      ]
    }
  };



  public lineChartData= [
    { data: [] , label: 'volume' }
  ];

  
  primaryColor= environment.primaryColor;

  @ViewChild("baseChart")
    chart: BaseChartDirective;

  range = new FormGroup({
    start: new FormControl('', [
      Validators.required,
    ]),
    end: new FormControl('', [
      Validators.required,
    ]),
  });

  analyticsForm = new FormGroup({

    selectTrainingFormControl : new FormControl('', [
      Validators.required,
    ]),

    selectExerciseFormControl : new FormControl('', [
      Validators.required,
    ]),

    range : this.range,

  });

  constructor(private jwtService: JWTService, private trainingLogService: TrainingLogService) { }

  ngOnInit(): void {

    this.trainingLogService.GetTrainingsAndExercises(this.jwtService.getUser()).subscribe(val => this.loadTrainings(val));


    
  }

  loadTrainings(trainings:any){
    this.trainings = trainings;
    
    

    if(this.trainings.length == 0){
      this.message = "No active training for analize found";
    }


    console.log(this.trainings);
  }


  getAnalytics(){
    this.trainingLogService.GetAnalytics(this.jwtService.getUser(), this.selectedExercise, this.FormatDate(this.range.controls['start'].value), this.FormatDate(this.range.controls['end'].value)).subscribe(val => this.drawChart(val));
  }

  FormatDate(date :Date) :string{


    let formattedDate = date.getDate().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getFullYear().toString()

    return formattedDate;


  }

  drawChart(data:any){

    this.lineChartData[0]['data'] = new Array;

    data.forEach(element => {


      let point = {x: element.trainingLogFK.date.toString().substring(0,10), y: element.repetitionsDone*element.weightUsed };


      if(this.lineChartData[0]['data'].filter(val => val.x == point.x).length > 0){

        this.lineChartData[0]['data'][this.lineChartData[0]['data'].findIndex(x => x.x == point.x)].y += point.y;

      }else{
        this.lineChartData[0]['data'].push(point);
      }

      
      
    });

    if(this.lineChartData[0]['data'].length == 0){

      this.message = "Not logged data found";

    }else{

      this.message = "";

    }

    console.log(this.lineChartData[0]['data']);

    this.chart.update();

   


  }




}
