import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('sliderAnimation', [
      transition('void => enteredSlide', [style({opacity : 0}), animate('500ms')]),
      transition('enteredSlide => void', animate('500ms', style({opacity: 0})))
    ])
  ]
})
export class SliderComponent implements OnInit {
  currentSlide: number = 1;

  constructor() { }

  ngOnInit() {
  }


}
