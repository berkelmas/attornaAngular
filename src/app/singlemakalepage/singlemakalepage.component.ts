import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private router: ActivatedRoute, private makaleService: MakalelerService, private uzmanliklarService: UzmanliklarService) {}

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.makaleService.getSingleMakale(res.id)
        .subscribe(article => {
          this.singleMakale = [];
          this.singleMakale.push(article);
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
