import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { UzmanliklarService } from '../../uzmanliklar.service';

@Component({
  selector: 'app-singlepracticepage',
  templateUrl: './singlepracticepage.component.html',
  styleUrls: ['./singlepracticepage.component.css']
})
export class SinglepracticepageComponent implements OnInit {
  uzmanlik: any;
  uzmanliklar: any;

  constructor(private uzmanliklarService: UzmanliklarService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.uzmanliklarService.getSingleUzmanlik(res.id)
        .subscribe(uzmanlik => this.uzmanlik = uzmanlik)

      this.uzmanliklarService.getUzmanliklar()
        .subscribe(uzmanliklar => this.uzmanliklar = uzmanliklar)

    })
  }

}
