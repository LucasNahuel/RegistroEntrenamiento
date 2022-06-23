import { Component, OnInit } from '@angular/core';
import { JWTService } from 'app/jwt.service';

@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit {

  constructor(public JWTservice: JWTService) { }

  ngOnInit() {
    
  }

}
