import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { UzmanliklarService } from '../../uzmanliklar.service';
import { MakalelerService } from '../../makaleler.service';

@Component({
  selector: 'app-singlepracticepage',
  templateUrl: './singlepracticepage.component.html',
  styleUrls: ['./singlepracticepage.component.css']
})
export class SinglepracticepageComponent implements OnInit {
  uzmanlik: any;
  uzmanliklar: any;

  makaleler: [];

  constructor(private uzmanliklarService: UzmanliklarService, private router: ActivatedRoute, private makalelerService: MakalelerService, private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.uzmanliklarService.getSingleUzmanlik(res.id)
        .subscribe(uzmanlik => {
          this.uzmanlik = uzmanlik;
          this.titleService.setTitle(uzmanlik['uzmanlik_baslik']);
          this.metaService.updateTag(uzmanlik['uzmanlik_baslik']);
        })

      this.uzmanliklarService.getUzmanliklar()
        .subscribe(uzmanliklar => this.uzmanliklar = uzmanliklar)


      this.makalelerService.getMakale(1)
        .subscribe(res => this.makaleler = res['results']);

    })
  }

}
