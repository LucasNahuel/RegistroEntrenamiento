import { Component, ElementRef, OnInit, Renderer2, RendererFactory2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JWTService } from 'app/jwt.service';
import { LocalStorageService } from 'app/local-storage.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css']
})
export class UserWidgetComponent implements OnInit {

  environment = environment;

  userMenuOpen = false;


  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;


  constructor(public JWTservice: JWTService, private renderer: Renderer2, private localStorageService: LocalStorageService,  public router: Router) { }

  ngOnInit(): void {
  
    this.renderer.listen('window','click', (e: Event)=>{


      if( e.target !== this.toggleButton.nativeElement && !this.toggleButton.nativeElement.contains(e.target) && !this.menu.nativeElement.contains(e.target)){

        this.userMenuOpen = false;
      }
    })
  
  }

  toggleUserMenu(){
    this.userMenuOpen = !this.userMenuOpen;
  }

  logout()
  {
    this.localStorageService.remove('token');
    this.JWTservice.removeToken();
    this.router.navigate(['/login']);
  }
}
