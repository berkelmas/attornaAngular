import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MakalelerService} from '../makaleler.service';

@Component({
  selector: 'app-makalelerpage',
  templateUrl: './makalelerpage.component.html',
  styleUrls: ['./makalelerpage.component.css']
})
export class MakalelerpageComponent implements OnInit {
  articlesList: any;

  constructor(private makaleService: MakalelerService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.makaleService.getMakale(res.page)
        .subscribe(articles => {
          this.articlesList = [];
          articles['results'].map(res => this.articlesList.push(res));
        });
    });
  }

}
