import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-complete-dialog',
  templateUrl: './registration-complete-dialog.component.html',
  styleUrls: ['./registration-complete-dialog.component.css']
})
export class RegistrationCompleteDialogComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  RedirectToLogin():void{

    this.router.navigate(["/login"]);

  }

}
