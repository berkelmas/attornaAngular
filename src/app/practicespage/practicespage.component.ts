import { Component, OnInit } from '@angular/core';
import {UzmanliklarService} from '../uzmanliklar.service';

@Component({
  selector: 'app-practicespage',
  templateUrl: './practicespage.component.html',
  styleUrls: ['./practicespage.component.css', '../aboutpage/aboutpage.component.scss']
})
export class PracticespageComponent implements OnInit {
  uzmanliklar: [];

  ailehukuku: any;
  cezahukuku: any;
  gayrimenkulhukuku: any;
  icraiflashukuku: any;
  ishukuku: any;
  mirashukuku: any;
  sozlesmelerhukuku: any;
  tazminathukuku: any;
  ticarethukuku: any;

  constructor(private uzmanliklarService: UzmanliklarService) { }

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
            case (uzmanlik['uzmanlik_baslik_nondisplay'] === 'mirashukuku'):
              this.mirashukuku = uzmanlik;
              break;
            case (uzmanlik['uzmanlik_baslik_nondisplay'] === 'sozlesmelerhukuku'):
              this.sozlesmelerhukuku = uzmanlik;
              break;
            case (uzmanlik['uzmanlik_baslik_nondisplay'] === 'tazminathukuku'):
              this.tazminathukuku = uzmanlik;
              break;
            case (uzmanlik['uzmanlik_baslik_nondisplay'] === 'ticarethukuku'):
              this.ticarethukuku = uzmanlik;
              break;
            default:
              break;
          }

        })
      })
  }

}
