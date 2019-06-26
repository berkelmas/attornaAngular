import { Component, OnInit, Renderer2, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-aboutcounter',
  templateUrl: './aboutcounter.component.html',
  styleUrls: ['./aboutcounter.component.css']
})
export class AboutcounterComponent implements OnInit {

  firstCounter: number = 120;
  secondCounter: number = 80;
  thirdCounter: number = 10;
  fourthCounter: number = 8;

  firstStart: number = 0;
  secondStart: number = 0;
  thirdStart: number = 0;
  fourthStart: number = 0;

  firstItemInterval: any;
  secondItemInterval: any;
  thirdItemInterval: any;
  fourthItemInterval: any;

  @ViewChild('firstItem', {static: false}) firstItem: ElementRef;
  @ViewChild('secondItem', {static: false}) secondItem: ElementRef;
  @ViewChild('thirdItem', {static: false}) thirdItem: ElementRef;
  @ViewChild('fourthItem', {static: false}) fourthItem: ElementRef;

  executedCounterFirstItem: boolean = false;
  executedCounterSecondItem: boolean = false;
  executedCounterThirdItem: boolean = false;
  executedCounterFourthItem: boolean = false;

  @HostListener('window:scroll', ['$event']) handleScroll(e) {
      //console.log(this.firstItem.nativeElement.getBoundingClientRect().top);
      //console.log(window.innerHeight);
      if (((this.firstItem.nativeElement.getBoundingClientRect().top - window.innerHeight) < 60) && !this.executedCounterFirstItem) {

        this.firstItemInterval = setInterval(() => {

          if (!(this.firstStart >= this.firstCounter)) {
            this.firstStart++;
            this.renderer.setProperty(this.firstItem.nativeElement, 'innerText', this.firstStart)
          }

        }, 50)  // Buradan her bir element için sayının ilerleme hızı da değiştirilebilir.

        this.executedCounterFirstItem = true;
      }


      if (((this.secondItem.nativeElement.getBoundingClientRect().top - window.innerHeight) < 60) && !this.executedCounterSecondItem) {

        this.secondItemInterval = setInterval(() => {

          if (!(this.secondStart >= this.secondCounter)) {
            this.secondStart++;
            this.renderer.setProperty(this.secondItem.nativeElement, 'innerText', this.secondStart);
          }

        }, 50)
        this.executedCounterSecondItem = true;
      }


      if (((this.thirdItem.nativeElement.getBoundingClientRect().top - window.innerHeight) < 60) && !this.executedCounterThirdItem) {

        this.thirdItemInterval = setInterval(() => {
          if (!(this.thirdStart >= this.thirdCounter)) {
            this.thirdStart++;
            this.renderer.setProperty(this.thirdItem.nativeElement, 'innerText', this.thirdStart);
          }
        }, 400)
        this.executedCounterThirdItem = true;
      }


      if (((this.fourthItem.nativeElement.getBoundingClientRect().top - window.innerHeight) < 60) && !this.executedCounterFourthItem) {
        this.fourthItemInterval = setInterval(() => {
          if (!(this.fourthStart >= this.fourthCounter)) {
            this.fourthStart++;
            this.renderer.setProperty(this.fourthItem.nativeElement, 'innerText', this.fourthStart);
          }
        }, 300)
        this.executedCounterFourthItem = true;
      }

  }


  constructor(private renderer: Renderer2) { }

  ngOnInit() {}

  ngOnDestroy() {
    clearInterval(this.firstItemInterval);
    clearInterval(this.secondItemInterval);
    clearInterval(this.thirdItemInterval);
    clearInterval(this.fourthItemInterval);
  }

}
