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
    ])
  ]
})
export class AppComponent implements OnInit {
  displaySmallNav: boolean = false;

  @HostListener('window:scroll', ['$event']) handleScroll(e) {
    if (window.pageYOffset > 50) {

    }
    if (window.pageYOffset > 250) {
      this.displaySmallNav = true;
    } else {
      this.displaySmallNav = false;
    }
    if (window.pageYOffset < 50) {

    }
  }

  ngOnInit() {

  }

  constructor(private renderer: Renderer2) {};
}
