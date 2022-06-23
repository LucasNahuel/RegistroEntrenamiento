import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { TrainingLogService } from '../training-log.service';

@Component({
  selector: 'app-search-training',
  templateUrl: './search-training.component.html',
  styleUrls: ['./search-training.component.css']
})
export class SearchTrainingComponent implements OnInit {

  searchTerm = new Subject<string>();

  lastSearch: string = "";

  currentPage = 0;

  results$: Observable<any> = this.searchTerm.pipe(
    switchMap(searchTerm => this.trainingService.GetTrainingsByName(searchTerm, this.currentPage))
  );

  constructor(private trainingService : TrainingLogService, public router: Router) { }

  ngOnInit(): void {
  }

  onTextChange(changedText: string) {
    this.searchTerm.next(changedText);

    this.lastSearch = changedText;

    console.log(this.results$);
  }

  search(id: number){
    console.log(id);

    this.router.navigate(["/training-details", id]);
  }
  
  onScrollDown(ev) {
    console.log("scrolled down!!", ev);

    this.currentPage = this.currentPage+1;

    console.log(this.lastSearch);

    this.searchTerm.next(this.lastSearch);

  }

}
