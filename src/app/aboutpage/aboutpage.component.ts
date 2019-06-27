import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss'],
  animations: [
    trigger('faqStateAnimation', [
          transition('void => openedAnswer', [style({height: '0px'}), animate('500ms')]),
          transition('openedAnswer => void', [animate('500ms', style({height: '0px'}))])
    ])
  ]
})
export class AboutpageComponent implements OnInit {
  firstQuestion: boolean = false;
  secondQuestion: boolean = false;
  thirdQuestion: boolean = false;
  fourthQuestion: boolean = false;
  fifthQuestion: boolean = false;

  @ViewChild('firstAnswer', {static: false}) firstAnswer: ElementRef;
  @ViewChild('secondAnswer', {static: false}) secondAnswer: ElementRef;
  @ViewChild('thirdAnswer', {static: false}) thirdAnswer: ElementRef;
  @ViewChild('fourthAnswer', {static: false}) fourthAnswer: ElementRef;
  @ViewChild('fifthAnswer', {static: false}) fifthAnswer: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  openQuestion(question: number) {
    console.log(this.secondQuestion);

    switch(true) {
      case (question === 1):
        this.firstQuestion = !this.firstQuestion;
        break;
      case (question === 2):
        this.secondQuestion = !this.secondQuestion;
        break;
      case (question === 3):
        this.thirdQuestion = !this.thirdQuestion;
        break;
      case (question === 4):
        this.fourthQuestion = !this.fourthQuestion;
        break;
      case (question === 5):
        this.fifthQuestion = !this.fifthQuestion;
        break;
      default:
        break;
    }
  }

}
