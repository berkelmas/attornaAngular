import { Component, OnInit } from '@angular/core';
import {UzmanliklarService} from '../uzmanliklar.service';

@Component({
  selector: 'app-practicespage',
  templateUrl: './practicespage.component.html',
  styleUrls: ['./practicespage.component.css', '../aboutpage/aboutpage.component.scss']
})
export class PracticespageComponent implements OnInit {
  uzmanliklar: any;

  constructor(private uzmanlikService: UzmanliklarService) { }

  ngOnInit() {
  }

}
