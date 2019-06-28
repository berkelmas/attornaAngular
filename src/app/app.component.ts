import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

import { MakalelerService } from './makaleler.service';
import { UzmanliklarService } from './uzmanliklar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  uzmanliklar: any;
  makaleler: any;

  @HostListener('window:scroll', ['$event']) handleScroll(e) {
    if (window.pageYOffset > 250) {
      this.displaySmallNav = true;
    } else {
      this.displaySmallNav = false;
    }
  }

  ngOnInit() {
    this.uzmanliklarService.getUzmanliklar()
      .subscribe(uzmanliklar => {
         this.uzmanliklar = uzmanliklar;
      });

    this.makalelerService.getMakale(1)
      .subscribe(makaleler => this.makaleler = makaleler)
  }

  constructor(private uzmanliklarService: UzmanliklarService, private makalelerService: MakalelerService) {};

  openMenu() {
    this.displaySidebar = !this.displaySidebar;
  }

}
