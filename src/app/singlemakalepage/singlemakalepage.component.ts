import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MakalelerService} from '../makaleler.service';

@Component({
  selector: 'app-singlemakalepage',
  templateUrl: './singlemakalepage.component.html',
  styleUrls: ['./singlemakalepage.component.css']
})
export class SinglemakalepageComponent implements OnInit {
  singleMakale: any = [];
  makaleler: any = [];

  constructor(private router: ActivatedRoute, private makaleService: MakalelerService) {}

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.makaleService.getSingleMakale(res.id)
        .subscribe(article => {
          this.singleMakale = [];
          this.singleMakale.push(article);
          console.log(this.singleMakale);
        });
    });

    this.makaleService.getMakale(1)
      .subscribe(makaleler => {
        console.log(makaleler);
        this.makaleler = makaleler; 
      });
  }

}
