import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { JWTService } from 'app/jwt.service';

@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit {
  
  userMenuOpen = false;

  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;


  constructor(public JWTservice: JWTService,  private renderer: Renderer2) { }

  ngOnInit() {

    this.renderer.listen('window','click', (e: Event)=>{


      if(e.target !== this.toggleButton.nativeElement && !this.toggleButton.nativeElement.contains(e.target) && !this.menu.nativeElement.contains(e.target)){

        this.userMenuOpen = false;
      }
    })
    
  }

  toggleUserMenu(){
    this.userMenuOpen = !this.userMenuOpen;
  }

}
