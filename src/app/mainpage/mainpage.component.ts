import { Component, OnInit } from '@angular/core';
import { UzmanliklarService } from '../uzmanliklar.service';
import { MakalelerService } from '../makaleler.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  ticarethukuku: any;
  ailehukuku: any;
  cezahukuku: any;
  gayrimenkulhukuku: any;
  icraiflashukuku: any;
  ishukuku: any;

  articles: any;

  constructor(private uzmanliklarService: UzmanliklarService, private makalelerService: MakalelerService) { }

  ngOnInit() {

    this.uzmanliklarService.getUzmanliklar()
      .subscribe(res => {
        res.map(uzmanlik => {
          switch(true) {
            case (uzmanlik['uzmanlik_baslik_nondisplay'] === 'ailehukuku'):
              this.ailehukuku = uzmanlik;
              break;
            case (uzmanlik['uzmanlik_baslik_nondisplay'] === 'cezahukuku'):
              this.cezahukuku = uzmanlik;
              break;
            case (uzmanlik['uzmanlik_baslik_nondisplay'] === 'gayrimenkulhukuku'):
              this.gayrimenkulhukuku = uzmanlik;
              break;
            case (uzmanlik['uzmanlik_baslik_nondisplay'] === 'icraiflashukuku'):
              this.icraiflashukuku = uzmanlik;
              break;
            case (uzmanlik['uzmanlik_baslik_nondisplay'] === 'ishukuku'):
              this.ishukuku = uzmanlik;
              break;
            case (uzmanlik['uzmanlik_baslik_nondisplay'] === 'ticarethukuku'):
              this.ticarethukuku = uzmanlik;
              break;
            default:
              break;
          }

        })
      })

    this.makalelerService.getMakale(1)
      .subscribe(makaleler => {
        this.articles = makaleler['results'];
      });

  }

}
