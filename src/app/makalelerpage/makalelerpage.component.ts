import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Title, Meta} from '@angular/platform-browser';

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

  constructor(private makaleService: MakalelerService, private router: ActivatedRoute, private uzmanliklarService: UzmanliklarService, private titleService: Title, private metaService: Meta) {}

  ngOnInit() {

    this.titleService.setTitle('Alfa Hukuk & Danışmanlık | Hukuki Yayınlar');
    this.metaService.updateTag({name: 'description', content: 'Av. Ali Tarakın kurucusu olduğu Alfa Hukuk & Danışmanlık Bürosunun yayımladığı hukuki makalelerdir.'})

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
