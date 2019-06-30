import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { MakalelerService } from '../makaleler.service';
import { UzmanliklarService } from '../uzmanliklar.service';

@Component({
  selector: 'app-singlemakalepage',
  templateUrl: './singlemakalepage.component.html',
  styleUrls: ['./singlemakalepage.component.css']
})
export class SinglemakalepageComponent implements OnInit {
  singleMakale: any = [];
  makaleler: any = [];
  uzmanliklar: any;

  constructor(private router: ActivatedRoute, private makaleService: MakalelerService, private uzmanliklarService: UzmanliklarService, private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.makaleService.getSingleMakale(res.id)
        .subscribe(article => {
          this.singleMakale = [];
          this.singleMakale.push(article);
          this.titleService.setTitle('Alfa Hukuk | ' + article['makale_baslik']);
          this.metaService.updateTag({name: 'description', content: article['make_meta_description']});
        });
    });

    this.makaleService.getMakale(1)
      .subscribe(makaleler => {
        this.makaleler = makaleler;
      }
    );

    this.uzmanliklarService.getUzmanliklar()
      .subscribe(uzmanliklar => this.uzmanliklar = uzmanliklar)

  }

}
