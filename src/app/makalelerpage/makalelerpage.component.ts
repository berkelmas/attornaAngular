import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MakalelerService} from '../makaleler.service';
import { UzmanliklarService } from '../uzmanliklar.service';

@Component({
  selector: 'app-makalelerpage',
  templateUrl: './makalelerpage.component.html',
  styleUrls: ['./makalelerpage.component.css']
})
export class MakalelerpageComponent implements OnInit {
  articlesList: any;
  uzmanliklar: any;

  pageNumber: any;

  constructor(private makaleService: MakalelerService, private router: ActivatedRoute, private uzmanliklarService: UzmanliklarService) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.makaleService.getMakale(res.page)
        .subscribe(articles => {
          this.articlesList = [];
          articles['results'].map(res => this.articlesList.push(res));

          this.pageNumber = Array.from(Array(articles['totalpages']));
        });

      this.uzmanliklarService.getUzmanliklar()
        .subscribe(res => this.uzmanliklar = res);
    });
  }

}
