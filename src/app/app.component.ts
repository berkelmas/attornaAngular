import { Component, HostListener, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('menuChanged', [
      transition('void => entered', [style({transform: 'translateY(-100px)', opacity: 0}), animate('500ms')])
    ]),
    trigger('siderbarChanged', [
      transition('void => sidebarEntered', [style({transform: 'translateX(350px)', opacity: 0}), animate('500ms')]),
      transition('sidebarEntered => void', [animate('500ms', style({transform: 'translateX(350px)'}))]),

      transition('void => backEntered', [style({opacity : 0}), animate('500ms')]),
      transition('mainPage => mainPageClosed', [style({transform: 'translateX(-350px)'}), animate('500ms', style({transform: 'translateX(0)'}))])
    ])
  ]
})
export class AppComponent implements OnInit {
  displaySmallNav: boolean = false;
  displaySidebar: boolean = false;

  @HostListener('window:scroll', ['$event']) handleScroll(e) {
    if (window.pageYOffset > 250) {
      this.displaySmallNav = true;
    } else {
      this.displaySmallNav = false;
    }
  }

  ngOnInit() {

  }

  constructor(private renderer: Renderer2) {};

  openMenu() {
    this.displaySidebar = !this.displaySidebar;
  }

}
