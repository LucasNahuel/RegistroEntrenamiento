import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';



@Component({
  selector: 'app-create-exercice',
  templateUrl: './create-exercice.component.html',
  styleUrls: ['./create-exercice.component.css']
})

export class CreateExerciceComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<CreateExerciceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exercice) 
  {

    console.log(JSON.stringify(data));
      
  }

  ngOnInit() {
  }

  public inputWeightField;
  public inputRepsField;
  @ViewChild(MatTable) table: MatTable<any>;
  
  

  public name;

  public setsArray:Sets[] = new Array;

  

  displayedColumns = ['weight', 'reps', 'actions'];
  footerColumns = ['weight', 'reps'];

  createExerciceForm = new FormGroup({
    name : new FormControl(this.data.name, [
      Validators.required,
    ]),

    addSetForm : new FormGroup({

      inputWeightField : new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      inputRepsField : new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
  
    })

  });

  

  AddSet(){


    let newSet= new Sets();

    newSet.reps = this.inputRepsField;
    newSet.weight = this.inputWeightField;
    
    this.data.sets.push(newSet);

    this.table.renderRows();

    console.log(this.data.name);

  }

  RemoveSet(set: Sets){
    
    this.data.sets = this.data.sets.filter(obj => obj !== set);
    

    this.table.renderRows();

  }

  CloseDialog(): any{

    this.data.name=this.createExerciceForm.get('name').value;

    return this.data;

  }

  ChangeName(){
    this.data.name=this.createExerciceForm.get('name').value;
  }

}

export class Sets {
  weight: number;
  reps: number;
}

export class Exercice{
  day: string;
  name: string;
  sets: Sets[] = new Array<Sets>();
}


